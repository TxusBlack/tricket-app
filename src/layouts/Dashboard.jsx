import { useToggle } from "@uidotdev/usehooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ItemTitleSidebar = ({ text }) => {
  return (
    <li className="relative flex flex-row items-center h-8 text-gray-600 border-l-4 border-transparent pr-10">
      <span className="inline-flex justify-center items-center ml-4" />
      <span className="ml-2 text-sm tracking-wide truncate font-semibold text-zinc-400">
        {text}
      </span>
    </li>
  );
};

const ItemLinkSidebar = ({ imageSrc, imageAlt, text }) => {
  return (
    <li>
      <Link
        href="#"
        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
      >
        <span className="inline-flex justify-center items-center ml-4">
          {imageSrc && <img src={imageSrc} alt={imageAlt} className="w-2/3" />}
        </span>
        <span className="ml-2 text-sm tracking-wide truncate font-semibold text-zinc-600">
          {text}
        </span>
      </Link>
    </li>
  );
};

const SidebarComponent = () => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className="flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
        <div className="flex items-center justify-center pt-4">
          <img
            src="/icons/tricket-logo-black.png"
            alt="Tricket Logo"
            className="w-6/12"
          />
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-8 space-y-1">
            {/* ... other list items ... */}
            <ItemTitleSidebar text="Usuario" />
            <ItemLinkSidebar
              text="Mi cuenta"
              imageSrc="/icons/icon-user.png"
              imageAlt="Icon User"
            />
            <ItemLinkSidebar
              text="Mi cuenta"
              imageSrc="/icons/icon-ticket.png"
              imageAlt="Icon Ticket"
            />
            <div className="pt-10"></div>
            <ItemTitleSidebar text="Organizador" />
            <ItemLinkSidebar
              text="Mis eventos"
              imageSrc="/icons/icon-calendar.png"
              imageAlt="Icon Calendar"
            />
            <ItemLinkSidebar
              text="Crear evento"
              imageSrc="/icons/icon-add.png"
              imageAlt="Icon Add"
            />
            <div className="pt-10"></div>
            <ItemLinkSidebar
              text="Cerrar sesión"
              imageSrc="/icons/icon-exit.png"
              imageAlt="Icon Exit"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

const SearchInput = () => {
  const [value, setValue] = useState(null);

  return (
    <div className="relative">
      <input
        type="text"
        className="p-4 pl-12 rounded-full border border-[#ecc568] bg-[#ecc568] text-white placeholder-white focus:outline-none"
        placeholder="Buscar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <svg
        className="w-4 h-4 absolute left-5 top-[21px]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}

const Header = ({ toggle }) => {
  return (
    <>
      <header className="flex px-10 py-8 text-semibold text-gray-100 bg-[#f2c453] flex-col rounded-b-[28px]">
        <div className="flex align-center">
          {/* <button className="mr-4 pb-10" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button> */}
          <div className="mr-4 pb-10 flex justify-between w-full">
            <div>
              <SearchInput />
            </div>
            <div className="h-100 flex align-center pl-4">
              <button onClick={() => console.log(0)} className="px-6">
                <img src="/icons/avatar.png" alt="Icon Avatar" className="w-10 h-10" />
              </button>
              <button onClick={toggle}>
                <img src="/icons/menu.png" alt="Icon Menu" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-light text-lg md:text-3xl">Hola, Alejandro!</h1>
          <h2 className="font-bold text-lg md:text-3xl">
            Bienvenido a tu evento
          </h2>
        </div>
      </header>
    </>
  );
};

const Dashboard = ({ children }) => {
  const [sidebarOpen, toggle] = useToggle(true);

  return (
    <>
      <div className="flex overflow-x-hidden h-screen">
        <aside
          className={`flex-shrink-0 w-64 flex flex-col border-r transition-all duration-300 ${
            !sidebarOpen ? "-ml-64" : ""
          }`}
        >
          <SidebarComponent />
        </aside>
        <div className="flex-1 bg-[#f1f2f2]">
          <Header toggle={toggle} />
          <main className="p-10">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
