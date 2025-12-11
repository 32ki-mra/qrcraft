export default function About() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About QRCraft</h1>
      
      <div className="space-y-4 text-gray-600">
        <p>
          QRCraft is a free, simple, and fast QR code generator. 
          Create QR codes for URLs, text, email addresses, and more in seconds.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 pt-4">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Instant QR code generation</li>
          <li>Free to use, no signup required</li>
          <li>Download as PNG image</li>
          <li>Works on all devices</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-800 pt-4">Contact</h2>
        <p>For questions or feedback, please reach out via GitHub.</p>
      </div>
      
      <a href="/" className="inline-block mt-8 text-blue-600 hover:underline">
        ← Back to Generator
      </a>
    </main>
  );
}