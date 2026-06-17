import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  index: number;
}

export default function ServiceCard({ title, description, icon, href, index }: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="premium-card h-full p-9 flex flex-col rounded-2xl">
        <div className="mb-8 text-[#FF6A00] opacity-90 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="font-display text-[22px] leading-none tracking-[-0.5px] mb-4">{title}</h3>
        
        <p className="text-[#A1A1AA] text-[15px] leading-[1.65] flex-1">
          {description}
        </p>

        <div className="mt-8 flex items-center gap-2 text-sm font-medium tracking-widest text-[#FF6A00] group-hover:gap-3 transition-all">
          EXPLORE SERVICE
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
