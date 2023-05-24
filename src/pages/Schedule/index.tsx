import { SafeAreaView, Text } from "react-native";
import * as S from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { Animated } from "react-native";
import { useRef } from "react";

export default function Schedule() {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const buttonOpacity = useRef(new Animated.Value(1)).current;
  const buttonNotification = useRef(new Animated.Value(1)).current;
  const buttonMenu = useRef(new Animated.Value(1)).current;

  const handlePressIn = (buttonRef: any) => {
    Animated.timing(buttonRef, {
      toValue: 0.8,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (buttonRef: any) => {
    Animated.timing(buttonRef, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };
  return (
    <S.Container>
      <S.AnimatedViewButton style={{ opacity: buttonOpacity }}>
        <S.ButtonStart
          onPress={() => {
            console.log("clicou");
          }}
          onPressIn={() => handlePressIn(buttonOpacity)}
          onPressOut={() => handlePressOut(buttonOpacity)}
        >
          <S.AddIcon source={require("../../../assets/icons/add.png")} />
        </S.ButtonStart>
      </S.AnimatedViewButton>
      <SafeAreaView style={{ flex: 1 }}>
        <S.Header>
          <S.Logo source={require("../../../assets/logo/on.time.png")} />
          <S.OptionsContainer>
            <S.AnimatedViewButtonOptions
              style={{ opacity: buttonNotification }}
            >
              <S.ButtonOptions
                onPress={() => {
                  console.log("clicou");
                }}
                onPressIn={() => handlePressIn(buttonNotification)}
                onPressOut={() => handlePressOut(buttonNotification)}
              >
                <S.Icon
                  source={require("../../../assets/icons/notifications.png")}
                />
              </S.ButtonOptions>
            </S.AnimatedViewButtonOptions>
            <S.AnimatedViewButtonOptions style={{ opacity: buttonMenu }}>
              <S.ButtonOptions
                onPress={() => {
                  console.log("clicou");
                }}
                onPressIn={() => handlePressIn(buttonMenu)}
                onPressOut={() => handlePressOut(buttonMenu)}
              >
                <S.Icon source={require("../../../assets/icons/menu.png")} />
              </S.ButtonOptions>
            </S.AnimatedViewButtonOptions>
          </S.OptionsContainer>
        </S.Header>
      </SafeAreaView>
    </S.Container>
  );
}
