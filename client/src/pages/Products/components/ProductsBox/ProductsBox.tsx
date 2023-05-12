import useSWR from "swr";
import {
  AllProductsByNameUrl,
  AllProductsUrl,
  getProducts,
  getProductsByName,
} from "../../services";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../../../models";


function ProductsBox({ productName }: { productName: string}) {
  const {
    data: products,
    isLoading,
    mutate,
  } = useSWR(AllProductsUrl, getProducts);

  const { data: productsByName } = useSWR(
    `${AllProductsByNameUrl}${productName.length ? productName : undefined}`,
    getProductsByName
  );

  return (
    <>
        <div className="mb-10 flex flex-col gap-5">
          {isLoading ? (
            <>Cargando</>
          ) : productsByName?.length ? (
            productsByName?.map((prod) => {
              mutate();
              return (
                <Link
                  key={prod.id}
                  to={`/${PublicRoutes.PRODUCT_DETAIL}/${prod.id}`}
                >
                  <div className="border border-pink-500 pt-2 rounded-md text-white">
                    <img src={prod.image} alt={prod.name} />
                    <div className="mt-5 bg-pink-500 rounded-b-md">
                    <h3>{`${prod?.brand?.brand} ${prod.name}`}</h3>
                    <h3 className="text-xl">${prod.price}</h3>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            products?.map((prod) => {
              mutate();
              return (
                <Link
                  key={prod.id}
                  to={`/${PublicRoutes.PRODUCT_DETAIL}/${prod.id}`}
                >
                  <div className="border border-pink-500 pt-2 rounded-md text-white">
                    <img src={prod.image} alt={prod.name} />
                    <div className="mt-5 bg-pink-500 rounded-b-md">
                      <h3>{`${prod?.brand?.brand} ${prod.name}`}</h3>
                      <h3 className="text-xl">${prod.price}</h3>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
    </>
  );
}
export default ProductsBox;
