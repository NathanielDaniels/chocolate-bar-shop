import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

type Props = {
  isSignInPage: boolean;
};

export const Container = styled.div<Props>`
  z-index: 2;
  padding-top: ${(props) => (props.isSigninPage ? "100px" : "0px")};
  @media (max-width: 1200px) {
    width: 98%;
    margin: 0 auto;
    right: 0;
    top: 100px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: var(--main-yellow);
  margin-bottom: 20px;
`;

export const InnerForm = styled.form`
  z-index: 2;
  ${
    "" /* box-shadow: inset 0 0 10px hsl(210, 100%, 26%),
    inset 0 0 15px hsl(210, 100%, 30%);
  background: hsl(210, 100%, 37%); */
  }
  display: flex;
  flex-direction: column;
  width: clamp(350px, 30vw, 405px);
  min-height: 540px;
  max-width: 450px;
  margin: 0 auto;
  position: relative;
  padding: 25px 50px;
  border-radius: 10px;
`;

export const Text = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.h4`
  font-size: 13px;
  line-height: normal;
  color: rgba(255, 255, 255, 0.6);
  position: absolute;
  bottom: 20px;
`;

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #335;
  box-shadow: inset 0 2px 5px #334;
  border-radius: 5px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  font-size: 16px;
  letter-spacing: 0.8px;
  &:last-of-type {
    margin-bottom: 30px;
  }

  &::placeholder {
    color: var(--main-white);
  }
`;

export const Error = styled.div`
  z-index: 9999;
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Submit = styled.button`
  background: var(--main-red);
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;

export const Demo = styled.button`
  position: relative;
  background: var(--main-red);
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  bottom: -50px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;
`;