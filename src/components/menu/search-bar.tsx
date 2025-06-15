import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  className?: string;
}

export function SearchBar({ searchTerm, onSearchChange, className }: SearchBarProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search for your favorite dish..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-full bg-input py-2 pl-10 pr-4 focus:ring-accent focus:ring-2 h-10 text-base"
        aria-label="Search menu items"
      />
    </div>
  );
}
