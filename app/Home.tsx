import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const Home = () => {
  const [username, setUsername] = useState("User"); // Default username
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const router = useRouter(); // Use the router for navigation

  const handleLogout = () => {
    // Navigate to the login screen
    router.replace("/LoginScreen");
  };

  const handleSOS = () => {
    Alert.alert("SOS Activated!", "Help is on the way.");
  };

  const handleTrackMe = () => {
    Alert.alert("Tracking Enabled", "Your location is being shared.");
  };

  const handleTalkToCouncil = () => {
    Alert.alert("Connecting...", "Redirecting to Women's Council.");
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.container}>
      <View style={styles.userContainer}>
        <TouchableOpacity onPress={toggleDropdown} style={styles.userButton}>
          <Text style={styles.userText}>{username}</Text>
        </TouchableOpacity>

        {dropdownVisible && (
          <View style={styles.dropdownContainer}>
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.sosContainer}>
        <TouchableOpacity style={styles.sosButton} onPress={handleSOS}>
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topBottomContainer}>
        <Text style={styles.topBottomText}>Additional Info or Features Here</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/Home")}>
            <View style={styles.iconContainer}>
              <Ionicons name="home" size={17} color="white" />
            </View>
            <Text style={styles.actionText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/MapScreen")}>
            <View style={styles.iconContainer}>
              <FontAwesome5 name="map-marker-alt" size={17} color="white" />
            </View>
            <Text style={styles.actionText}>Track</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/Chat")}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="chat" size={17} color="white" />
            </View>
            <Text style={styles.actionText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  userContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#b68def",
    padding: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
    width: "100%",
  },
  userText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  userButton: {
    padding: 2,
  },
  dropdownContainer: {
    position: "absolute",
    top: 70,
    left: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 0,
    width: 90,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  logoutButton: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 5,
  },
  logoutText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 10,
  },
  sosContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  sosButton: {
    backgroundColor: "#b68def",
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginTop: 10,
  },
  sosText: {
    fontSize: 75,
    fontWeight: "bold",
    color: "#ffffff",
  },
  topBottomContainer: {
    backgroundColor: "#eddff7",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
  },
  topBottomText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  bottomContainer: {
    backgroundColor: "#eddff7",
    padding: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  actionButton: {
    alignItems: "center",
    paddingVertical: 5,
  },
  iconContainer: {
    backgroundColor: "#b68def",
    padding: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  actionText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
    marginTop: 2,
  },
});

export default Home;