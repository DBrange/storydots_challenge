import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./models";
import { Nav } from "./components";
import { AuthGuard } from "./guards";
import { Suspense, lazy } from "react";
import { RoutesWithNotFound } from "./utilities";

const Login = lazy(() => import('./pages/Login/Login') )
const Products = lazy(() => import('./pages/Products/Products') )
const Detail = lazy(() => import('./pages/Detail/Detail') )
const Private = lazy(() => import('./pages/Private/Private'))

function App() {
  return (
    <Suspense fallback={<>Cargando</>}>
      <Nav />
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PublicRoutes.PRODUCTS} />} />
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route path={PublicRoutes.PRODUCTS} element={<Products />} />
        <Route
          path={`${PublicRoutes.PRODUCT_DETAIL}/:id`}
          element={<Detail />}
        />
        <Route element={<AuthGuard />}>
          <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
        </Route>
      </RoutesWithNotFound>
    </Suspense>
  );
}

export default App;
