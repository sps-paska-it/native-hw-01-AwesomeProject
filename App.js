// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import RegisterForm from './src/screens/RegistrationScreen';

export default function App() {
  return (
    <RegisterForm/>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
