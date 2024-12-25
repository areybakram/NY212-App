import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { useRouter } from "expo-router";

const SignupScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter(); 

  const handleSignup = () => {
    Alert.alert("Success", "User added", [
      { text: "OK", onPress: () => router.push("/home") }, 
    ]);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://ny-212.com/wp-content/webp-express/webp-images/uploads/2023/05/NY212-Logo-1.png.webp",
          }}
          style={styles.logo}
        />
      </View>

    
      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>Sign Up</Text>
        <Text style={styles.formSubText}>
          Create an account to access exclusive offers and updates!
        </Text>

        
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />

        
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <View style={styles.bottomContainer}>
          
          <TouchableOpacity onPress={() => alert("Need Help?")} style={styles.helpContainer}>
            <Text style={styles.helpText}>Need Help?</Text>
          </TouchableOpacity>

         
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    backgroundColor: "#C00000",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: "relative",
  },
  logo: {
    width: 300,
    height: 150,
    resizeMode: "contain",
  },
  formContainer: {
    padding: 20,
  },
  formHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  formSubText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 20,
    color: "#333",
  },
  bottomContainer: {
    marginTop: 20,
    width: "100%",
  },
  helpContainer: {
    marginBottom: 20,
  },
  helpText: {
    color: "#C00000",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
  },
  button: {
    backgroundColor: "#C00000",
    borderRadius: 10,
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
