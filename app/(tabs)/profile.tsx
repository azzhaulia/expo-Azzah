import { Text, View, Image, StyleSheet } from "react-native";

export default function TabProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}></View>

      <Image
        source={require("../../assets/images/profile.jpg")}
        style={styles.profileImage}
      />

      <Text style={styles.name}>Azzah Aulia Syarif</Text>
      <Text style={styles.role}>Mahasiswa Informatika</Text>

      <Text style={styles.description}>
        NIM : 105841105022 {"\n"}
        KELAS : 6B {"\n"}
        FAKULTAS : TEKNIK {"\n"}
        JURUSAN : INFORMATIKA {"\n"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  headerBackground: {
    width: "100%",
    height: 150,
    backgroundColor: "#1a237e",
    position: "absolute",
    top: 0,
  },
  profileImage: {
    width: 250,
    height: 250,
    borderRadius: 300,
    marginTop: 100,
    borderWidth: 3,
    borderColor: "#fff",
  },
  name: {
    fontSize: 29,
    fontWeight: "bold",
    color: "#1a237e",
    marginTop: 10,
  },
  role: {
    fontSize: 20,
    color: "#666",
    marginTop: 5,
  },
  description: {
    fontSize: 19,
    color: "#333",
    textAlign: "center",
    marginTop: 30,
    paddingHorizontal: 20,
  },
});
