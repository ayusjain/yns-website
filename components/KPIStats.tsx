const stats = [
  { value: "6+", label: "Episodes" },
  { value: "2", label: "Platforms" },
  { value: "Every 2 Weeks", label: "New Episode" },
  { value: "Real People", label: "No Celebrities" },
];

export default function KPIStats() {
  return (
    <section className="bg-teal text-cream py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading font-black text-amber text-3xl md:text-4xl mb-1">
                {stat.value}
              </p>
              <p className="font-heading uppercase tracking-widest text-cream/70 text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
