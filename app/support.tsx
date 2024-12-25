import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SupportScreen = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://ny-212.com/wp-content/webp-express/webp-images/uploads/2023/05/NY212-Logo-1.png.webp",
          }}
          style={styles.logo}
        />
      </View>

     
      <Text style={styles.heading}>Support Center</Text>
      <Text style={styles.subHeading}>For queries, please contact us at:</Text>

     
      <TouchableOpacity style={styles.emailButton}>
        <Text style={styles.emailText}>contact@ny-212.com</Text>
      </TouchableOpacity>

     
      <View style={styles.whatsappContainer}>
        <FontAwesome name="whatsapp" size={30} color="#25D366" style={styles.whatsappIcon} />
        <Text style={styles.whatsappNumber}>+923311169212</Text>
      </View>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 0,
    paddingTop: 0,
    alignItems: "center",
  },
  logoContainer: {
    backgroundColor: "#C00000",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: {
    width: 300,
    height: 190,
    borderRadius: 40,
    resizeMode: "contain",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subHeading: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  emailButton: {
    backgroundColor: "#C00000",
    width: "90%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  emailText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  whatsappContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  whatsappIcon: {
    marginRight: 10,
  },
  whatsappNumber: {
    fontSize: 16,
    color: "#000",
  },
});
