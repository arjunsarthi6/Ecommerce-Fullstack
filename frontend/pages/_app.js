import "../styles/globals.css";
import { Provider, createClient } from "urql";
import Nav from "../components/Nav";

const backEndApi = process.env.NEXT_PUBLIC_BACKEND_API;
const client = createClient({url: backEndApi});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
