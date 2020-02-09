import React from "react";
import { appWithTranslation } from "../lib/i18n";

const AppWithTranslation = ({ children }) => {
  return <>{children}</>;
};

export default appWithTranslation(AppWithTranslation);
