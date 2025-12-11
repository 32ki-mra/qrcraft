export default function Privacy() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
      
      <div className="space-y-4 text-gray-600">
        <p>Last updated: {new Date().toLocaleDateString("en-US")}</p>
        
        <h2 className="text-xl font-semibold text-gray-800 pt-4">Information We Collect</h2>
        <p>
          QRCraft does not collect or store any personal information. 
          All QR code generation happens in your browser.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 pt-4">Cookies</h2>
        <p>
          We may use cookies for analytics purposes to improve our service. 
          Third-party services like Google Analytics may also use cookies.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 pt-4">Advertising</h2>
        <p>
          We may display advertisements through Google AdSense. 
          These ads may use cookies to serve personalized content.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 pt-4">Changes</h2>
        <p>
          We may update this policy from time to time. 
          Please check this page periodically for changes.
        </p>
      </div>
      
      <a href="/" className="inline-block mt-8 text-blue-600 hover:underline">
        ← Back to Generator
      </a>
    </main>
  );
}