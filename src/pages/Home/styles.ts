import styled from "styled-components/native";
import { Animated } from "react-native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #2b125a;
`;

export const ContainerAnimated = styled(Animated.View)`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 150px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Animated.Image)`
  width: 280px;
  height: 56px;
`;

export const Text = styled.Text`
  font-family: "Open Sans";
  font-size: 36px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #ffffff;
  max-width: 300px;
`;

export const ButtonStart = styled.Pressable`
  background: #ffffff;
  border-radius: 12px;
  width: 298px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnimatedViewButton = styled(Animated.View)`
  /* flex: 1; */
`;

export const TextButton = styled.Text`
  font-family: "Open Sans Bold";
  font-size: 24px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #0a0416;
`;
