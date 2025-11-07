import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { user, logout, updateRole, isCreator } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleCreatorRole = () => {
    updateRole(isCreator ? 'USER' : 'CREATOR');
  };

  return (
    <div className="min-h-screen bg-brand-dark px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-brand-dark-2 border border-stone-700/50 rounded-2xl p-8 shadow-glow">
          <h1 className="text-3xl font-serif font-bold bg-clip-text text-transparent bg-brand-gradient mb-6">
            Profile
          </h1>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-400 mb-1">Username</label>
              <p className="text-white text-lg">{user?.username}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-400 mb-1">Email</label>
              <p className="text-white text-lg">{user?.email}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-400 mb-1">Role</label>
              <div className="flex items-center gap-3">
                <p className="text-white text-lg">
                  {user?.role === 'CREATOR' ? 'Creator' : 'User'}
                </p>
                <button
                  onClick={toggleCreatorRole}
                  className="text-sm px-4 py-1 bg-stone-700 hover:bg-stone-600 text-white rounded transition-colors"
                >
                  Toggle to {isCreator ? 'User' : 'Creator'}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-700 space-y-3">
            <button
              onClick={handleLogout}
              className="w-full px-6 py-3 bg-red-500/10 border border-red-500/50 text-red-400 font-medium rounded-lg hover:bg-red-500/20 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
