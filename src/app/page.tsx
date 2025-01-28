import Banner from "./Components/Banner";
import About from "./Components/Icons/About";


export default function Home() {
  return (
    <div className="  min-h-screen   font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  row-start-2 items-center sm:items-start">
          <Banner/>
          <About/>
      </main>
    
    </div>
  );
}
