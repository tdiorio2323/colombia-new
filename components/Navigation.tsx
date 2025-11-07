import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
  const { isAuthenticated, isCreator, user } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-stone-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-brand-gradient">
            Eimy Contreras
          </Link>

          <div className="flex items-center gap-6">
            {/* Public links */}
            <Link to="/services" className="text-stone-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/shop" className="text-stone-300 hover:text-white transition-colors">
              Shop
            </Link>
            <Link to="/community" className="text-stone-300 hover:text-white transition-colors">
              Community
            </Link>

            {isAuthenticated ? (
              <>
                {/* Protected links */}
                <Link to="/messages" className="text-stone-300 hover:text-white transition-colors">
                  Messages
                </Link>

                {isCreator && (
                  <Link to="/upload" className="text-brand-gold hover:text-brand-rose transition-colors">
                    Upload
                  </Link>
                )}

                <Link
                  to="/profile"
                  className="px-4 py-2 bg-brand-gradient text-brand-dark font-medium rounded-full hover:shadow-glow transition-all"
                >
                  {user?.username}
                </Link>
              </>
            ) : (
              <>
                {/* Guest links */}
                <Link
                  to="/login"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-brand-gradient text-brand-dark font-medium rounded-full hover:shadow-glow transition-all"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
