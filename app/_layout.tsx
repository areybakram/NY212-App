


import React from "react";
import { Stack } from "expo-router";
import { CartProvider } from "./cartcontext"; 

export default function Layout() {
  return (
    <CartProvider>
      <Stack
        initialRouteName="splash" 
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="splash" />
        <Stack.Screen name="home" />
        <Stack.Screen name="login" />
        <Stack.Screen name="delivery" />
        <Stack.Screen name="pickup" />
        <Stack.Screen name="dinein" />
        <Stack.Screen name="support" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="cart" />
        <Stack.Screen name="search" />
      </Stack>
    </CartProvider>
  );
}
