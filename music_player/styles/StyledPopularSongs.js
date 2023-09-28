import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 20px;
`;

export const SectionHeading = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const BoxesContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;
export const Box = styled.View`
  width: 48%;
  height: 100px;
  background: #e78200;
  border-radius: 10px;
  margin-top: 15px;
`;
