import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import ExploreSection from "@/components/ExploreSection";
import ExperienceSection from "@/components/ExperienceSection";
import SpiritualSection from "@/components/SpiritualSection";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <ExploreSection />
        <ExperienceSection />
        <SpiritualSection />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
