
import footer_logo from "../../../images/footer_logo.png";
const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col items-center justify-between gap-5 bg-black py-8 text-white md:flex-row md:gap-0">
        <img src={footer_logo} alt="" />
        <nav className="text-lg">
          <ul className="flex h-full items-center justify-center gap-3">
            <li>
              <a className="cursor-pointer hover:underline">Home</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Contact</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">About</a>
            </li>
          </ul>
        </nav>
      </div>
      <aside className=" py-5 text-center bg-black text-sm text-white">
        <p>
          &copy; 2025 Educam College Booking System. All Rights Reserved by
          Priyanka Das Dipa.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
