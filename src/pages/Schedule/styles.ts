import { Animated } from "react-native";
import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(27, 17, 49, 1);
  position: relative;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 24px 32px;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 16px;
`;

export const OptionsContainer = styled.View`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const ButtonStart = styled.Pressable`
  background: #ffffff;
  border-radius: 50px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7e64ff;
`;

export const AnimatedViewButton = styled(Animated.View)`
  position: absolute;
  bottom: 32px;
  right: 32px;
  z-index: 100;
`;

export const AddIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

export const ButtonOptions = styled.Pressable`
  border-radius: 50px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnimatedViewButtonOptions = styled(Animated.View)``;
