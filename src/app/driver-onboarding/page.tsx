import OnboardingPageShell from "@/components/OnboardingPageShell";

const highlights = [
  "Upload your documents once and complete the verification flow in minutes.",
  "Get guided vehicle checks, payout setup, and safety onboarding.",
  "Join a trusted driver network with real-time support and city coverage.",
];

const stats = [
  { label: "Verified drivers", value: "4.9/5" },
  { label: "Response time", value: "< 10m" },
  { label: "Cities live", value: "12+" },
];

export default function DriverOnboardingPage() {
  return (
    <OnboardingPageShell
      defaultAccountType="driver"
      badge="Driver onboarding"
      heading="Launch your earning journey with OnaAga"
      description="Bring your vehicle, complete the onboarding checklist, and start earning with a fully verified, rider-first network."
      highlights={highlights}
      stats={stats}
    />
  );
}
