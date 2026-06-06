import { content } from '../../data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-secondary">
          &copy; {currentYear} {content.footer.copyright}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
