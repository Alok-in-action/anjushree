
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

  // Effect for filtering based on search term
  React.useEffect(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    if (!lowerSearchTerm) {
      setFilteredMenuData(menuData);
      // When search is cleared:
      // If no active category, or current one is not in full menuData, default to the first.
      // Otherwise, keep current activeCategoryId (observer or click might have set it).
      const currentActiveStillValidInFullMenu = menuData.some(cat => cat.id === activeCategoryId);
      if ((!activeCategoryId || !currentActiveStillValidInFullMenu) && menuData.length > 0) {
        setActiveCategoryId(menuData[0].id);
      } else if (menuData.length === 0) { // No menu data at all
        setActiveCategoryId(null);
      }
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

    // After filtering, if the current activeCategoryId is no longer in filtered list,
    // set active to the first of the filtered, or null if no results.
    if (filtered.length > 0) {
      const currentActiveCategoryIsInFiltered = filtered.some(c => c.id === activeCategoryId);
      if (!currentActiveCategoryIsInFiltered) {
        setActiveCategoryId(filtered[0].id);
      }
    } else {
      setActiveCategoryId(null);
    }
  // menuData is effectively static here but included for completeness if it were dynamic.
  // activeCategoryId is an output of this effect logic, not an input for re-filtering.
  }, [searchTerm, menuData]); 

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Effect for IntersectionObserver to update active category on scroll
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px", 
      threshold: 0, 
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveCategoryId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    // Ensure we are observing sections from the currently filtered data
    const sectionsToObserve = filteredMenuData.map(category => document.getElementById(category.id)).filter(el => el);
    
    sectionsToObserve.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsToObserve.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [filteredMenuData]); // Observe based on the filtered data

  // Effect for showing/hiding scroll-to-top button
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
    <div className="flex flex-col flex-1">
      <AppHeader />
      <div className="pt-20"> 
        <div className="sticky top-20 z-40 bg-background shadow-lg"> 
          <CategoryNav
            categories={menuData} // Pass full menuData for nav, activeId will sync with filtered view
            activeCategoryId={activeCategoryId}
            onSelectCategory={handleSelectCategory}
          />
          <div className="p-4 border-b border-border">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>
        </div>
        
        <main className="container mx-auto px-4 py-6">
          <div className="p-4 mb-6 border rounded-md bg-card shadow-sm text-card-foreground">
            <h3 className="text-lg font-headline mb-2 text-primary">Important Information</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Please inform our associate in case you are allergic to any specific food ingredients.</li>
              <li>Once order is placed, please allow us 20-25 minutes to prepare.</li>
              <li>Additional time may be indicated for bulk orders.</li>
              <li>Jain option is available but requested to communicate with server.</li>
              <li>Our Standard Measure - 30Ml (for beverages).</li>
            </ul>
            <p className="mt-3 text-sm">Government Taxes as applicable.</p>
          </div>

          <div className="p-4 mb-6 border rounded-md bg-card shadow-sm text-card-foreground">
            <h3 className="text-lg font-headline mb-2 text-primary">Legend</h3>
            <ul className="list-none space-y-1 text-sm">
              <li className="flex items-center"><span className="mr-2 text-lg">💚</span> Healthy</li>
              <li className="flex items-center"><span className="mr-2 text-lg">🔥</span> Spicy</li>
              <li className="flex items-center"><span className="mr-2 text-lg">👨‍🍳</span> Chef Special</li>
            </ul>
          </div>

          {filteredMenuData.length > 0 ? (
            filteredMenuData.map((category) => (
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
