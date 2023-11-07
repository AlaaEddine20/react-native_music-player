import styled from "styled-components/native";

export const InputText = styled.TextInput`
  width: 100%;
  border-width: 0.5px;
  border-color: #f5f5f5;
  border-radius: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 7.5px 15px;
`;

export const IconWrapper = styled.View`
  position: absolute;
  right: 0;
  background-color: #e78200;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
