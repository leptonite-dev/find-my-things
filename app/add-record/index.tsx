import React from "react";
import { Pressable, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const AddRecordScreen = () => {
  return (
    <View style={{ padding: 8 }}>
      <View
        style={{
          width: "100%",
          backgroundColor: "lightgray",
          aspectRatio: "1 / 1",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
      >
        <Feather name="camera" size={64} color="rgba(0, 0, 0, 0.8)" />
      </View>
      <Pressable
        style={{
          backgroundColor: "lightgray",
          borderRadius: 8,
          paddingHorizontal: 8,
          paddingVertical: 16,
          marginTop: 24,
        }}
      >
        <Text style={{ textAlign: "center" }}>Take a picture</Text>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: "lightgray",
          borderRadius: 8,
          paddingHorizontal: 8,
          paddingVertical: 16,
          marginTop: 16,
        }}
      >
        <Text style={{ textAlign: "center" }}>Add record</Text>
      </Pressable>
    </View>
  );
};

export default AddRecordScreen;
