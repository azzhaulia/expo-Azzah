import React, { useState } from "react";
import { ScrollView, View, Image, StyleSheet, Pressable } from "react-native";

const sumberAsli = [
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

const versiAlternatif = [
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

export default function GaleriInteraktif() {
  const jumlahGambar = 9;
  const inisialisasi = Array(jumlahGambar).fill({
    sudahKlik: false,
    ukuran: 1,
    totalKlik: 0,
  });

  const [statusGambar, setStatusGambar] = useState(inisialisasi);

  const ubahStatusGambar = (posisi: number) => {
    setStatusGambar((dataLama) =>
      dataLama.map((data, idx) => {
        if (idx === posisi) {
          if (data.totalKlik < 2) {
            return {
              sudahKlik: true,
              ukuran: 1 + 0.2 * (data.totalKlik + 1),
              totalKlik: data.totalKlik + 1,
            };
          }
          return data;
        } else {
          return { sudahKlik: false, ukuran: 1, totalKlik: 0 };
        }
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={gaya.bungkus}>
      <View style={gaya.lapak}>
        {sumberAsli.map((foto, idx) => {
          const kondisi = statusGambar[idx];
          const yangDitampilkan = kondisi.sudahKlik
            ? versiAlternatif[idx]
            : foto;

          return (
            <Pressable
              key={idx}
              onPress={() => ubahStatusGambar(idx)}
              disabled={kondisi.totalKlik >= 2}
            >
              <Image
                source={yangDitampilkan}
                style={[
                  gaya.foto,
                  {
                    transform: [{ scale: kondisi.ukuran }],
                  },
                ]}
              />
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const gaya = StyleSheet.create({
  bungkus: {
    alignItems: "center",
    paddingVertical: 25,
  },
  lapak: {
    marginTop: 100,
    width: 320,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  foto: {
    width: 90,
    height: 90,
    margin: 6,
    borderRadius: 10,
  },
});
