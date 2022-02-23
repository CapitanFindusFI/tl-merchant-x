import React from "react";
import Translation from "../translation";
import * as S from "./styles";

type PropsType = {
  label: string;
  replace?: Record<string, any>;
};

const ErrorMessage: React.FC<PropsType> = ({
  label,
  replace,
  ...otherProps
}: PropsType) => {
  return (
    <S.Message {...otherProps}>
      <Translation label={label} replace={replace} />
    </S.Message>
  );
};

export default ErrorMessage;
