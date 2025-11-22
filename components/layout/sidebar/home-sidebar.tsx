import { ShopLinks } from '../shop-links';
import { Collection } from '@/lib/shopify/types';

interface HomeSidebarProps {
  collections: Collection[];
}

export function HomeSidebar({ collections }: HomeSidebarProps) {
  return (
    <aside className="max-md:hidden col-span-4 h-screen sticky top-0 p-sides pt-top-spacing flex flex-col justify-between">
      <div>
        <p className="italic tracking-tighter text-base">Electrolytically Reduced Hydrogen-Rich Deuterium Depleted Water</p>
        <div className="mt-5 text-base leading-tight">
          <p>Water Technology that is revolutionizing</p>
          <p>Expand Your Horizons</p>
          <p>Feel & Experience the difference.</p>
        </div>
      </div>
      <ShopLinks collections={collections} />
    </aside>
  );
}
