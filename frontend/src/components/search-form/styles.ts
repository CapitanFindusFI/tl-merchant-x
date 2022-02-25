import styled from "styled-components";

const formRadius = "10px";

export const Wrapper = styled.form`
    width: 100%;
    height: 2.5rem;
    display: flex;
    align-items: stretch;
    margin-bottom: 2rem;
    position: relative;
`

export const FormSubmit = styled.button`
    border: 0;
    cursor: pointer;
    color: var(--palette-blue);
    background-color: transparent;
    position: absolute;
    height: 100%;
    right: 0.5rem;
    top: 0;
    opacity: 1;
    padding: 0;
    transition: opacity 300ms ease-in-out;
    &[disabled]{
        color: var(--palette-white);
        cursor: initial;
        opacity: 0;
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