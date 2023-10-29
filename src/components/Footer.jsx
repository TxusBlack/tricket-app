const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-[#303030] text-center lg:text-left">
      <div className="container p-6 md:pt-16 md:pb-12 md:px-24">
        <div className="grid place-items-start md:grid-cols-2 lg:grid-cols-5 pb-4">
          <div className="mb-6 md:ml-8 flex">
            <img
              src="/icons/tricket-logo-white.png"
              alt="Tricket Logo"
              className="w-6/12"
            />
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-white">Información</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className="text-white">
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Términos legales
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-white">Perfil</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className="text-white">
                  Organizador
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Usuario
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-white">Ayuda</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className="text-white">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-white">Síguenos en</h5>

            <ul className="mb-0 list-none flex">
              <li className="pr-4">
                <a href="#!" className="text-white">
                  <img src="/icons/icon-fb.png" className="w-2/4" alt="Icono Facebook" />
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <img src="/icons/icon-instagram.png" className="w-2/4" alt="Icono Instagram" />
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <img src="/icons/icon-twitter.png" className="w-2/4" alt="Icono Twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-[#303030] p-4 pb-0 text-center text-white border-t border-slate-200">
          <p>
            Al continuar en esta página, usted acuerda regirse por nuestros
            <a
              className="pl-1 text-white font-bold dark:text-neutral-400"
              href="#"
            >
              Términos de uso.
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
