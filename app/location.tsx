// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   Alert,
// } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons"; // For the location icon
// import MapView, { Marker } from "react-native-maps"; // Install via `expo install react-native-maps`

// const LocationScreen = () => {
//   const [city, setCity] = useState("Lahore");
//   const [area, setArea] = useState("");

//   const confirmLocation = () => {
//     Alert.alert("Location Confirmed", `City: ${city}\nArea: ${area}`);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Map Section */}
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 31.5204, // Lahore coordinates
//           longitude: 74.3587,
//           latitudeDelta: 0.01,
//           longitudeDelta: 0.01,
//         }}
//       >
//         <Marker
//           coordinate={{ latitude: 31.5204, longitude: 74.3587 }}
//           title="Your Location"
//           description="Move the map to adjust location"
//         />
//       </MapView>

//       {/* Locate Me Button */}
//       <TouchableOpacity style={styles.locateButton}>
//         <MaterialIcons name="my-location" size={24} color="black" />
//         <Text style={styles.locateText}>Locate Me</Text>
//       </TouchableOpacity>

//       {/* Location Form */}
//       <View style={styles.formContainer}>
//         <Text style={styles.label}>Please select your location</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="City / Region"
//           value={city}
//           onChangeText={setCity}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Area / Sub-Region"
//           value={area}
//           onChangeText={setArea}
//         />
//         <TouchableOpacity
//           style={styles.confirmButton}
//           onPress={confirmLocation}
//         >
//           <Text style={styles.confirmButtonText}>Confirm Location</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f8f8",
//   },
//   map: {
//     flex: 1,
//   },
//   locateButton: {
//     position: "absolute",
//     top: 50,
//     right: 20,
//     backgroundColor: "#fff",
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//     borderRadius: 20,
//     elevation: 5,
//   },
//   locateText: {
//     marginLeft: 5,
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   formContainer: {
//     padding: 20,
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     elevation: 10,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 15,
//     fontSize: 14,
//   },
//   confirmButton: {
//     backgroundColor: "#C00000",
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   confirmButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default LocationScreen;
