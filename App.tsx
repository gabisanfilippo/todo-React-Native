import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function App() {
  console.log('olaaa')
  const Teste = styled.View`
    background-color: red;
    width: 100%;
    height: 100%;
  `
  return (
    <Teste >
      <Text>Hello World!!</Text>
      <StatusBar style="auto" />
    </Teste>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
