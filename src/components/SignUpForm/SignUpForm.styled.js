import styled from 'styled-components';

export const FormStyle = styled.form`
  width: 480px;
  height: 440px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 25px 10px;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  background: white;
  box-shadow: grey 0px 0px 7px 0px;
  border-radius: 4px;
`;
export const LabelWrapper = styled.div`
  margin: 0 auto;
  font-size: 30px;
  font-weight: 500;
`;

export const LabelSpanStyle = styled.span`
  display: block;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const InputStyle = styled.input`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 10px 12px;
  width: 390px;
  height: 28px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
`;
