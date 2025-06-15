import type { MenuItem } from '@/data/menu';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { IndianRupee } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <Card className="flex flex-col h-full bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="font-headline text-xl text-primary">{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        {item.description && (
          <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
        )}
        <div className="flex items-center text-lg font-semibold text-accent-foreground">
          <IndianRupee className="h-5 w-5 mr-1 text-accent" />
          <span>{item.price}</span>
        </div>
      </CardContent>
    </Card>
  );
}
