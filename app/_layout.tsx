import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Oswald-VariableFont": require("../assets/fonts/Oswald-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded && error === null) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }5

  return <Stack />;
}
