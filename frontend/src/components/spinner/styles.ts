import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Wrapper = styled.div`
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50% ;
    position: relative;
    overflow: hidden;
    border: 3px solid;
    animation: ${animation} .8s  linear 0s infinite;
    &:after, &:before {
        content: '';
        position: absolute;
    }
    &:after {
        content: '';
        position: absolute;
        width: 60px;
        height: 30px;
        background-color: red;
        border-bottom: 4px solid;
        top: -4px;
    }
    &:before {
        background-color: #fff;
        width: 10px;
        height: 10px;
        border: 4px solid;
        border-radius: 50%;
        bottom: 18px;
        right: 18px;
        z-index: 1;
    }
`