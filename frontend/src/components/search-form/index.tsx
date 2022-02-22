import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useDebounce from "../../hooks/use-debounce";
import * as S from "./styles";

type PropsType = {
  onValueSet: (query: string) => void;
};

const SearchForm: React.FC<PropsType> = (props: PropsType) => {
  const [t] = useTranslation();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedTerm) {
      console.log(debouncedTerm);
    }
  }, [debouncedTerm]);

  const onInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.currentTarget.value);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <S.Wrapper role="search">
      <S.FormInput
        tabIndex={0}
        placeholder={t("search.placeholder")}
        onKeyUp={onInputChange}
      />
      <S.FormSubmit
        type="button"
        tabIndex={1}
        aria-disabled={!debouncedTerm.length}
        disabled={!debouncedTerm.length}
        onClick={onSubmit}
      >
        X
      </S.FormSubmit>
    </S.Wrapper>
  );
};

export default SearchForm;
