import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import { DetailStyled, ProductInfo, Quantity, Buy } from "../../styles/ProductDetails";

export default function ProductDetails() {
  //Fetch Graphql data
  const { query } = useRouter();
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;
  if (fetching) return <p>Loading .....</p>;
  if (error) return <p>Oh no...{error.message}</p>;
  const { title, Description, image } = data.products.data[0].attributes;
  return (
    <DetailStyled>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{Description}</p>

        <Quantity>
          <span>Quantity</span>
          <button>Plus</button>
          <p>0</p>
          <button>Minus</button>
        </Quantity>
        <Buy>Add to card</Buy>
      </ProductInfo>
    </DetailStyled>
  );
}
