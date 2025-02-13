import About2 from "./Components/About2";
import Banner from "./Components/Banner";
import About from "./Components/Icons/About";
import Contact from "./Components/Contact"
import Clients from "./Components/Clients";
import Presentation from "./Components/Presentation";

export default function Home() {
  return (
    <div className="  min-h-screen   font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  items-center sm:items-start">
        <Presentation>
          <Banner/>
          <About/>
          <About2/>
          <Clients/>
          <Contact/>
        </Presentation>
      </main>
    
    </div>
  );
}
