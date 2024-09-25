import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-sky-950 flex text-white justify-around h-14 items-center">
        <nav>
          <ul className="flex gap-4 font-semibold">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Projetos</NavLink>
            </li>
            <li>
              <NavLink to="/genre">Sobre mim</NavLink>
            </li>
            <li>
              <NavLink to="/genre">Contato</NavLink>
            </li>
            <li>
              <NavLink to="/genre">Redes</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
