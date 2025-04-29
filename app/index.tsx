import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const LoginScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter(); // Use the router for navigation

    const handleLogin = () => {
        // Navigate to HomeScreen
        router.push("./Home");
    };

    const handleRegister = () => {
        // Navigate to Register screen
        router.push("./Register");
    };

    const handleForgotpass = () => {
        // Navigate to Register screen
        router.push("./Forgotpass");
    };

    return (
        <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.container}>
            {/* Logo */}
            <Image source={require("../assets/images/bg1.png")} style={styles.logo} />

            {/* Username Input */}
            <View style={styles.inputContainer}>
            <Text style={styles.label}></Text>
            <TextInput
                      style={styles.input}
                      value={username}
                      onChangeText={setUsername}
                      placeholder="Username"
                      placeholderTextColor="#aaa"
                    />
            {/* Password Input */}
            <Text style={styles.label}></Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#aaa"
                secureTextEntry
                autoCapitalize="none"
            />
            </View>
            <TouchableOpacity onPress={handleForgotpass}>
                <Text>Forgot Password</Text>
            </TouchableOpacity>
            {/* Login Button */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Register Link */}
            <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.registerText}>Don't have an account? Register</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginTop: 50,
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 0,
    },
    label: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
        marginRight: 185,
    },
    inputContainer: {
        marginTop: 15,
        width: "100%",
        alignItems: 'center',      
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 15,
        marginBottom: 5,
        width: "90%",
    },
    button: {
        backgroundColor: "#8c01c0", // Updated button color
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        width: "60%",
        marginTop: 30,
        marginBottom: 20,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    registerText: {
        textAlign: "center",
        color: "#b68def",
        fontSize: 14,
        fontWeight: "bold",
        textDecorationLine: "underline",
        marginBottom: 50,
    },
});

export default LoginScreen;