import { GraduationCap, Briefcase, Award, Globe } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Undergraduate",
    description: "B.Tech, B.Sc, BBA, B.Com and more programs across 20+ disciplines",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Briefcase,
    title: "Postgraduate",
    description: "M.Tech, MBA, MCA, M.Sc programs with industry-focused curriculum",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Award,
    title: "Doctoral",
    description: "Ph.D programs with cutting-edge research opportunities",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Globe,
    title: "International",
    description: "Global exchange programs and international collaborations",
    color: "from-purple-500 to-purple-600",
  },
];

const Programs = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            Academic Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of programs designed to shape future leaders and innovators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer border border-border"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <program.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                {program.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
