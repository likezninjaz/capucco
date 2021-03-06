import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  padding: 10px;
  margin-top: 30px;
  background: #FFFFFF;
  border-top: 1px solid #eee;
`;

export const Wrapper = styled.div`
  width: 1132px;
  margin-top: 10px;
  text-align: center;
  
  @media only screen and (max-width: 1145px) {
    width: calc(100% - 20px);
  }
`;