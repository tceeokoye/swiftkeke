import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { toast } from "sonner";
import { useDispatch } from "react-redux";

import axios from "@/lib/axios";
import { HttpRequestConfigProps } from "@/types/global";
import { tokenActions } from "@/store/token/token-slice";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const dispatch = useDispatch();

  const sendHttpRequest = useCallback(
    async ({ successRes, requestConfig, errorRes }: HttpRequestConfigProps) => {
      setError(null);

      if (!requestConfig.token && requestConfig.isAuth) {
        // Clear any stored token
        dispatch(tokenActions.deleteToken());

        // if (requestConfig.userType === "seller") {
        //   router.replace("/auth/seller/login");
        // }

        setError("Please login!");
        toast.error("Please login!");
        return;
      }

      setLoading(true);

      try {
        const isFormData = requestConfig.body instanceof FormData;

        const config = {
          url: requestConfig.url,
          method: requestConfig.method,
          headers: {
            ...(isFormData ? {} : { "Content-Type": "application/json" }),
            ...(requestConfig.token && {
              Authorization: `Bearer ${requestConfig.token}`,
            }),
          },
          ...(requestConfig.params && { params: requestConfig.params }),
          ...(requestConfig.body && { data: requestConfig.body }),
        };

        console.log("config:", config);

        const res = await axios.request(config);

        if (res.status >= 200 && res.status < 300) {
          if (requestConfig.successMessage) {
            toast.success(requestConfig.successMessage);
          }
          successRes(res);
        }
      } catch (error: any) {
        await errorRes?.(error);
        console.log("Error in HTTP request:", error);
        console.log("Full error response:", error?.response);

        let errorMessage: string = "Something went wrong. Please try again.";

        if (error.code === "ERR_NETWORK") {
          errorMessage =
            "Network error. Please check your internet connection.";
        } else if (error.code === "ECONNABORTED") {
          errorMessage = "Request timed out. Please try again.";
        } else if (error?.response?.data) {
          const data = error.response.data;
          const contentType = error.response.headers?.['content-type'];

          // Check if data is HTML and should be ignored as a message
          const isHtml = typeof data === "string" && (data.trim().startsWith("<!DOCTYPE") || data.trim().startsWith("<html") || contentType?.includes("text/html"));

          if (!isHtml) {
            // Prioritize description or message if available
            if (data.description) {
              errorMessage = data.description;
            } else if (data.message && data.message !== "error") {
              errorMessage = data.message;
            } else {
              // Extract the first message dynamically regardless of nesting depth
              const extractFirstString = (obj: any): string | null => {
                if (typeof obj === "string") return obj;
                if (Array.isArray(obj)) {
                  for (const item of obj) {
                    const res = extractFirstString(item);
                    if (res) return res;
                  }
                } else if (typeof obj === "object" && obj !== null) {
                  for (const key of Object.keys(obj)) {
                    if (key === "message" && obj[key] === "error") continue; // Skip generic "error" message
                    const res = extractFirstString(obj[key]);
                    if (res) return res;
                  }
                }
                return null;
              };

              const foundMessage = extractFirstString(data);
              if (foundMessage) {
                errorMessage = foundMessage;
              }
            }
          }
        }
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          errorMessage = "Token expired, please login.";
          dispatch(tokenActions.deleteToken());
          localStorage.removeItem("accessToken");
          localStorage.removeItem("token");
          console.log("Unauthorized access - redirecting to login", errorMessage);

          const userType = requestConfig.userType ?? "driver"; // default driver
          const isMobile = /Android|iPhone|iPad|iPod/i.test(
            navigator.userAgent,
          );
          
          if (typeof window !== "undefined") {
            const currentUrl = window.location.pathname + window.location.search;
            if (currentUrl.startsWith("/dashboard/seller")) {
               localStorage.setItem("sellerRedirectUrl", currentUrl);
            }
          }

          if (userType === "driver") {
            router.replace("/auth/driver/login");
          } else {
            if (isMobile) {
              const params = new URLSearchParams(window.location.search);
              params.set("showLogin", "true");

              window.history.replaceState(
                {},
                "",
                `${window.location.pathname}?${params.toString()}`,
              );
            } else {
              router.replace("/auth/login");
            }
          }
        }

        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [router, dispatch],
  );

  return {
    loading,
    sendHttpRequest,
    error,
    setError,
  };
};
