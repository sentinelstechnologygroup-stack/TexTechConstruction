import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname;

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md text-center">
        <p className="text-7xl font-light text-slate-300">404</p>

        <h1 className="mt-6 text-3xl font-serif font-bold text-slate-900">
          Page Not Found
        </h1>

        <p className="mt-4 text-slate-600">
          The page <span className="font-semibold">{pageName}</span> does not exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}


