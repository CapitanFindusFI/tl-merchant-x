import React from "react";
import { useTranslation } from "react-i18next";

type PropsType = {
  label: string;
  replace?: Record<string, any>;
};

const Translation: React.FC<PropsType> = ({
  label,
  replace = {},
}: PropsType) => {
  const [t] = useTranslation();

  return t(label, { replace });
};

export default Translation;
