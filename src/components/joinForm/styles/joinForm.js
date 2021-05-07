import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 100px 0 100px;
`;

export const Title = styled.h1`
  text-align: center;
  color: var(--main-yellow);
  ${'' /* margin-top: 100px; */}
`;

export const InnerForm = styled.form`
  border: 2px solid red;
  width: 500px;
  height: 400px;
  margin: 0 auto;
  background: var(--main-white); 
  padding: 25px 50px;
  border-radius: 5px;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;