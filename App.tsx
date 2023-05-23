import { StatusBar } from "expo-status-bar";
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <>
      <StatusBar animated={true} style="light" />
      <Home />
    </>
  );
}
