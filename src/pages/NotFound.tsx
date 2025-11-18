import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Page not found →", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <div className="text-center px-6">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full shadow-inner animate-bounce">
            <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
          </div>
        </div>

        <h1 className="text-6xl font-extrabold tracking-tight mb-4 text-red-600 dark:text-red-400">
          404
        </h1>

        <p className="text-xl mb-6 text-gray-600 dark:text-gray-400">
          Oops! The page you're looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5"
        >
          ← Back to Home
        </Link>

        <p className="mt-6 text-sm opacity-70">
          <code>{location.pathname}</code> was not found on this server.
        </p>
      </div>
    </div>
  );
}
