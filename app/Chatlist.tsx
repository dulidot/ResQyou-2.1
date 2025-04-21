// app/index.js
import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const users = [
  { id: "1", name: "VAWC Support" },
  { id: "2", name: "Counselor Jane" },
  { id: "3", name: "Legal Aid Team" },
];

const ChatList = () => {
  const router = useRouter();

  const openChat = (user) => {
    router.push({ pathname: "/chat", params: { userId: user.id, name: user.name } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chats</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatCard} onPress={() => openChat(item)}>
            <Text style={styles.chatName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: "#673ab7" },
  chatCard: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f0e7ff",
    marginBottom: 10,
  },
  chatName: { fontSize: 18, fontWeight: "600", color: "#5a35b7" },
});

export default ChatList;
