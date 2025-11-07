import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-serif font-bold bg-clip-text text-transparent bg-brand-gradient mb-4">
          404
        </h1>
        <h2 className="text-2xl font-serif text-stone-300 mb-4">Page Not Found</h2>
        <p className="text-stone-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-brand-gradient text-brand-dark font-bold rounded-full shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
