import App from "next/app";
import React from "react";
import { appWithTranslation } from "../lib/i18n";

const IsNext = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

IsNext.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default appWithTranslation(IsNext);
