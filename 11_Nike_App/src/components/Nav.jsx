import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";

const Nav = () => {
  return (
    <header className="absolute padding-x py-8 w-full z-10">
      <nav className="max-container flex justify-between p-2">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} />
        </a>
        <ul className="flex max-lg:hidden gap-[50px]">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="leading-normal">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="font-semibold max-lg:hidden font-montserrat">
          <a href="/">Sign in </a>
          <span>/</span>
          <a href="/"> Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hanburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
