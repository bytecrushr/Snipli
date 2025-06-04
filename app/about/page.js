import Link from "next/link";
export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-blue-600 dark:text-white mb-6">
          About Us
        </h1>
        {/* Introduction */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Welcome to our platform! We are committed to providing you with the
          most reliable and privacy-focused URL shortening service. Our mission
          is to simplify the web for everyone, one link at a time.
        </p>
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              To empower users to share, track, and manage links without
              compromising privacy.
            </p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              Why Choose Us
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              We value simplicity, speed, and security. No tracking. No
              intrusive ads.
            </p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              Our Commitment
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              We are dedicated to delivering the best user experience and
              adapting to your needs.
            </p>
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-12">
          <Link
            href="/shorten"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
