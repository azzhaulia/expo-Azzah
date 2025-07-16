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
    Array(9).fill({ clicked: false, scale: 1.0, clickCount: 0 })
  );

 
  const handlePress = (index: number) => {
    setImageStates((prevStates) =>
      prevStates.map((state, i) => {
        if (i === index && state.clickCount < 5) {
          const updatedClick = state.clickCount + 1;
          const updatedScale = 1.0 + 0.2 * updatedClick;

          return {
            clicked: true,
            scale: updatedScale,
            clickCount: updatedClick,
          };
        }
        return state;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {gambarUtama.map((item, index) => {
          const { clicked, scale, clickCount } = imageStates[index];
          const currentImage = clicked ? gambarAlternatif[index] : item;

          return (
            <Pressable
              key={index}
              onPress={() => handlePress(index)}
              disabled={clickCount >= 5}
            >
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
    marginTop: 120,
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
    justifyContent: "center",
  },
  image: {
    width: 90,
    height: 90,
    margin: 5,
    borderRadius: 10,
  },
});
