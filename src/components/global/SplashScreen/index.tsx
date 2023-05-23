import { Animated, Image, Text, View } from "react-native";
import * as S from "./styles";
import { LinearGradient } from "expo-linear-gradient";
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
      <LinearGradient
        colors={['#2A2A2E', '#2B125A', '#000000']}
        start={[0, 0]}
        end={[1, 1]}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems:'center',
          width: '100%',
        }}
      >
          <S.Logo resizeMode="contain" style={{ opacity: fadeAnim }} source={require('../../../../assets/logo/on.time.png')} />
      </LinearGradient>
    </S.Container>
  );
};
