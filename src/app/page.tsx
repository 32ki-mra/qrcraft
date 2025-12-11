"use client";

import { useState, useRef } from "react";
import QRCode from "qrcode";

export default function Home() {
  const [text, setText] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [generated, setGenerated] = useState(false);

  const generateQR = async () => {
    if (!text || !canvasRef.current) return;
    await QRCode.toCanvas(canvasRef.current, text, {
      width: 256,
      margin: 2,
    });
    setGenerated(true);
  };

  const downloadQR = () => {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.png";
    a.click();
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">QR Code Generator</h1>

      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />

        <button
          onClick={generateQR}
          disabled={!text}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
        >
          Generate QR Code
        </button>
      </div>

      <div className="mt-8 flex flex-col items-center space-y-4">
        <canvas ref={canvasRef} className={generated ? "block" : "hidden"} />

        {generated && (
          <button
            onClick={downloadQR}
            className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Download PNG
          </button>
        )}
      </div>
      <footer className="mt-16 text-sm text-gray-500 space-x-4">
        <a href="/about" className="hover:underline">About</a>
        <a href="/privacy" className="hover:underline">Privacy</a>
        <a href="/terms" className="hover:underline">Terms</a>
      </footer>
    </main>
  );
}