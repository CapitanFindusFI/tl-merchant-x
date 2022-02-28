import { mediaDevices } from './../../constants/device-screens';
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
    svg {
        display: none;
    }
    @media ${mediaDevices.tablet} {
        svg {
            display: block;
        }
    }
`

export const MobileSubmit = styled.button`
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
    @media ${mediaDevices.tablet} {
        display: none;
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