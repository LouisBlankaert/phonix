export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-neutral-500 text-sm font-light">
          © {new Date().getFullYear()} Phonix - Réparation de téléphones professionnelle
        </p>
      </div>
    </footer>
  );
}
