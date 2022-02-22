import React, { useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import useDebounce from "../../hooks/use-debounce";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as S from "./styles";

type PropsType = {
  onFormSubmit: () => void;
};

const SearchForm: React.FC<PropsType> = (props: PropsType) => {
  const { onFormSubmit } = props;

  const [t] = useTranslation();
  const dispatch = useAppDispatch();
  const { query, isLoading } = useAppSelector((state) => state.search);

  const debouncedTerm = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedTerm) {
      console.log(debouncedTerm);
    }
  }, [debouncedTerm]);

  const isSubmitDisabled = useMemo(() => {
    return query.length <= 2 || isLoading;
  }, [query, isLoading]);

  const onInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch({
      type: "@search/setQuery",
      payload: e.currentTarget.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <S.Wrapper role="search" onSubmit={onSubmit}>
      <S.FormInput
        tabIndex={0}
        placeholder={t("search.placeholder")}
        onKeyUp={onInputChange}
      />
      <S.FormSubmit
        type="submit"
        tabIndex={1}
        aria-disabled={isSubmitDisabled}
        disabled={isSubmitDisabled}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </S.FormSubmit>
    </S.Wrapper>
  );
};

export default SearchForm;
