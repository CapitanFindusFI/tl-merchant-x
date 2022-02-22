import styled from "styled-components";
import { mediaDevices } from "../../constants/device-screens";

export const Container = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 1rem;

    @media ${mediaDevices.tablet} {
        max-width: 768px;
    }

    @media ${mediaDevices.desktop} {
        max-width: 1024px;
    }
`