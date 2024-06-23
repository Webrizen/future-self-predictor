import { useRouteError } from "react-router-dom";

type RouteError = {
  statusText?: string;
  message?: string;
};

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-emerald-800 mb-4">Oops!</h1>
      <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg italic text-gray-500">
        {error?.statusText || error?.message}
      </p>
    </div>
  );
}