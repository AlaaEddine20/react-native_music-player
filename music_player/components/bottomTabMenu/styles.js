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

export const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBox = styled.View`
  width: 250px;
  height: 160px;
  background-color: #f5f5f5;
  border-radius: 8px;
  gap: 35px;
  padding: 30px 20px;
`;
