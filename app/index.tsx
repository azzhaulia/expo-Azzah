import React, { useState } from "react";
import { Image, ScrollView, Text, View, StyleSheet, Pressable} from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            width: 0,
            height: 0,
            borderLeftWidth: 200,
            borderRightWidth: 200,
            borderBottomWidth: 200,
            borderStyle: "solid",
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: "red",
            marginBottom: 10,
            marginTop: 10,
          }}
        ></View>

        <View
          style={{
            width: 400,
            height: 50,
            backgroundColor: "yellow",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 15,
              lineHeight: 50,
            }}
          >
            Azzah Aulia Syarif
          </Text>
        </View>

        <View
          style={{
            width: 400,
            height: 40,
            backgroundColor: "green",
            borderRadius: 20,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              lineHeight: 40,
              fontSize: 15,
            }}
          >
            105841105022
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={{
              uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105022_.jpg?1751871436",
            }}
            style={{ width: 200, height: 200, marginTop: 20 }}
          />

          <Image
            source={{
              uri: "https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif",
            }}
            style={{ width: 200, height: 200, marginTop: 20 }}
          />
        </View>

        <AzzahGrid />
      </ScrollView>
    </View>
  );
}

function AzzahGrid() {
  const gambarUtama = [
    "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/06/pSpnkIiaRmsaQDu3ipmiA_thumb_469.webp",
    "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/06/VAvnaeUqSTGG4woQa3tmgQ_thumb_46a.webp",
    "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/06/hpt3FfxwTdee11isxV0Ylg_thumb_46b.webp",
    "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/06/tlNysh7vTku-wgLB8rXr3g_thumb_46c.webp",
    "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/06/GcLU4eyLTZiSrgJfCgAkEg_thumb_46d.webp",
    "https://www.ancol.com/blog/wp-content/uploads/2022/11/tempat-wisata-hits-di-indonesia.jpg",
    "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/06/jttO0PTeS5WYFOJ2MwDyZA_thumb_46f.webp",
    "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/06/mpGDXVHoSzKsqkWsopmjWg_thumb_470.webp",
    "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Ftempat-wisata-di-indonesia.jpg&w=1024&q=75",
  ];

  const gambarAlternatif = [
    "https://awsimages.detik.net.id/community/media/visual/2021/11/26/coto-makassar-1_169.jpeg?w=620",
    "https://awsimages.detik.net.id/community/media/visual/2020/08/27/sop-konro-makassar_169.jpeg?w=620",
    "https://awsimages.detik.net.id/community/media/visual/2016/05/01/774e2f30-1ee4-4984-b216-28fbd9249c3f_169.jpg?w=620",
    "https://awsimages.detik.net.id/community/media/visual/2022/05/15/pallu-cela-makanan-khas-makassar_169.jpeg?w=620",
    "https://awsimages.detik.net.id/community/media/visual/2022/03/20/kuliner-makassar_169.jpeg?w=620",
    "https://awsimages.detik.net.id/community/media/visual/2022/04/02/kue-jalangkote-khas-sulsel_169.jpeg?w=620",
    "https://awsimages.detik.net.id/community/media/visual/2021/08/16/gogos-kambu_169.jpeg?w=620",
    "https://awsimages.detik.net.id/community/media/visual/2016/06/12/2c6f4666-d5b8-422c-a661-9fe04ab20a1c_169.jpg?w=620",
    "https://awsimages.detik.net.id/community/media/visual/2021/05/25/resep-pisang-epe-khas-makassar-1_169.jpeg?w=620",
  ];

  const [imageStates, setImageStates] = useState(
    Array(9).fill({ clicked: false, scale: 1, clickCount: 0 })
  );

  const handlePress = (index: number) => {
    setImageStates((prev) =>
      prev.map((state, i) => {
        if (i === index) {
          if (state.clickCount < 2) {
            return {
              clicked: true,
              scale: state.scale + 0.2,
              clickCount: state.clickCount + 1,
            };
          } else {
            return state;
          }
        } else {
          return { clicked: false, scale: 1, clickCount: 0 };
        }
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {gambarUtama.map((main, index) => {
          const state = imageStates[index];
          const imageSource = state.clicked ? gambarAlternatif[index] : main;
          const scale = state.scale;

          return (
            <Pressable key={index} onPress={() => handlePress(index)}>
              <Image
                source={{ uri: imageSource }}
                style={[
                  styles.image,
                  {
                    transform: [{ scale }],
                    zIndex: scale > 1 ? 1 : 0,
                  },
                ]}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 420,
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
    margin: 10,
    borderRadius: 8,
  },
});
