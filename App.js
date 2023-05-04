import { useState , useCallback } from "react";
import { StyleSheet, View, } from "react-native";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';



import Header from './components/Header'
import StartGameScreen from "./Screen/StartGameScreen";
import GameScreen from "./Screen/GameScreen";
import GameOverScreen from "./Screen/GameOverScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber,setUserNumber]=useState()
  const [guessRounds,setGuessRounds]=useState(0)
  // const [dataLoaded ,setDataLoaded]=useState(false)

  const [fontsLoaded] = useFonts({
    'opensans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'opensans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
});

const onLayoutRootView = useCallback(async () => {
  if (fontsLoaded) {
    await SplashScreen.hideAsync();
  }
}, [fontsLoaded]);

  if(!fontsLoaded){//写在这里就想先加载在对页面进行渲染
    return null
  }

  const configureNewGameHandler=()=>{
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler=(selectedNumber)=>{
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }
  const gameOverHandler=round=>{
    setGuessRounds(round)
  }

  let content=<StartGameScreen onStartGame={startGameHandler} />

  if(userNumber && guessRounds<=0){
    content=  <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  }else if(guessRounds>0){
    content=<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>
  }
  
  return (
    <View style={styles.screen} onLayout={onLayoutRootView}>
      <Header title="Guess a Number"></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
