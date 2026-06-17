"use client";

interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  const repeated = [...items, ...items];

  return (
    <div className="marquee py-5 bg-[#111111] border-y border-white/10">
      <div className="marquee-inner flex items-center gap-16 text-sm uppercase tracking-[4px] font-medium text-white/70">
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 whitespace-nowrap">
            <span>{item}</span>
            <span className="text-[#FF6A00]">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
