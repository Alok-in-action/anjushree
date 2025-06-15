
export function AppFooter() {
  return (
    <footer className="bg-primary text-primary-foreground py-4 mt-auto">
      <div className="container mx-auto text-center text-sm">
        <p>Crafted by Alok Khamora</p>
        <p>Contact: 7000703701</p>
        <div className="mt-3 pt-3 border-t border-primary-foreground/20">
            <p className="mb-1">Please inform our associate in case you are allergic to any specific food ingredients.</p>
            <p className="mb-1">Once order is placed, please allow us 20-25 minutes to prepare.</p>
            <p className="mb-1">Additional time may be indicated for bulk orders.</p>
            <p className="mb-1">Jain option is available but requested to communicate with server.</p>
            <p className="mt-2">Government Taxes as applicable.</p>
        </div>
      </div>
    </footer>
  );
}
