import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Resume", href: "#resume" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="m-4 p-3 bg-card/90 backdrop-blur-sm rounded hover:bg-card transition-colors border border-border"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary" />
        ) : (
          <Menu className="w-6 h-6 text-primary" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-4 bg-card/95 backdrop-blur-sm rounded-lg shadow-xl border border-border p-6 min-w-[200px]">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.label === "Resume" ? (
                  <a
                    href="/krishna-chaitanya-bodepudi.pdf"
                    download="krishna-chaitanya-bodepudi.pdf"
                    onClick={() => setIsOpen(false)}
                    className="block text-muted-foreground hover:text-primary transition-colors font-sans text-sm uppercase tracking-wider"
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-muted-foreground hover:text-primary transition-colors font-sans text-sm uppercase tracking-wider"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
