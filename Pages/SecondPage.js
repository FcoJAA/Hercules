import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Footer from "../Components/Footer";

export default function App() {
  const image = {
    uri: "https://media.istockphoto.com/id/919530340/es/foto/mancuernas-en-el-piso-con-el-fondo-vac%C3%ADo-de-gimnasio.jpg?s=612x612&w=0&k=20&c=-8PFUGUoE1Vid9mBYa1JsR2aB58aMc-RPbMb9idqOlE=",
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text>Second Page Incoming!!</Text>
        <StatusBar style="auto" />
        <Footer />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
