import styled from "styled-components/native";

export const Container = styled.View`
  width: 50%;
  height: 100%;
  border: 0.5px solid grey;
  border-radius: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const IconWrapper = styled.View`
  display: block;
  position: relative;
  right: 20px;
  background-color: #e78200;
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  justify-content: center;
  align-items: center;
`;
