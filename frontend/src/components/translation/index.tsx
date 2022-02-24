import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

type PropsType = {
  label: string;
  replace?: Record<string, any>;
};

const Translation: React.FC<PropsType> = ({
  label,
  replace = {},
}: PropsType) => {
  const [t] = useTranslation();

  if (!i18n.exists(label)) {
    const missing = `missing translation for ${label}`;
    return <>{missing}</>;
  }

  return t(label, {
    replace,
  });
};

export default Translation;
