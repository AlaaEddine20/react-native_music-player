import styled from "styled-components/native";

export const BarContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  border-bottom-width: 0;
  background-color: rgba(0, 0, 0, 0.6);
  padding-bottom: 15px;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
