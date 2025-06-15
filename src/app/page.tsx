'use client';

import * as React from 'react';
import { AppHeader } from '@/components/layout/app-header';
import { CategoryNav } from '@/components/menu/category-nav';
import { SearchBar } from '@/components/menu/search-bar';
import { MenuCategorySection } from '@/components/menu/menu-category-section';
import { menuData, type MenuCategory as MenuCategoryType } from '@/data/menu';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredMenuData, setFilteredMenuData] = React.useState<MenuCategoryType[]>(menuData);
  const [activeCategoryId, setActiveCategoryId] = React.useState<string | null>(menuData[0]?.id || null);
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  const sectionRefs = React.useRef<(HTMLElement | null)[]>([]);

  React.useEffect(() => {
    sectionRefs.current = menuData.map((_, i) => sectionRefs.current[i] || React.createRef<HTMLElement>().current);
  }, []);
  
  React.useEffect(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    if (!lowerSearchTerm) {
      setFilteredMenuData(menuData);
      return;
    }

    const filtered = menuData
      .map(category => ({
        ...category,
        items: category.items.filter(
          item =>
            item.name.toLowerCase().includes(lowerSearchTerm) ||
            (item.description && item.description.toLowerCase().includes(lowerSearchTerm))
        ),
      }))
      .filter(category => category.items.length > 0);
    
    setFilteredMenuData(filtered);
    if (filtered.length > 0 && !filtered.find(c => c.id === activeCategoryId)) {
      setActiveCategoryId(filtered[0].id);
    } else if (filtered.length === 0) {
      setActiveCategoryId(null);
    }
  }, [searchTerm, activeCategoryId]);

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      // Calculate offset for fixed/sticky headers
      // AppHeader (5rem) + Sticky Nav/Search container (approx 3.5rem for nav + 3.5rem for search = 7rem)
      // Total offset approx 5rem + 7rem = 12rem or specific value
      const offset = (16 * 5) + (16 * 7); // 5rem header + 7rem (nav+search)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset + 32; // Extra 32px for breathing room

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px", // Adjust to detect when section is roughly in middle
      threshold: 0, // Trigger when any part of the section enters/leaves the rootMargin window
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveCategoryId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentSections = filteredMenuData.map(category => document.getElementById(category.id)).filter(el => el);
    
    currentSections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [filteredMenuData]); // Rerun when filteredMenuData changes

  React.useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400){
        setShowScrollTop(true)
      } else if (showScrollTop && window.pageYOffset <= 400){
        setShowScrollTop(false)
      }
    };
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScrollTop]);

  const scrollToTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <div className="pt-20"> {/* Offset for fixed AppHeader */}
        <div className="sticky top-20 z-40 bg-background shadow-lg">
          <CategoryNav
            categories={menuData} /* Always show all categories for navigation */
            activeCategoryId={activeCategoryId}
            onSelectCategory={handleSelectCategory}
          />
          <div className="p-4 border-b border-border">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>
        </div>
        
        <main className="container mx-auto px-4 py-6">
          {filteredMenuData.length > 0 ? (
            filteredMenuData.map((category, index) => (
              <MenuCategorySection
                key={category.id}
                category={category}
              />
            ))
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-headline mb-4">No results found</h2>
              <p className="text-muted-foreground">
                Sorry, we couldn't find any dishes matching "{searchTerm}". Try a different search term.
              </p>
            </div>
          )}
        </main>
      </div>
      {showScrollTop && (
        <Button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full p-0 shadow-lg"
            variant="default"
            aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
