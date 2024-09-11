import { StyleSheet, Text, View, Image } from "react-native";

import { useFonts } from "expo-font"; //importa a fonte

import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const [font] = useFonts({
    Rokkitt: require("../cookies/src/fontes/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  if (!font) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../cookies/src/imagem/logo.png")}
      />

      <Text style={styles.txt}>Cookie Tradicional</Text>
      <View style={styles.row}></View>

      <Image
        style={styles.cookie}
        source={require("../cookies/src/imagem/cookie.png")}
      />

      <Text style={styles.txtcookie}>blablabla</Text>

      <Image
        style={styles.cookie1}
        source={require("../cookies/src/imagem/cookie.png")}
      />

      <Image
        style={styles.cookie2}
        source={require("../cookies/src/imagem/cookie.png")}
      />

      <Image
        style={styles.cookie3}
        source={require("../cookies/src/imagem/cookie.png")}
      />

      <Image
        style={styles.cookie4}
        source={require("../cookies/src/imagem/cookie.png")}
      />

      <Image
        style={styles.cookie5}
        source={require("../cookies/src/imagem/cookie.png")}
      />

      <View style={{ backgroundColor: "white", top: "5%", right: 100 }}>
        <AntDesign name="hearto" size={40} color="black" />

        <Text style={styles.valor}> R$ 15,00</Text>

        <View style={{ backgroundColor: "white", bottom: "50%", left: 200 }}>
          <AntDesign name="shoppingcart" size={40} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },

  logo: {
    width: "10%",
    height: "10%",
    left: "40%",
    top: "5%",
  },

  txt: {
    fontSize: 40,
    fontFamily: "Rokkitt",
    textAlign: "center",
    top: "10%",
  },

  txtcookie: {
    fontSize: 30,
    top: "-5%",
    fontFamily: "Rokkitt",
  },

  valor: {
    fontSize: 25,
    fontFamily: "Rokkitt",
    position: "absolute",
    top: "10%",
    left: 80,
  },

  row: {
    width: "70%",
    height: 2,
    backgroundColor: "brown",
    zIndex: 5,
    top: "10%",
  },

  cookie: {
    width: 800,
    height: 500,
    top: "10%",
  },

  cookie1: {
    width: 600,
    height: 600,
    position: "absolute",
    bottom: 550,
    right: 100,
  },

  cookie2: {
    width: 200,
    height: 200,
    position: "absolute",
    top: "50%",
    right: 330,
  },

  cookie3: {
    width: 250,
    height: 150,
    position: "absolute",
    top: "90%",
    right: 300,
  },

  cookie4: {
    width: 200,
    height: 150,
    position: "absolute",
    top: "70%",
    left: 330,
  },

  cookie5: {
    width: 200,
    height: 150,
    position: "absolute",
    top: "20%",
    left: 330,
  },
});
