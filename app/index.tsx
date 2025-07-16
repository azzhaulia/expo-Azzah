import React, { useState } from "react";
import { View, Image, StyleSheet, Pressable, ScrollView } from "react-native";


const gambarUtama = [
  require("../assets/images/Gambar_utama/Gambar_1.jpg"),
  require("../assets/images/Gambar_utama/Gambar_2.webp"),
  require("../assets/images/Gambar_utama/Gambar_3.webp"),
  require("../assets/images/Gambar_utama/Gambar_4.webp"),
  require("../assets/images/Gambar_utama/Gambar_5.webp"),
  require("../assets/images/Gambar_utama/Gambar_6.webp"),
  require("../assets/images/Gambar_utama/Gambar_7.webp"),
  require("../assets/images/Gambar_utama/Gambar_8.webp"),
  require("../assets/images/Gambar_utama/Gambar_9.jpg"),
];


const gambarAlternatif = [
  require("../assets/images/Gambar_alternatif/Gambar_1.jpg"),
  require("../assets/images/Gambar_alternatif/Gambar_2.jpeg"),
  require("../assets/images/Gambar_alternatif/Gambar_3.jpg"),
  require("../assets/images/Gambar_alternatif/Gambar_4.jpeg"),
  require("../assets/images/Gambar_alternatif/Gambar_5.jpeg"),
  require("../assets/images/Gambar_alternatif/Gambar_6.jpg"),
  require("../assets/images/Gambar_alternatif/Gambar_7.webp"),
  require("../assets/images/Gambar_alternatif/Gambar_8.jpg"),
  require("../assets/images/Gambar_alternatif/Gambar_9.jpg"),
];

export default function Azzah() {

  const [imageStates, setImageStates] = useState(
    Array(gambarUtama.length).fill({ clicked: false, scale: 1.0 })
  );


  const handlePress = (index: number) => {
    setImageStates((prevStates) =>
      prevStates.map((state, i) => {
        if (i === index) {
          
          const newScale = Math.min(state.scale + 0.2, 2.0);
          return { clicked: true, scale: newScale };
        } else {
       
          return { clicked: false, scale: 1.0 };
        }
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {gambarUtama.map((gambar, index) => {
          const { clicked, scale } = imageStates[index];
          const currentImage = clicked ? gambarAlternatif[index] : gambar;

          return (
            <Pressable key={index} onPress={() => handlePress(index)}>
              <Image
                source={currentImage}
                style={[styles.image, { transform: [{ scale }] }]}
              />
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: 320,
    marginTop: 120,
  },
  image: {
    width: 90,
    height: 90,
    margin: 5,
    borderRadius: 10,
  },
});
