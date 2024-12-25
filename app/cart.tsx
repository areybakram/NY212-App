


import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useCart } from "./cartcontext"; 

const CartScreen = () => {
  const { cartItems } = useCart(); 

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace("Rs. ", "")), 0);
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

      
      <ScrollView style={styles.cartContainer}>
        <Text style={styles.heading}>Your Cart</Text>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Text style={styles.itemName}>{item.title}</Text>
              <Text style={styles.itemDetails}>
                {item.description} | Price: {item.price}
              </Text>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        )}
      </ScrollView>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: Rs. {calculateTotal()}</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => alert("Proceeding to Checkout...")}
        >
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

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
  },
  logo: {
    width: 300,
    height: 150,
    resizeMode: "contain",
  },
  cartContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  cartItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  itemDetails: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  emptyCartText: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
    marginTop: 20,
  },
  totalContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  checkoutButton: {
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
