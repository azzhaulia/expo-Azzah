import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "red",
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={24} color="black" />
                ),
            }}
        />
        <Tabs.Screen
            name="about"
            options={{
                title: "Tentang saya",
                tabBarIcon: ({ color, size }) => (
                    <EvilIcons name="user" size={24} color="black" />
                ),
            }}
        />
    </Tabs>
  );
}