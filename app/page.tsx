import Hero from "@/src/components/pages/Landing/sections/Hero";
import TheProblem from "@/src/components/pages/Landing/sections/TheProblem";
import TheEpidemic from "@/src/components/pages/Landing/sections/TheEpidemic";
import TheAddress from "@/src/components/pages/Landing/sections/TheAddress";
import PreFooter from "@/src/components/pages/Landing/sections/PreFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <TheProblem />
      <TheEpidemic />
      <TheAddress />
      <PreFooter />
    </>
  );
}

