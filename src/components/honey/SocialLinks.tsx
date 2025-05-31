import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2">Suivez-nous</h2>
      <div className="flex items-center gap-4 mb-2 text-2xl">
        <a href="https://facebook.com" aria-label="Facebook" className="text-blue-600 hover:opacity-80">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" className="hover:opacity-80">
          <FaXTwitter />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className="text-blue-700 hover:opacity-80">
          <FaLinkedinIn />
        </a>
        <a href="https://youtube.com" aria-label="YouTube" className="text-red-600 hover:opacity-80">
          <FaYoutube />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" className="text-black hover:opacity-80">
          <FaInstagram />
        </a>
      </div>
      <a
        href="#"
        className="text-sm text-blue-600 underline hover:text-blue-800"
      >
        Présence du Ministère sur les médias sociaux
      </a>
    </div>
  );
}
