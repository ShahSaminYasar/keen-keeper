import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-2">
      <span className="block text-8xl font-bold text-primary mb-1">404</span>
      <p className="font-medium text-neutral text-center">Page not found</p>
      <p className="text-sm block text-center mb-2">
        Your search has ventured beyond the known universe!
      </p>
      <Link to="/" className="btn btn-primary">
        <ArrowLeftIcon /> Back to Home
      </Link>
    </div>
  );
};
export default NotFound;
