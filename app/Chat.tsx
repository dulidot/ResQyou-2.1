import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello, how can I support you today?", sender: "VAWC Support" },
  ]);
  const [input, setInput] = useState("");
  const router = useRouter(); // Use the router for navigation

  const sendMessage = () => {
    if (input.trim().length === 0) return;
    const newMessage = { id: Date.now().toString(), text: input, sender: "You" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.sender === "You" ? styles.userMessage : styles.supportMessage]}>
            <Text style={styles.sender}>{item.sender}</Text>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>

      {/* Return to Home Button */}
      <TouchableOpacity style={styles.returnButton} onPress={() => router.push("/Home")}>
        <Text style={styles.returnText}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#ffffff" },
  messageContainer: { padding: 10, borderRadius: 8, marginVertical: 4, maxWidth: "80%" },
  userMessage: { alignSelf: "flex-end", backgroundColor: "#b68def" },
  supportMessage: { alignSelf: "flex-start", backgroundColor: "#eddff7" },
  sender: { fontWeight: "bold", marginBottom: 2, color: "#333" },
  messageText: { color: "#333" },
  inputContainer: { flexDirection: "row", alignItems: "center", padding: 10, backgroundColor: "#f6f6f6" },
  input: { flex: 1, borderWidth: 1, borderColor: "#ccc", padding: 8, borderRadius: 5, marginRight: 10 },
  sendButton: { backgroundColor: "#b68def", padding: 10, borderRadius: 5 },
  sendText: { color: "#fff", fontWeight: "bold" },
  returnButton: { marginTop: 20, padding: 10, backgroundColor: "#b68def", borderRadius: 5 },
  returnText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});

export default Chat;