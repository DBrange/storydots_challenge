import { Link } from "react-router-dom";
import { ProductsBox, ProductsContainer } from "./components";
import { PrivateRoutes } from "../../models";
import { SWRConfig } from "swr";
import { Suspense, useState } from "react";
import { localStorageProvider } from "./utilities";
import { Button } from "../../components";

function Products() {
    const [productName, setProductName] = useState<string>("");
  return (
    <ProductsContainer>
      <input className="text-center shadow-md mt-5 border w-full h-10 rounded-md" type="text" onChange={(e) => setProductName(e.target.value)} placeholder="Buscar producto" />
      <SWRConfig value={{ provider: localStorageProvider, suspense: true }}>
        <Suspense fallback={<>espera un toquesin si?</>}>
          <Link to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.PRODUCT_ADD}`}>
            <div className="my-3">

            <Button>Agregar producto</Button>
            </div>
          </Link>
          <ProductsBox productName={productName} />
        </Suspense>
      </SWRConfig>
    </ProductsContainer>
  );
}

export default Products;
