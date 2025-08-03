import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <AntDesign name="star" size={36} color="#4F8EF7" />
          <Text style={styles.iconLabel}>Star</Text>
        </View>
        <View style={styles.iconItem}>
          <Entypo name="tree" size={36} color="#8E24AA" />
          <Text style={styles.iconLabel}>Tree</Text>
        </View>
        <View style={styles.iconItem}>
          <EvilIcons name="trophy" size={36} color="#607D8B" />
          <Text style={styles.iconLabel}>Trophy</Text>
        </View>
        <View style={styles.iconItem}>
          <Feather name="music" size={36} color="#009688" />
          <Text style={styles.iconLabel}>Music</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome name="car" size={36} color="#E91E63" />
          <Text style={styles.iconLabel}>Car</Text>
        </View>
        <View style={styles.iconItem}>
          <Ionicons name="planet" size={36} color="#FF7043" />
          <Text style={styles.iconLabel}>Planet</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="pets" size={36} color="#FFD700" />
          <Text style={styles.iconLabel}>Pets</Text>
        </View>
        <View style={styles.iconItem}>
          <Octicons name="flame" size={36} color="#795548" />
          <Text style={styles.iconLabel}>Flame</Text>
        </View>
        <View style={styles.iconItem}>
          <SimpleLineIcons name="ghost" size={36} color="#3F51B5" />
          <Text style={styles.iconLabel}>Ghost</Text>
        </View>
        <View style={styles.iconItem}>
          <AntDesign name="github" size={36} color="#43A047" />
          <Text style={styles.iconLabel}>Github</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 18,
  },
  iconItem: {
    alignItems: "center",
    margin: 12,
    width: 80,
  },
  iconLabel: {
    marginTop: 6,
    fontSize: 13,
    textAlign: "center",
  },
});
