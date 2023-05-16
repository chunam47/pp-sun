/* eslint-disable @next/next/no-page-custom-font */
import Footer from "./footer";
import Header from "./header";
import styles from "@assets/styles/Root.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import { PropsWithChildren, FC } from "react";
interface ILayout extends PropsWithChildren {
  title?: string;
  description?: string;
  showFooter?: boolean;
}

const Layout: FC<ILayout> = ({
  children,
  showFooter,
  title = "PPSUN",
  description = "PPSUN",
}) => {
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoding(false);
    }, 100);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta charSet="UTF-8" />

        <meta httpEquiv="X-UA-Compatible" content="chrome=1; IE=edge" />

        {/* <!--  Essential META Tags --> */}

        <meta name="title" property="og:title" content={title} />
        <meta
          name="description"
          property="og:description"
          content={description}
        />
        <meta name="type" property="og:type" content="website" />

        <meta name="image:width" property="og:image:width" content="1200" />
        <meta name="image:height" property="og:image:height" content="628" />

        {/* <!--  Non-Essential, But Recommended --> */}
        <meta name="twitter:image:alt" content="Zkp app blockchain" />
        <meta name="twitter:site" content="Zkp app blockchain" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* <!--  Non-Essential, But Required for Analytics --> */}
        <meta name="referrer" content="origin" />
      </Head>
      <Header />
      {isLoding ? <></> : <main>{children}</main>}
      <Footer />
    </>
  );
};

export default Layout;
