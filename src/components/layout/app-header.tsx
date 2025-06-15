import Link from 'next/link';
import { Utensils } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Utensils className="h-8 w-8" />
          <h1 className="text-3xl font-headline tracking-tight">Aroma Flavors</h1>
        </Link>
        {/* Placeholder for potential future elements like a theme toggle or user account */}
      </div>
    </header>
  );
}
