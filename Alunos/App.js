import { StatusBar } from 'expo-status-bar';
import {  ActivityIndicator } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Home from '../Alunos/src/screens/home/home.jsx';
import Cursos from './src/screens/cursos/cursos.jsx';


export default function App() {

  const [fontsLoaded] =  useFonts({Poppins_400Regular, Poppins_700Bold});

  return (fontsLoaded ?
      <>      
      <StatusBar style="light" />
      <Cursos />
      </>

      : <ActivityIndicator />
       
  );
}


