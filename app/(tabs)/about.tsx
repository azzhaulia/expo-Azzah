import { Text, View, StyleSheet, Image } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabAbout() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>

      <View style={styles.row}>
       
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Aplikasi ini dibuat untuk memenuhi tugas Laboratorium Aplikasi
            Komputasi Bergerak pada materi Layout, yang diberikan pada tanggal
            31 Juli 2025. Berikut adalah fungsi dari masing-masing halaman:
          </Text>
          <View style={styles.listRow}>
            <Ionicons name="home" size={50} color="white" style={styles.icon} />
            <Text style={styles.list}>
              Home - Menampilkan informasi mengenai Universitas Muhammadiyah Makassar,
              termasuk sejarah dan program pendidikan yang tersedia. Halaman ini
              juga dilengkapi dengan gambar pendukung yang merepresentasikan
              lingkungan kampus.
            </Text>
          </View>
          <View style={styles.listRow}>
            <EvilIcons
              name="user"
              size={50}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.list}>
              About - Berisi penjelasan mengenai tujuan pembuatan aplikasi ini. Halaman
              ini juga memberikan gambaran fungsi dari setiap halaman yang ada
              di aplikasi,
            </Text>
          </View>
          <View style={styles.listRow}>
            <AntDesign
              name="user"
              size={50}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.list}>
              Profile - Menampilkan biodata lengkap pembuat aplikasi, meliputi nama
              lengkap, NIM, kelas, jurusan, dan fakultas. Selain itu, halaman
              ini juga menampilkan foto profil yang diambil dari file lokal
              sehingga dapat memberikan identitas visual pembuat secara lebih
              personal.
            </Text>
          </View>
        </View>

        <Image
          source={require("../../assets/images/expo.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a237e",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#ffffffff",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
    paddingRight: 20,
  },
  description: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "left",
    marginBottom: 20,
  },
  listRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 15, 
  },
  list: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "left",
    flex: 1,
  },
  image: {
    width: 600,
    height: 380, 
    resizeMode: "contain",
    borderRadius: 10, 
    marginTop: -20, 
  },
});
