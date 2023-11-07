const Footer = () => {
  return (
    <footer className="bg-[#303030] text-white">
      <div className="container p-6 md:p-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:mb-6">
            <img
              src="/icons/tricket-logo-white.png"
              alt="Tricket Logo"
              className="mx-auto w-32 lg:w-auto"
            />
          </div>

          <div className="md:mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Información</h5>
            <ul className="list-none">
              <li><a href="#!" className="hover:underline">¿Quiénes somos?</a></li>
              <li><a href="#!" className="hover:underline">Términos legales</a></li>
            </ul>
          </div>

          <div className="md:mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Perfil</h5>
            <ul className="list-none">
              <li><a href="#!" className="hover:underline">Organizador</a></li>
              <li><a href="#!" className="hover:underline">Usuario</a></li>
            </ul>
          </div>

          <div className="md:mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Ayuda</h5>
            <ul className="list-none">
              <li><a href="#!" className="hover:underline">Preguntas frecuentes</a></li>
              <li><a href="#!" className="hover:underline">Contáctanos</a></li>
            </ul>
          </div>

          <div className="md:mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Síguenos en</h5>
            <ul className="flex justify-center space-x-4 pb-2 md:pb-4">
              <li><a href="#!"><img className="h-8 w-auto mb-2" src="/icons/icon-fb.png" alt="Icono Facebook" /></a></li>
              <li><a href="#!"><img className="h-8 w-auto mb-2" src="/icons/icon-instagram.png" alt="Icono Instagram" /></a></li>
              <li><a href="#!"><img className="h-8 w-auto mb-2" src="/icons/icon-twitter.png" alt="Icono Twitter" /></a></li>
            </ul>
          </div>
        </div>
        <div className="text-center border-t border-slate-200 p-4">
          <p>
            Al continuar en esta página, usted acuerda regirse por nuestros
            <a href="#" className="font-bold underline pl-1">Términos de uso.</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
