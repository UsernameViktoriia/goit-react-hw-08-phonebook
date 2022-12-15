import styled from 'styled-components';

export const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  &:after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid rgb(29, 0, 249);
    border-color: rgb(29, 0, 249) transparent rgb(29, 0, 249) transparent;
    animation: loader 1.2s infinite;
  }
  @keyframes loader {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;
export const WrapperLoader = styled.div`
  margin: 30px auto;
  text-align: center;
`;