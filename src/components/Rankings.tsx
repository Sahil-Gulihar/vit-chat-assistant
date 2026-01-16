const rankings = [
  { rank: 13, label: "University" },
  { rank: 15, label: "Engineering" },
  { rank: 13, label: "Research" },
  { rank: 20, label: "Overall" },
];

const Rankings = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Rankings */}
          <div>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-8">
              RANKINGS 2025
            </h2>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-vit-gold/10 p-4 rounded-lg">
                <p className="text-vit-navy font-heading font-bold text-2xl">NIRF</p>
                <p className="text-muted-foreground text-xs">National Institutional Ranking Framework</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {rankings.map((item) => (
                <div 
                  key={item.label}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <p className="text-5xl font-heading font-bold text-vit-navy mb-2">
                    {item.rank}
                  </p>
                  <p className="text-muted-foreground font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-6 text-center">
              <h3 className="text-vit-navy font-heading font-bold text-lg mb-2">VIT</h3>
              <p className="text-sm text-green-800 font-medium">Pioneering Sustainability</p>
              <p className="text-xs text-green-700 mt-1">Climbing Higher for a Greener Future</p>
              <div className="mt-4 bg-white rounded p-2 inline-block">
                <p className="text-xs font-bold">QS WORLD UNIVERSITY</p>
                <p className="text-xs">RANKINGS SUSTAINABILITY | 2026</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-6 text-center">
              <p className="text-blue-900 font-bold text-4xl mb-2">Top 200</p>
              <p className="text-sm text-blue-800">QS World Ranking 2026</p>
              <div className="mt-4 text-xs text-blue-700">
                Among top universities globally
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg p-6 text-center">
              <p className="text-amber-900 font-bold text-3xl mb-2">US News</p>
              <p className="text-sm text-amber-800">Best Global Universities 2026</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-6 text-center">
              <p className="text-purple-900 font-bold text-3xl mb-2">RUR</p>
              <p className="text-sm text-purple-800">Round University Ranking 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rankings;
