import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Timer from "./Timer";
import Button from "./Button";
import Header from "./Header";

import { Audio } from "expo-av";

const colors = ["#f7dc6f", "#a2d9ce", "#d7bde2"];

export default function Main() {
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREACK");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 0.01);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      playSoundEnd();
      setIsActive(false);

      if (currentTime === 0) {
        setTime(25 * 60);
      } else if (currentTime === 1) {
        setTime(5 * 60);
      } else if (currentTime === 2) {
        setTime(15 * 60);
      }
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  console.log(currentTime);

  const playSoundPress = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/click-sound.mp3")
    );
    await sound.playAsync();
  };
  const playSoundEnd = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/bell-sound.mp3")
    );
    await sound.playAsync();
  };

  return (
    <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <Header
        title="Pomodoro"
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        setTime={setTime}
      />
      <View
        style={[styles.container, { backgroundColor: colors[currentTime] }]}
      >
        <Timer time={time} />
        <Button
          title="STOP"
          titleChange="START"
          isActive={isActive}
          onPress={() => {
            setIsActive(!isActive);
            playSoundPress();
          }}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 20,
  },
});
