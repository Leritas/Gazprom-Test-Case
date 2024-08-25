import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className=" h-20 w-full flex justify-between px-10 py-5 bg-white border-b border-gray-400 border-solid">
      <img src="/gazprom-neft-logo-rus.svg" alt="Газпромнефть" />
      <nav className=" flex gap-10 items-center font-medium *:text-xl hover:*:text-blue-400 *:transition-all">
        <NavLink to={"/"}>Главная</NavLink>
        <NavLink to={"/about"}>Обо мне</NavLink>
      </nav>
    </header>
  );
};
