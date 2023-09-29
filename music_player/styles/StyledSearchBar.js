import styled from "styled-components/native";

export const Container = styled.View`
  width: 200px;
  border: 0.5px solid grey;
  border-radius: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 7.5px 15px;
`;

export const IconWrapper = styled.View`
  position: relative;
  right: 0;
  background-color: #e78200;
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  justify-content: center;
  align-items: center;
`;
