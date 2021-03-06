import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import TranslatedText from "../translation";
import * as S from "./styles";

type PropsType = {
  onFormSubmit: () => void;
};

const SearchForm: React.FC<PropsType> = (props: PropsType) => {
  const { onFormSubmit } = props;

  const [t] = useTranslation();

  const dispatch = useAppDispatch();
  const { query, isLoading } = useAppSelector((state) => state.search);

  const isSubmitDisabled = useMemo(() => {
    return query.length <= 2 || isLoading;
  }, [query, isLoading]);

  const onInputChange = (e: React.KeyboardEvent<HTMLInputElement>) =>
    dispatch({
      type: "@search/setQuery",
      payload: e.currentTarget.value,
    });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitDisabled) return;
    onFormSubmit();
  };

  return (
    <S.Container onSubmit={onSubmit}>
      <S.Wrapper role="search">
        <S.FormInput
          type="text"
          tabIndex={0}
          placeholder={t("search.placeholder")}
          onKeyUp={onInputChange}
        />
      </S.Wrapper>
      <S.FormSubmit
        type="submit"
        tabIndex={2}
        aria-disabled={isSubmitDisabled}
        disabled={isSubmitDisabled}
      >
        <TranslatedText label="search.submit" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </S.FormSubmit>
    </S.Container>
  );
};

export default SearchForm;
