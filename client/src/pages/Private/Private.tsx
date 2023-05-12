import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../../models';

import { lazy } from 'react';
import { RoutesWithNotFound } from '../../utilities';

const Form = lazy(() => import('./Form/Form'))
const Edit = lazy(() => import('./Edit/Edit'))

function Private() {
  return (
    <RoutesWithNotFound>
      <Route
        path="/"
        element={<Navigate replace to={`/${PublicRoutes.PRODUCTS}`} />}
      />
      <Route path={PrivateRoutes.PRODUCT_ADD} element={<Form />} />
      <Route path={`${PrivateRoutes.PRODUCT_EDIT}/:id`} element={<Edit />} />
    </RoutesWithNotFound>
  );
}
export default Private