import { Suspense, ElementType } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// components
import { PATH } from "./paths";
// utils
import { lazyRetryHandler } from "../utils/common";
import DiscoverMovieContextProvider from "../contexts/DiscoverMovieContextProvider";
import Loading from "../components/Loading";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );

export default function Router() {
  return useRoutes([
    {
      path: PATH.BASE,
      element: (
        <DiscoverMovieContextProvider>
          <HomePage />
        </DiscoverMovieContextProvider>
      ),
    },

    // Main Routes
    { path: "500", element: "500" },
    { path: "404", element: "404" },
    { path: "403", element: "403" },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const HomePage = Loadable(lazyRetryHandler(() => import("../pages")));
