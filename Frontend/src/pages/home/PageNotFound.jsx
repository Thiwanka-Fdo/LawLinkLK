import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <Link to="/" className="mt-4 text-blue-600 hover:underline">
        Return Home
      </Link>
    </section>
  );
}
