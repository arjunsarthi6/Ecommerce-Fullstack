import { ProductStyle } from "../styles/ProductStyle";
export default function Product({ product }) {
  //extract info from the props
  const { title, price, image } = product.attributes;
  return (
    <ProductStyle>
      <div>
        <img
          src={image.data.attributes.formats.small.url}
          alt={image.data.attributes.title}
        />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </ProductStyle>
  );
}
