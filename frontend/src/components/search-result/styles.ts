import styled from "styled-components";

export const Wrapper = styled.div`
`

export const Name = styled.h2`
    font-size: 2rem;
    margin: 0 0 1rem;
    text-transform: capitalize;
`

export const Sprite = styled.img`    
`

export const SpriteContainer = styled.div`
    background-color: #f4f4f4;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    ${Sprite}{
        height: 100%;
        width: 100%;
    }
`

export const Description = styled.p`
    font-size: 1.25rem;
    margin: 0;
`