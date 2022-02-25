import styled from "styled-components";
import SimpleImage from "../simple-image";

export const Wrapper = styled.div`
    color: var(--palette-white);
    text-align: center;
`

export const Name = styled.h2`
    font-size: 2rem;
    margin: 0 0 1rem;
    text-transform: capitalize;
`

export const Sprite = styled(SimpleImage)`
    margin: 1rem auto;
    border-radius: 50%;
`

export const Description = styled.p`
    font-size: 1.25rem;
    margin: 0;
`