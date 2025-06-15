
import * as React from 'react';
import type { MenuCategory } from '@/data/menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryNavProps {
  categories: MenuCategory[];
  activeCategoryId: string | null;
  onSelectCategory: (categoryId: string) => void;
}

export function CategoryNav({ categories, activeCategoryId, onSelectCategory }: CategoryNavProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);
  const categoryButtonRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});

  React.useEffect(() => {
    if (activeCategoryId && scrollContainerRef.current && categoryButtonRefs.current[activeCategoryId]) {
      const activeButton = categoryButtonRefs.current[activeCategoryId];
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          inline: 'nearest', 
          block: 'nearest',
        });
      }
    }
  }, [activeCategoryId]);

  return (
    <nav
      ref={scrollContainerRef}
      className="overflow-x-auto whitespace-nowrap py-3 px-4 bg-background border-b border-border"
      aria-label="Menu categories"
    >
      <div className="flex space-x-2 sm:justify-center">
        {categories.map((category) => (
          <Button
            ref={(el) => (categoryButtonRefs.current[category.id] = el)}
            key={category.id}
            variant={activeCategoryId === category.id ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onSelectCategory(category.id)}
            className={cn(
              "flex-shrink-0 items-center gap-2 px-3 py-1.5 h-auto text-sm rounded-full transition-colors duration-200",
              activeCategoryId === category.id
                ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                : 'text-foreground hover:bg-accent/50 hover:text-accent-foreground',
              "font-headline"
            )}
            aria-pressed={activeCategoryId === category.id}
          >
            <category.Icon className="h-4 w-4" />
            <span>{category.name}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
}
