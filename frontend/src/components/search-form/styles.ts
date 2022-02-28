import styled from "styled-components";

const formRadius = "10px";

export const Container = styled.form`
    width: 100%;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    align-items: stretch;
    margin-bottom: 1rem;
    position: relative;
`

export const FormSubmit = styled.button`
    display: block;
    max-width: 100%;
    margin: 0rem auto 0.5rem;
    color: var(--palette-blue);
    background-color: var(--palette-white);
    outline: none;
    padding 0.5rem 1rem;
    border-radius: ${formRadius};
    height: initial;
    &[disabled]{
        color: var(--palette-blue);
        background-color: var(--palette-grey);
        cursor: initial;
    }
    svg {
        margin-left: 1rem;
    }
`

export const FormInput = styled.input`
    flex: 1;
    border-radius: inherit;
    outline: none;
    font-size: 0.825rem;
    padding: 0 1.5rem 0 0.5rem;
    border: 0;
    border-radius: ${formRadius};
    border: 2px solid var(--palette-white);
    &:focus {
        border-color: var(--palette-white);
        box-shadow: 0px 0px 10px 2px var(--palette-white);
    }
`