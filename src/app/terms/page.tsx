export default function Terms() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Terms of Service</h1>
      
      <div className="space-y-4 text-gray-600">
        <p>Last updated: {new Date().toLocaleDateString("en-US")}</p>
        
        <h2 className="text-xl font-semibold text-gray-800 pt-4">Use of Service</h2>
        <p>
          QRCraft is provided as-is for personal and commercial use. 
          You may generate QR codes for any lawful purpose.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 pt-4">Disclaimer</h2>
        <p>
          We make no warranties about the reliability or availability of this service. 
          Use at your own risk.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 pt-4">Limitation of Liability</h2>
        <p>
          QRCraft shall not be liable for any damages arising from the use of this service.
        </p>
      </div>
      
      <a href="/" className="inline-block mt-8 text-blue-600 hover:underline">
        ← Back to Generator
      </a>
    </main>
  );
}