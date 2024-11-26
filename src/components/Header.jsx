import { Link } from "react-router-dom";
import { Bell, ChevronDown, Dot } from "lucide-react";
import { InputSearch } from "./UI/InputSearch";

export const Header = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 md:px-8 lg:px-12">
      {/* Buscador*/}
      <form className="w-full md:w-[50%] lg:w-[30%] order-1 md:order-none ">
        <InputSearch
          placeholder="Buscar aquí..."
          rounded={"rounded-2xl"}
          colorIcons={"text-gray-300"}
        />
      </form>

      {/* Notificaciones y menú */}
      <nav className="w-full md:w-[60%] lg:w-[70%] flex justify-center md:justify-end">
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/" className="relative">
              <Bell />
              <Dot className=" text-xs absolute -right-2 -top-2  text-red-500" />
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-1">
              Alejandro Developer <ChevronDown />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};