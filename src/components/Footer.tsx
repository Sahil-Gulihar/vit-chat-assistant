import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-vit-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-white font-heading font-bold">VIT</span>
              </div>
              <div>
                <h3 className="font-heading font-bold">VIT University</h3>
                <p className="text-white/60 text-xs">Vellore Institute of Technology</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Established in 1984, VIT is a premier institution committed to providing quality education and producing global leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-vit-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition">About VIT</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Admissions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Academics</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Research</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Placements</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-vit-gold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-vit-gold" />
                <span className="text-white/70">Vellore Campus, Vellore, Tamil Nadu 632014, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-vit-gold" />
                <span className="text-white/70">+91 416 220 2020</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-vit-gold" />
                <span className="text-white/70">info@vit.ac.in</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-vit-gold">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vit-gold hover:text-vit-navy transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vit-gold hover:text-vit-navy transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vit-gold hover:text-vit-navy transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vit-gold hover:text-vit-navy transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vit-gold hover:text-vit-navy transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>© 2026 VIT University. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
