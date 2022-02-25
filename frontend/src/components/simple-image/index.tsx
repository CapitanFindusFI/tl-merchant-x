import React, { useState } from "react";
import * as S from "./styles";

type PropsType = {
  imageSrc: string;
  imageAlt: string;
  fallbackText: string;
  width?: string;
  height?: string;
};

const SimpleImage: React.FC<PropsType> = ({
  imageSrc,
  imageAlt,
  fallbackText,
  width = "8rem",
  height = "8rem",
  ...otherProps
}: PropsType) => {
  const [isFallback, setIsFallback] = useState<boolean>(false);

  const onImageError = () => setIsFallback(true);

  return (
    <S.Wrapper
      {...otherProps}
      text={fallbackText}
      height={height}
      width={width}
      error={isFallback}
    >
      {!isFallback && (
        <S.Image src={imageSrc} alt={imageAlt} onError={onImageError} />
      )}
    </S.Wrapper>
  );
};

export default SimpleImage;
