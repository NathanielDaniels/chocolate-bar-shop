import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding: 150px 0 100px;
`;

export const Title = styled.h1`
  text-align: center;
  color: var(--main-yellow);
  margin-bottom: 20px;
`;

export const InnerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 540px;
  max-width: 450px;
  background-color: rgba(0, 0, 0, 0.45);
  margin: 0 auto;
  margin-bottom: 100px;
  position: relative;
  padding: 25px 50px;
  border: 2px solid red;
  border-radius: 5px;
`;

export const Text = styled.p`
  ${'' /* color: #737373; */}
  color: rgba(255,255,255,.6);
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.h4`
  font-size: 13px;
  line-height: normal;
  color: rgba(255,255,255,.6);
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
  ${'' /* background: #333; */}
  background: var(--main-blue);
  border-radius: 5px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  font-size: 16px;
  letter-spacing: .8px;
  &:last-of-type {
    margin-bottom: 30px;
  }

  &::placeholder {
    color: var(--main-white);
  }
`;

export const Error = styled.div`
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
  ${'' /* margin-top: 12px; */}
  bottom: -50px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;
`;