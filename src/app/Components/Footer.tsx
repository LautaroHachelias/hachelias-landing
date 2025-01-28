import Instagram from "./Icons/Instagram";
import Linkedin from "./Icons/Linkedin";
import Logo from "./Icons/Logo";
import Link from "next/link";


const Footer = () => {
  return (
    
    <footer>
            <div className="bg-black row-start-3 flex  flex-wrap items-center justify-between  lg:px-20 lg:py-20 sm:py-6 sm:px-7 py-5 px-20">
                <div>
                    <Logo />
                </div>

                <div className="flex flex-col gap-4">
                    <Link className="px-8" href="#">
                    ¿Qué hacemos?
                    </Link>
                    <Link className="px-8" href="#">
                    ¿Quiénes somos?
                    </Link>
                    <Link className="px-8" href="#">
                    Contactanos
                    </Link>
                </div>

                <div className="flex gap-10">
                    <Instagram/>
                    <Linkedin/>
                </div>

            </div>
    </footer>
  );
};

export default Footer;
