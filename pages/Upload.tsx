export default function Upload() {
  return (
    <div className="min-h-screen bg-brand-dark px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-brand-dark-2 border border-stone-700/50 rounded-2xl p-8 shadow-glow">
          <h1 className="text-3xl font-serif font-bold bg-clip-text text-transparent bg-brand-gradient mb-4">
            Upload Content
          </h1>
          <p className="text-stone-300 mb-6">Upload and manage your exclusive content.</p>

          <div className="border-2 border-dashed border-stone-600 rounded-lg p-12 text-center">
            <p className="text-stone-400">Creator-only feature</p>
            <p className="text-sm text-stone-500 mt-2">Drag and drop files here to upload</p>
          </div>
        </div>
      </div>
    </div>
  );
}
