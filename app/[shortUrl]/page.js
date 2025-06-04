'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAndRedirect = async () => {
      try {
        const shortUrl = params.shortUrl;
        const response = await fetch(`/api/short-url/${shortUrl}`);
        
        if (!response.ok) {
          throw new Error('URL not found');
        }

        const data = await response.json();
        
        if (!data.url || typeof data.url !== 'string') {
          throw new Error('Invalid URL');
        }

        const validatedUrl = data.url.startsWith('http') 
          ? data.url 
          : `https://${data.url}`;

        window.location.href = validatedUrl;

      } catch (err) {
        console.error('Redirect error:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchAndRedirect();
  }, [params.shortUrl, router]);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full mx-auto text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-500 dark:text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {error === 'URL not found' ? 'Link Not Found' : 'Error'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {error === 'URL not found' 
                ? 'The shortened URL you\'re looking for doesn\'t exist.'
                : 'Something went wrong while redirecting you.'}
            </p>
          </div>
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full mx-auto text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Loader2 className="w-8 h-8 text-blue-500 dark:text-blue-400 animate-spin" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Redirecting
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Please wait while we redirect you to your destination...
          </p>
        </div>
      </div>
    </div>
  );
}
