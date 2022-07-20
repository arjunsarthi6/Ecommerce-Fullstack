import { ProductStyle } from "../styles/ProductStyle";
import Link from 'next/link';

export default function Product({ product }) {
  //extract info from the props
  const { title, price, image, slug } = product.attributes;
  return (
    <ProductStyle>
        <Link href={`product/${slug}`}>
        <img
          src={image.data.attributes.formats.medium.url}
          alt={title}
        />
        </Link>
        
      <h2>{title}</h2>
      <h3>{price}</h3>
    </ProductStyle>
  );
}
