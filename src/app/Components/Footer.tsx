import Instagram from "./Icons/Instagram";
import Linkedin from "./Icons/Linkedin";
import Logo from "./Icons/Logo";
import Link from "next/link";


const Footer = () => {
  return (
    //lg:px-20 lg:py-20 sm:py-6 sm:px-7 py-5 px-20
    <footer>
      <div className="bg-black  lg:px-20 lg:py-20 sm:py-6  py-5   ">
          <div className=" flex  flex-wrap items-center justify-between ">
            <div>
              <Logo />
            </div>

            <div className="flex flex-col gap-4">
              <Link className="px-8 text-white" href="#">
                ¿Qué hacemos?
              </Link>
              <Link className="px-8 text-white" href="#">
                ¿Quiénes somos?
              </Link>
              <Link className="px-8 text-white" href="#">
                Contactanos
              </Link>
            </div>

            <div className="flex gap-10">
              <Instagram />
              <Linkedin />
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
