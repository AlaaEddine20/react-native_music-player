import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;

export const Greeting = styled.View`
  flex: 3;
  justify-content: center;
`;

export const ProfilePic = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
