import AmbientBackground from "@/components/AmbientBackground";
import TopBar from "@/components/TopBar";
import Terminal from "@/components/Terminal";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <TopBar />
      <Terminal />
      <Dock />
    </>
  );
}
