import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    // Navigate to the login screen after registration
    router.replace('./');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="purple" />
      </TouchableOpacity>

      {/* Form */}
      <View style={styles.formContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Create an account to  get started</Text>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={fullname}
            onChangeText={setFullname}
            placeholder="Full Name"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            value={contactNumber}
            onChangeText={setContactNumber}
            placeholder="Contact Number"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#aaa"
          />
          {/* Register Button */}
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 10,
    marginTop: 20,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  textContainer: {
    position: 'absolute',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#8C00BF',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  inputContainer: {
    marginTop: 120,
    position: 'absolute',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 60,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#8C00BF',
    paddingVertical: 12, // Adjusted vertical padding for a smaller height
    paddingHorizontal: 25, // Adjusted horizontal padding for the register button width
    borderRadius: 8, // Slightly smaller border radius for the button
    alignItems: 'center',
    marginTop: 10,
    width: '70%', // Adjusted width for the register button only
   // Center the button horizontally
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Slightly smaller font size for the button text
    fontWeight: "bold",
  },
});

export default Register;
