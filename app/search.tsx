import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      Alert.alert("Error", "Please enter a search term.", [{ text: "OK" }]);
    } else {
      Alert.alert("Search Results", `You searched for: ${searchQuery}`, [
        { text: "OK" },
      ]);
    }
  };

  return (
    <View style={styles.container}>
 
      <View style={styles.header}>
        <Text style={styles.headerText}>Search</Text>
      </View>

    
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter search term"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#C00000",
    paddingVertical: 30,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  searchContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
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
  searchButton: {
    backgroundColor: "#C00000",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
