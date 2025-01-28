import About2 from "./Components/About2";
import Banner from "./Components/Banner";
import About from "./Components/Icons/About";
import Contact from "./Components/Contact"

export default function Home() {
  return (
    <div className="  min-h-screen   font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  items-center sm:items-start">
          <Banner/>
          <About/>
          <About2/>
          <Contact/>
      </main>
    
    </div>
  );
}
