import Link from 'next/link';
import Image from 'next/image';

export function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-primary text-primary-foreground shadow-lg animate-in fade-in duration-500 ease-out">
      <div className="container mx-auto flex h-full items-center justify-center px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Aroma Flavors Logo"
            width={180}
            height={60}
            data-ai-hint="restaurant logo"
            priority
          />
        </Link>
        {/* Placeholder for potential future elements like a theme toggle or user account */}
      </div>
    </header>
  );
}
