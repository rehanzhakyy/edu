import DashboardCards from "@/components/dashboard-cards";
import Hero from "@/components/hero";
import { AccordionDemo } from "@/components/question-answer";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Index() {
  return (
    <>
      <Hero />
      <DashboardCards/>
      <div className="w-full flex justify-center mt-12">
        <h1 className="text-4xl font-bold text-center">Question and Answer</h1>
      </div>
      <AccordionDemo/>
      <div className="w-full flex justify-center mt-12">
        <h1 className="text-4xl font-bold text-center">What's Next? </h1>
      </div>
    </>
  );
}
