import { useParams } from 'react-router-dom';

export default function CreatorProfile() {
  const { username } = useParams<{ username: string }>();

  // In a real app, you'd fetch creator data here
  // For now, mock a simple 404 check
  const creatorExists = username === 'demo' || username === 'eimy';

  if (!creatorExists) {
    return (
      <div className="min-h-screen bg-brand-dark px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-brand-dark-2 border border-stone-700/50 rounded-2xl p-8 shadow-glow text-center">
            <h1 className="text-3xl font-serif font-bold text-stone-300 mb-4">
              Creator Not Found
            </h1>
            <p className="text-stone-400">@{username} does not exist</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-brand-dark-2 border border-stone-700/50 rounded-2xl p-8 shadow-glow">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-brand-gradient"></div>
            <div>
              <h1 className="text-3xl font-serif font-bold bg-clip-text text-transparent bg-brand-gradient">
                @{username}
              </h1>
              <p className="text-stone-400">Creator</p>
            </div>
          </div>

          <p className="text-stone-300">
            Welcome to {username}'s exclusive profile. View their content and experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
