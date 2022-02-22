import { mediaDevices } from './../../constants/device-screens';
import styled from "styled-components";

export const Heading = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    @media ${mediaDevices.mobileS} {
        font-size: 2rem;
    }
    @media ${mediaDevices.tablet} {
        font-size: 2.25rem;
    }
    @media ${mediaDevices.desktop} {
        font-size: 3rem;
    }
`