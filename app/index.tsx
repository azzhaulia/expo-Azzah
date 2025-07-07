import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 80,
          borderRightWidth: 80,
          borderBottomWidth: 80,
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
          width: 150,
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
          width: 160,
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
    </View>
  );
}
