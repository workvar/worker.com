export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">SileoTube</h2>
            <p className="text-gray-600">
              A powerful productivity tool designed to streamline your workflow.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">ProjeX</h2>
            <p className="text-gray-600">
              Advanced project management solution for modern teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

