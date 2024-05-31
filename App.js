import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import {
  AuthContextProvider,
} from "./src/context/AuthContextProvider";
import { Routes } from "./src/routes";
import { ToastProvider } from 'react-native-toast-notifications';

export default function App() {
  return (
    <ToastProvider>
      <NavigationContainer>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </NavigationContainer>
    </ToastProvider>
  );
}
