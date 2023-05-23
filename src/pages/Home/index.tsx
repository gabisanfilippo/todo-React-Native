import { useEffect, useState } from "react";
import { Text } from "react-native";
import { SplashScreen } from "../../components/global/SplashScreen";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return <Text>Home</Text>;
};
