import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { asPath } = router;
  const noNav = ["/login", "/register"];
  return (
    <>
      {noNav.includes(asPath) ? null : <Layout />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
