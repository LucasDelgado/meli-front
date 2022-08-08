import { Helmet } from "react-helmet";
import { Header } from "../header/Header";

type Props = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mercado Libre Argentina</title>
        <meta
          name="description"
          content="La comunidad de compra y venta online más grande de América Latina."
        />
      </Helmet>

      <Header />

      <main
        className="main"
        itemScope
        itemType="http://schema.org/LocalBusiness"
      >
        {children}
      </main>
    </>
  );
};
