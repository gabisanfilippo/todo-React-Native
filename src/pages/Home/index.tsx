import React, { useEffect, useRef, useState } from "react";
import { Animated, SafeAreaView } from "react-native";
import * as Font from "expo-font";
import { SplashScreen } from "../../components/global/SplashScreen";
import * as S from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";

const fetchFonts = () => {
  return Font.loadAsync({
    "Open Sans": require("../../../assets/fonts/OpenSans-Regular.ttf"),
    "Open Sans Bold": require("../../../assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);

  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loadResources = async () => {
      try {
        await fetchFonts();
        setFontLoaded(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      } catch (error) {
        console.warn(error);
      } finally {
        setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
          }).start();
        }, 3000);
      }
    };
    loadResources();
  }, []);

  const handlePressIn = () => {
    Animated.timing(buttonOpacity, {
      toValue: 0.8,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  if (!fontLoaded || isLoading) {
    return <SplashScreen />;
  }

  return (
    <S.Container>
      <SafeAreaView style={{ flex: 1 }}>
        <S.ContainerAnimated style={{ opacity: fadeAnim }}>
          <S.Logo
            resizeMode="contain"
            source={require("../../../assets/logo/on.time.png")}
          />
          <S.Text>Make yourself more on time</S.Text>
          <S.AnimatedViewButton style={{ opacity: buttonOpacity }}>
            <S.ButtonStart
              onPress={() => navigate("Schedule")}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
            >
              <S.TextButton>START</S.TextButton>
            </S.ButtonStart>
          </S.AnimatedViewButton>
        </S.ContainerAnimated>
      </SafeAreaView>
    </S.Container>
  );
}
