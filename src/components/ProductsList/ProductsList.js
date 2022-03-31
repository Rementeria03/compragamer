import ProductItem from "../ProductItem/ProductItem";

function ProductsList({ productos }) {
  return (
    <>
      {productos.map((prod) => {
        return <ProductItem key={prod.id} {...prod}></ProductItem>;
      })}
    </>
  );
}

export default ProductsList;
