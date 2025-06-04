export default function Contact() {
  return (
    <div className="mt-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Got a question or feedback? We would love to hear from you. Fill out
          the form below, and we’ll get back to you as soon as possible!
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-900 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-900 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-900 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
