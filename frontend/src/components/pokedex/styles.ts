import styled from "styled-components";
import { mediaDevices } from "../../constants/device-screens";
import ErrorMessage from "../error-message";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: min(360px, 100vw);
    margin: 0 auto;
`

export const PokedexError = styled(ErrorMessage)`
    text-align: center;
    font-size: 1rem;
    @media ${mediaDevices.mobileL}{
        font-size: 1.25rem;
    }
    @media ${mediaDevices.tablet}{
        font-size: 1.5rem;
    }
`