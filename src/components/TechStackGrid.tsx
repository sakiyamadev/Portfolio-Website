import { techStackGroups } from "../data/techStack";

export function TechStackGrid() {
  return (
    <section className="mt-10">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a8a8a8]">Tech Stack</p>
        <h2 className="heading-serif mt-2 text-3xl font-bold text-[#e8e3da]">What I Use</h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {techStackGroups.map((group) => (
          <div key={group.title} className="rounded-md border border-[#2a2a2a] bg-[#1a1a1a] p-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a8a8a8]">{group.title}</h3>
            <div className="mt-5 divide-y divide-[#2a2a2a]">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#2f2f2f] bg-[#121212] text-[#c9c9c9]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#e8e3da]">{item.name}</h4>
                      <p className="mt-1 text-sm leading-5 text-[#a8a8a8]">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
