import { FaInstagram, FaLinkedin} from "react-icons/fa";

const socialLinks = [
  { href: "https://www.instagram.com/finvest_snu/", icon: <FaInstagram /> },
  { href: "https://in.linkedin.com/company/finvestsnu", icon: <FaLinkedin /> },
  
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#56a7d8] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          ©Finvest 2025
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          
        </a>
      </div>
    </footer>
  );
};

export default Footer;
