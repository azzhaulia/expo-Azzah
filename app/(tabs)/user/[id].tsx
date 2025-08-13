import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { View, Text } from "react-native";

const users = [
  {
    id: "1",
    name: "Alya Anandha",
    nim: "105841105422",
  },
  {
    id: "2",
    name: "Erika Yanti",
    nim: "105841104323",
  },
  {
    id: "3",
    name: "Muh. Fikri",
    nim: "105841105524",
  },
];
export default function UserPage() {
  const { id } = useLocalSearchParams();
  const user = useMemo(() => users.find((user) => user.id === id), [id]);

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>User not found</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
      }}
    >
      <Text>Nama : {user.name}</Text>
      <Text>NIM : {user.nim}</Text>
    </View>
  );
}
