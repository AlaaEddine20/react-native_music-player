import styled from "styled-components/native";
import { SECONDARY_DARK_PURPLE } from "../../variables/colors";

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
  height: 50%;
`;
export const BoxImage = styled.View`
  width: 100%;
  height: 130px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px;
  overflow: hidden;
`;

export const BoxExternal = styled.View`
  flex-direction: column;
  width: 175px;
  margin-top: 15px;
`;
