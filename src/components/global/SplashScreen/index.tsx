import { Animated } from "react-native";
import * as S from "./styles";
import { useEffect, useRef } from "react";

export const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <S.Container>
      <S.Logo
        resizeMode="contain"
        style={{ opacity: fadeAnim }}
        source={require("../../../../assets/logo/on.time.png")}
      />
    </S.Container>
  );
};
