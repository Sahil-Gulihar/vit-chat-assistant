import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#", hasDropdown: true },
  { label: "Academics", href: "#", hasDropdown: true },
  { label: "Admissions", href: "#", hasDropdown: true },
  { label: "Career Development Centre", href: "#", hasDropdown: true },
  { label: "International", href: "#", hasDropdown: true },
  { label: "Research", href: "#", hasDropdown: true },
  { label: "Campus Life", href: "#", hasDropdown: true },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-vit-navy sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">VIT</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-heading font-bold text-xl tracking-wide">VIT</h1>
              <p className="text-white/70 text-xs">Vellore Institute of Technology</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link px-3 py-2 text-sm flex items-center gap-1 group"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block nav-link px-4 py-3 text-sm border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
