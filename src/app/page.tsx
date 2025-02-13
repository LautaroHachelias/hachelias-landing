import About2 from "./Components/About2";
import Banner from "./Components/Banner";
import About from "./Components/Icons/About";
import Contact from "./Components/Contact"
import Clients from "./Components/Clients";
import Presentation from "./Components/Presentation";
import VideoSection from "./Components/VideoSection";

export default function Home() {
  return (
    <div className="  min-h-screen   font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="flex flex-col ">
        <Presentation>
          <Banner/>
            <VideoSection/>
          <About/>
          <About2/>
          <Clients/>
          <Contact/>
        </Presentation>
      </main>
    
    </div>
  );
}
