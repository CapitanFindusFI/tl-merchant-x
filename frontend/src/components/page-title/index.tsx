import React, { HTMLAttributes } from "react";
import * as S from "./styles";

type PropsType = React.PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>;

const PageTitle: React.FC<PropsType> = ({
  children,
  ...otherProps
}: PropsType) => {
  return <S.Heading {...otherProps}>{children}</S.Heading>;
};

export default PageTitle;
