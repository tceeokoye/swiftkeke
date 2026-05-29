import OnboardingPageShell from "@/components/OnboardingPageShell";

const highlights = [
  "Get early access to launches, city coverage updates, and promotions.",
  "Reserve your spot before the full app rollout in your area.",
  "Be first in line for safer, more reliable city rides.",
];

const stats = [
  { label: "Launch priority", value: "Premium" },
  { label: "Rider rating", value: "4.9/5" },
  { label: "Safety coverage", value: "24/7" },
];

export default function PassengerWaitlistPage() {
  return (
    <OnboardingPageShell
      defaultAccountType="passenger"
      badge="Passenger waitlist"
      heading="Join the earliest OnaAga rider list"
      description="Be among the first riders to access the platform as it rolls out in new cities and unlock premium early-access updates."
      highlights={highlights}
      stats={stats}
    />
  );
}
