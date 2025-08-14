import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Entypo name="phone" size={18} color="yellow" />
          <Text style={styles.headerText}>0411-860837/860132</Text>
          <Entypo
            name="mail"
            size={18}
            color="yellow"
            style={{ marginLeft: 10 }}
          />
          <Text style={styles.headerText}>info@unismuh.ac.id</Text>
          <Entypo
            name="location-pin"
            size={18}
            color="yellow"
            style={{ marginLeft: 10 }}
          />
          <Text style={styles.headerText}>
            JL. SULTAN ALAUDDIN NO. 259, Kec. Rappocini, Gunung Sari, Kota
            Makassar, 90221
          </Text>
        </View>
        <View style={styles.headerRight}>
          <FontAwesome
            name="facebook"
            size={18}
            color="white"
            style={styles.icon}
          />
          <FontAwesome
            name="twitter"
            size={18}
            color="white"
            style={styles.icon}
          />
          <FontAwesome
            name="youtube"
            size={18}
            color="white"
            style={styles.icon}
          />
          <FontAwesome
            name="instagram"
            size={18}
            color="white"
            style={styles.icon}
          />
        </View>
      </View>
      <Image
        source={require("../../assets/images/Unismuh.jpg")}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.title}>UNIVERSITAS MUHAMMADIYAH MAKASSAR</Text>

      <Text style={styles.boldTitle}>
        SEJARAH UNIVERSITAS MUHAMMADIYAH MAKASSAR
      </Text>

      <Text style={styles.desc}>
        Universitas Muhammadiyah Makassar didirikan pada tanggal 19 Juni 1963
        sebagai cabang dari Universitas Muhammadiyah Jakarta. Pendirian
        Perguruan Tinggi ini adalah realisasi dari hasil Musyawarah Wilayah
        Muhammadiyah Sulawesi Selatan dan Tenggara ke-21 di Kabupaten Bantaeng.
        {"\n\n"}
        Pendirian tersebut didukung oleh Persyarikatan Muhammadiyah sebagai
        organisasi yang bergerak dibidang pendidikan dan pengajaran dakwah amar
        ma&rsquo;ruf nahi munkar, lewat surat nomor : E-6/098/1963 tertanggal 22
        Jumadil Akhir 1394 H/12 Juli 1963 M. Kemudian akte pendiriannya dibuat
        oleh notaries R. Sinojo Wongsowidjojo berdasarkan akta notaries Nomor :
        71 tanggal 19 Juni 1963. Universitas Muhammadiyah Makassar dinyatakan
        sebagai Perguruan Tinggi Swasta terdaftar sejak 1 Oktober 1965.
        {"\n\n"}
        Universitas Muhammadiyah Makassar (Unismuh Makassar) sebagai Perguruan
        Tinggi Muhammadiyah (PTM) mengemban tugas dan peran yang sangat besar
        bagi agama, bangsa dan negara, baik di masa sekarang maupun di masa
        depan. Selain posisinya sebagai salah satu PTM/PTS di Kawasan Timur
        Indonesia yang tergolong besar, juga padanya tertanam kultur pendidikan
        yang diwariskan sebagai amal usaha Muhammadiyah. Nama Muhammadiyah yang
        terintegrasi dengan nama makassar memberikan harapan terpadunya budaya,
        keilmuan dan nafas keagamaan.
        {"\n\n"}
        Pada awal berdirinya, Universitas Muhammadiyah Makassar membina dua
        fakultas yakni fakultas keguruan dan seni jurusan bahasa Indonesia, dan
        fakultas keguruan dan ilmu pendidikan jurusan pendidikan umum (PU), dan
        pendidikan sosial (PS) yang dipimpin oleh rektor Dr. H. Sudan. Pada
        tahun yang sama (1963) Universitas Muhammadiyah Makassar telah berdiri
        sendiri dan dipimpin oleh rektor Drs. H. Abdul Watif Masri.
        {"\n\n"}
        Perkembangan berikutnya Universitas Muhammadiyah Makassar pada tahun
        1965 membuka fakultas baru yaitu: fakultas ilmu agama dan dakwah (FIAD),
        fakultas ekonomi (Fekon), fakultas sosial politik, fakultas
        kesejahteraan sosial, dan akademi pertanian. Selanjutnya tahun 1987
        membuka fakultas teknik, tahun 1994 fakultas pertanian, tahun 2002
        membuka program pascasarjana, dan tahun 2008 membuka fakultas
        kedokteran, dan sampai saat ini, Universitas Muhammadiyah Makassar telah
        memiliki 7 Fakultas 34 Program Studi dan Program Pascasarjana yang telah
        terkareditasi BAN-PT.
        {"\n\n"}
        Universitas Muhammadiyah Makassar pada Tahun 2003 mengalami tahapan
        transisi sejarah perkembangan, berupa perubahan formasi kepemimpinan
        dengan bergabungnya generasi muda dan generasi tua. Pimpinan dan seluruh
        civitas akademika Universitas Muhammadiyah Makassar bertekad untuk
        memelihara hasil capaian para pendahulu dan mengembangkannya kepada
        capaian yang lebih baik, serta berkomitmen: (1) memelihara kepercayaan
        masyarakat, (2) mencapai keunggulan dalam kompetisi yang semakin ketat,
        dan (3) mewujudkan kemandirian dalam pengelolaan dan pengembangan diri.
        Dari ke tiga komitmen tersebut diharapkan dapat mengantar Universitas
        Muhammadiyah Makassar untuk menjadi Perguruan Tinggi Islam Terkemuka.
      </Text>

      <Text style={styles.programTitle}>Program Pendidikan</Text>
      <Text style={styles.programDesc}>
        Ada banyak pilihan program studi dan jenjang pendidikan yang dapat Anda
        pilih di Universitas Muhammadiyah Makassar.
      </Text>
      <View style={styles.programContainer}>
        {[
          { title: "Diploma", count: 3 },
          { title: "Doctoral", count: 2 },
          { title: "Magister", count: 8 },
          { title: "Profesi", count: 2 },
          { title: "Sarjana", count: 36 },
        ].map((program, index) => (
          <View key={index} style={styles.programCard}>
            <Image
              source={require("../../assets/images/logo.jpg")}
              style={styles.programImage}
            />
            <Text style={styles.programTitleCard}>{program.title}</Text>
            <Text style={styles.programDescCard}>
              Universitas Muhammadiyah Makassar mempunyai banyak program studi
              yang bisa dipilih untuk calon mahasiswa. Program Pendidikan{" "}
              {program.title} dapat ditemukan di sini:
            </Text>
            <Text style={styles.programCount}>{program.count}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  icon: {
    marginHorizontal: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0000FF",
    padding: 10,
    width: "100%",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    flex: 1,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 12,
    marginLeft: 5,
  },
  image: {
    width: "100%",
    height: 700,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1a237e",
    marginTop: 20,
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    color: "#1a237e",
    paddingHorizontal: 18,
    marginTop: 28,
  },
  desc: {
    fontSize: 16,
    textAlign: "justify",
    marginTop: 20,
    paddingHorizontal: 20,
    color: "#333",
  },
  programTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1a237e",
    marginTop: 30,
  },
  programDesc: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: "#333",
  },
  programContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  programCard: {
    width: 200,
    borderWidth: 2,
    borderColor: "#1a237e",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  programImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  programTitleCard: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a237e",
    marginBottom: 10,
  },
  programDescCard: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
    marginBottom: 10,
  },
  programCount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a237e",
    marginBottom: 10,
  },
  programButton: {
    backgroundColor: "#1a237e",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  programButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
