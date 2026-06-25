import { MaddyAbout } from "@/components/maddy/MaddyAbout";
import { MaddyContact } from "@/components/maddy/MaddyContact";
import { MaddyFooter } from "@/components/maddy/MaddyFooter";
import { MaddyGuarantees } from "@/components/maddy/MaddyGuarantees";
import { MaddyHero } from "@/components/maddy/MaddyHero";
import { MaddyNavbar } from "@/components/maddy/MaddyNavbar";
import { MaddyServices } from "@/components/maddy/MaddyServices";

export default function Home() {
  return (
    <>
      <MaddyNavbar />
      <main>
        <MaddyHero />
        <MaddyAbout />
        <MaddyServices />
        <MaddyGuarantees />
        <MaddyContact />
      </main>
      <MaddyFooter />
    </>
  );
}
