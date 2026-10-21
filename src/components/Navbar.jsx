
import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
  { label: "Home", target: "home" },
  { label: "Why EAK", target: "why-eak" },
  { label: "Academics", target: "academics" },
  { label: "Facilities", target: "facilities" },
  { label: "Admissions", target: "admissions" },
  { label: "FAQs", target: "faq" },
];

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <a className="nav-brand" href="#home">
        <GraduationCap size={32} />
        <span>
          <strong>EAK INTERNATIONAL</strong>
          <small>SCHOOL</small>
        </span>
      </a>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <a
            key={link.target}
            href={`#${link.target}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <button className="nav-apply" onClick={() => goTo("enquiry")}>
          Apply Now
        </button>
      </nav>

      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export default Navbar;
