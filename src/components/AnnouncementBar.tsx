import { Megaphone, Building2 } from "lucide-react";

const announcements = [
  "26 (January Session) Results",
  "VITREE-2026 (January Session)- Instructions to Selected Students (Vellore Campus)",
  "UG Science and Humanities NRI Admission 2026",
  "PhD Admissions January 2026",
];

const AnnouncementBar = () => {
  return (
    <div className="bg-vit-dark-blue text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center gap-4">
        {/* Announcements Button */}
        <div className="flex-shrink-0 flex items-center gap-2 bg-vit-gold text-vit-navy px-4 py-1 rounded-full font-medium text-sm">
          <Megaphone className="w-4 h-4" />
          <span>Announcements</span>
        </div>

        {/* Scrolling Announcements */}
        <div className="flex-1 overflow-hidden relative">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...announcements, ...announcements].map((text, index) => (
              <a
                key={index}
                href="#"
                className="text-vit-gold hover:underline text-sm flex items-center gap-2"
              >
                {text}
                <span className="bg-red-500 text-white text-[10px] px-1 rounded">NEW</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-shrink-0 hidden md:flex items-center gap-4">
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-xs font-bold">
            360°
          </div>
          <div className="flex items-center gap-2 border border-white/30 px-3 py-1 rounded-full text-sm">
            <Building2 className="w-4 h-4" />
            <span>VIT - Campuses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
