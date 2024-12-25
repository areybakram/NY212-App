

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Drawer = ({ closeDrawer }: { closeDrawer: () => void }) => {
  const router = useRouter();

  const navigateToScreen = (screen: string) => {
    closeDrawer(); // Close the drawer first
    router.push(`/${screen}`); // Navigate to the selected screen
  };

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.drawer}>
      {/* Greeting Section */}
      <Text style={styles.greetingText}>Hi, Guest</Text>

      {/* Drawer Options */}
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigateToScreen("support")}
        >
          <MaterialCommunityIcons name="headset" size={20} color="#000" />
          <Text style={styles.optionText}>Support Center</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigateToScreen("login")}
        >
          <MaterialCommunityIcons name="login" size={20} color="#000" />
          <Text style={styles.optionText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        {/* Social Media Icons */}
        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => openLink("https://facebook.com/yourProfile")}>
            <FontAwesome name="facebook-square" size={24} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://instagram.com/yourProfile")}>
            <FontAwesome name="instagram" size={24} color="#d6249f" style={styles.iconSpacing} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://linkedin.com/in/yourProfile")}>
            <FontAwesome name="linkedin-square" size={24} color="#0077b5" style={styles.iconSpacing} />
          </TouchableOpacity>
        </View>

        {/* Powered By Section */}
        <View style={styles.poweredBy}>
          <Image
            source={{
              uri: "https://ny-212.com/wp-content/webp-express/webp-images/uploads/2023/05/NY212-Logo-1.png.webp",
            }}
            style={styles.blinkLogo}
          />
          <Text style={styles.versionText}>Version 1.1.17+4194328</Text>
        </View>
      </View>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  drawer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    zIndex: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#000",
  },
  footer: {
    marginTop: "auto",
    alignItems: "center",
    paddingBottom: 20,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  iconSpacing: {
    marginLeft: 25,
  },
  poweredBy: {
    alignItems: "center",
    marginTop: 10,
  },
  blinkLogo: {
    width: 90,
    height: 60,
    resizeMode: "contain",
    marginBottom: 5,
  },
  versionText: {
    fontSize: 12,
    color: "#999",
  },
});
