import React, { HTMLAttributes } from "react";
import * as S from "./styles";

type PropsType = React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const FullwidthContainer: React.FC<PropsType> = ({
  children,
  ...otherProps
}: PropsType) => {
  return <S.Container {...otherProps}>{children}</S.Container>;
};

export default FullwidthContainer;
