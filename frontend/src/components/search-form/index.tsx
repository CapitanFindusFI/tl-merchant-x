import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/use-debounce";
import * as S from "./styles";

type PropsType = {
  onValueSet: (query: string) => void;
};

const SearchForm: React.FC<PropsType> = (props: PropsType) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debouncedTerm) {
      console.log(debouncedTerm);
    }
  }, [debouncedTerm]);

  const onInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.currentTarget.value);
  };

  return (
    <S.Wrapper>
      <S.QueryInput onKeyUp={onInputChange} />
    </S.Wrapper>
  );
};

export default SearchForm;
