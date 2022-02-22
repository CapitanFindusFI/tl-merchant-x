import styled from "styled-components";

const formRadius = "10px";

export const Wrapper = styled.form`
    width: 100%;
    max-width: 360px;
    margin: 2rem auto;
    height: 2.5rem;
    display: flex;
    align-items: stretch;
    border-radius: ${formRadius};
    border: 1px solid #ccc;
`

export const FormSubmit = styled.button`
    border-radius: ${formRadius};
    border: 0;
    padding: 0 2rem;
    cursor: pointer;
    &[disabled]{
        cursor: initial;
    }
`

export const FormInput = styled.input`
    flex: 1;
    border-top-left-radius: ${formRadius};
    border-bottom-left-radius: ${formRadius};
    outline: none;
    font-size: 0.825rem;
    padding: 0 0.5rem;
    border: 0;
    &:focus {
        border-color: #80bdff;
        box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    }
`