"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [customShortUrl, setCustomShortUrl] = useState("");
  const [error, setError] = useState("");
  const [allUrls, setAllUrls] = useState([]); // State to store all short URLs

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortUrl("");

    const response = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, customShortUrl }),
    });

    const data = await response.json();

    if (response.ok) {
      setShortUrl(`${process.env.NEXT_PUBLIC_HOST}/${data.shortUrl}`);
      fetchAllUrls(); // Refresh the list of all URLs after creating a new one
    } else {
      setError(data.message || "An error occurred");
    }
  };

  const fetchAllUrls = async () => {
    const response = await fetch("/api/getAllUrls");
    const data = await response.json();
    if (response.ok) {
      setAllUrls(data);
    } else {
      setError("Failed to fetch all URLs");
    }
  };

  useEffect(() => {
    fetchAllUrls(); // Fetch all URLs when the component mounts
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="container mx-auto p-8 max-w-3xl mt-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
          URL Shortener
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-6 space-y-4"
        >
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter the URL to shorten"
            className="p-3 w-full border border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none bg-gray-700 text-gray-100 placeholder-gray-400"
            required
          />
          <input
            type="text"
            value={customShortUrl}
            onChange={(e) => setCustomShortUrl(e.target.value)}
            placeholder="Enter custom short URL (optional)"
            className="p-3 w-full border border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none bg-gray-700 text-gray-100 placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 font-semibold"
          >
            Generate Short URL
          </button>
        </form>
        {shortUrl && (
          <div className="mt-6 text-center bg-green-900 text-green-300 rounded-lg shadow p-4">
            <p className="font-semibold text-lg mb-2">Short URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline break-all"
            >
              {shortUrl}
            </a>
          </div>
        )}
        {error && (
          <p className="text-red-400 text-center mt-4">{error}</p>
        )}

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-300">
            All Shortened URLs
          </h2>
          {allUrls.length > 0 ? (
            <ul className="space-y-3">
              {allUrls.map((url) => (
                <li
                  key={url._id}
                  className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <a
                    href={`${process.env.NEXT_PUBLIC_HOST}/${url.shortUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline break-all"
                  >
                    {process.env.NEXT_PUBLIC_HOST}/{url.shortUrl}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-400">
              No shortened URLs found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
