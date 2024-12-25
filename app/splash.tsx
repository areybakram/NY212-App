import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

const SplashScreen = () => {
  const router = useRouter(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login"); 
    }, 4000);

    return () => clearTimeout(timer); 
  }, [router]);

  return (
    <View style={styles.container}>
      
      <Image
        source={{
          uri: "https://ny-212.com/wp-content/webp-express/webp-images/uploads/2023/05/NY212-Logo-1.png.webp",
        }}
        style={styles.logo}
      />

     
      <View style={styles.poweredByContainer}>
        <Text style={styles.poweredByText}>Powered by</Text>
        <Text style={styles.blinkText}>blink</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  poweredByContainer: {
    position: "absolute",
    bottom: 50,
    alignItems: "center",
  },
  poweredByText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "400",
  },
  blinkText: {
    fontSize: 18,
    color: "#4a90e2",
    fontWeight: "bold",
  },
});
