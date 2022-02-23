import styled from "styled-components";

const formRadius = "10px";

export const Wrapper = styled.form`
    width: 100%;
    margin: 2rem auto;
    height: 2.5rem;
    display: flex;
    align-items: stretch;
    border-radius: ${formRadius};
    border: 1px solid #ccc;
`

export const FormSubmit = styled.button`
    border-top-right-radius: ${formRadius};
    border-bottom-right-radius: ${formRadius};
    border: 0;
    padding: 0 2rem;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    background-color: rgba(3, 0, 39, 1);
    color: #fff;
    &[disabled]{
        background-color: rgba(3, 0, 39, .4);
        color: #030027;
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
        border-color: rgb(3, 0, 39);
        box-shadow: 0 0 0 0.2rem rgba(3, 0, 39, 20%);
    }
`