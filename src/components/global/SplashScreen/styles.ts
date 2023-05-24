import styled from "styled-components/native";
import { Animated } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #2b125a;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Animated.Image)`
  width: 200px;
  height: 40px;
`;
