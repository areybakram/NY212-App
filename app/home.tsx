

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <View style={styles.topSection}>
        <Image
          source={{
            uri: "https://ny-212.com/wp-content/webp-express/webp-images/uploads/2023/05/NY212-Logo-1.png.webp",
          }}
          style={styles.logo}
        />
      </View>

      
      <View style={styles.bottomSection}>
        <Text style={styles.heading}>
          Welcome to NY212 Pizza <Text style={styles.emoji}>👋</Text>
        </Text>
        <Text style={styles.subHeading}>
          Please select your order type to continue
        </Text>

        
        <TouchableOpacity
          style={styles.option}
          onPress={() => router.push("/delivery")}
        >
          <View style={styles.optionIcon}>
            <Text style={styles.iconText}>🚚</Text>
          </View>
          <Text style={styles.optionText}>Delivery</Text>
          <Text style={styles.arrow}>➔</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={styles.option}
          onPress={() => router.push("/pick")}
        >
          <View style={styles.optionIcon}>
            <Text style={styles.iconText}>🛒</Text>
          </View>
          <Text style={styles.optionText}>Pick-Up</Text>
          <Text style={styles.arrow}>➔</Text>
        </TouchableOpacity>

       
        <TouchableOpacity
          style={styles.option}
          onPress={() => router.push("/dine")}
        >
          <View style={styles.optionIcon}>
            <Text style={styles.iconText}>🍴</Text>
          </View>
          <Text style={styles.optionText}>Dine-In</Text>
          <Text style={styles.arrow}>➔</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C00000",
  },
  topSection: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C00000",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  bottomSection: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  emoji: {
    fontSize: 20,
  },
  subHeading: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  optionIcon: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 20,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  arrow: {
    fontSize: 20,
    color: "#999",
  },
});
