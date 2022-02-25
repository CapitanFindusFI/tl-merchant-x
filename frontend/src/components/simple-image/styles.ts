import styled from "styled-components";

type WrapperProps = {
    width: string;
    height: string;
    text: string;
    error: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    position: relative;
    &:after {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        border-radius: inherit;
        color: var(--palette-blue);
        background-color: var(--palette-white);
        content: ${props => props.error ? `'${props.text}'` : 'none'};
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`