import type { MenuCategory as MenuCategoryType } from '@/data/menu';
import { MenuItemCard } from './menu-item-card';

interface MenuCategorySectionProps {
  category: MenuCategoryType;
}

export function MenuCategorySection({ category }: MenuCategorySectionProps) {
  return (
    <section id={category.id} className="py-8 scroll-mt-48" aria-labelledby={`${category.id}-heading`}>
      <div className="flex items-center mb-6">
        <category.Icon className="h-8 w-8 mr-3 text-primary" />
        <h2 id={`${category.id}-heading`} className="text-3xl font-headline tracking-tight text-primary">
          {category.name}
        </h2>
      </div>
      {category.items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.items.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No items in this category yet.</p>
      )}
    </section>
  );
}
