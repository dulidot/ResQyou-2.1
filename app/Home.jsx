import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        const getUsername = async () => {
            try {
                const storedUsername = await AsyncStorage.getItem("username");
                if (storedUsername) {
                    setUsername(storedUsername);
                } else {
                    console.warn("No username found in AsyncStorage.");
                }
            } catch (error) {
                console.error("Error fetching username:", error);
            }
        };
        getUsername();
    }, []);

    const handleLogout = async () => {
        console.log("Logout button pressed");
        try {
            await AsyncStorage.removeItem("userToken");
            await AsyncStorage.removeItem("username");
            navigation.reset({
                index: 0,
                routes: [{ name: "index" }],
            });
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    const handleSOS = () => {
        Alert.alert("SOS Activated!", "Help is on the way.");
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.container}>
            <View style={{ flex: 1, zIndex: 1 }}>
                {/* Header Section */}
                <View style={styles.userContainer}>
                    <TouchableOpacity onPress={toggleDropdown} style={styles.hamburgerButton}>
                        <Ionicons name="menu-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                {/* Dropdown Menu */}
                {dropdownVisible && (
                    <View style={styles.dropdownContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate("Users")} style={styles.dropdownItem}>
                            <Text style={styles.dropdownText}>Users</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={styles.dropdownItem}>
                            <Text style={styles.dropdownText}>Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Privacy")} style={styles.dropdownItem}>
                            <Text style={styles.dropdownText}>Privacy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleLogout} style={[styles.dropdownItem, styles.logoutButton]}>
                            <Text style={[styles.dropdownText, styles.logoutText]}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* SOS Button */}
                <View style={styles.sosContainer}>
                    <TouchableOpacity style={styles.sosButton} onPress={handleSOS}>
                        <Text style={styles.sosText}>SOS</Text>
                    </TouchableOpacity>
                </View>

                {/* Bottom Navigation */}
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomButtonsContainer}>
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={() => navigation.navigate("Home")}
                        >
                            <View style={styles.iconContainer}>
                                <Ionicons name="home" size={17} color="white" />
                            </View>
                            <Text style={styles.actionText}>Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={() => navigation.navigate("MapScreen")}
                        >
                            <View style={styles.iconContainer}>
                                <FontAwesome5 name="newspaper" size={17} color="white" />
                            </View>
                            <Text style={styles.actionText}>News</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={() => navigation.navigate("Chatlist")}
                        >
                            <View style={styles.iconContainer}>
                                <MaterialIcons name="chat" size={17} color="white" />
                            </View>
                            <Text style={styles.actionText}>Chat</Text>
                        </TouchableOpacity>
                    </View>
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
        alignSelf: "flex-end", // Moved the hamburger to the right
        backgroundColor: "#8c01c0",
        padding: 20,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    hamburgerButton: {
        marginLeft: "auto", // Align the hamburger button to the right
        padding: 5,
    },
    dropdownContainer: {
        position: "absolute",
        top: 80,
        right: 20, // Adjusted to align with the right side
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        width: 130,
        elevation: 10,
        zIndex: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    dropdownText: {
        fontSize: 15,
        color: "#333",
    },
    logoutButton: {
        backgroundColor: "#f8d7da",
    },
    logoutText: {
        color: "#a94442",
        fontWeight: "bold",
    },
    sosContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    sosButton: {
        backgroundColor: "#8c01c0",
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
        marginTop: 50,
    },
    sosText: {
        fontSize: 75,
        fontWeight: "bold",
        color: "#ffffff",
    },
    bottomContainer: {

        position: "absolute", // Fix the container at the bottom
        bottom: 0, // Align it to the bottom of the screen
        left: 0,
        right: 0,
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