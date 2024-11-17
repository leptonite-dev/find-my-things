import { IconButton } from "@/components/IconButton";
import { useFonts } from "expo-font";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView, Text, View } from "react-native";
const mythings = [{ name: "kunci" }, { name: "ball" }];
const index = () => {
  const [loaded] = useFonts({
    Mulish: require("../assets/fonts/Mulish-VariableFont_wght.ttf"),
  });
  return (
    <View>
      <ScrollView>
        <View style={{ padding: 8, gap: 8 }}>
          {mythings.map((thing) => (
            <View
              style={{
                backgroundColor: "#dfc59f",
                padding: 8,
                borderRadius: 8,
                shadowColor: "#ab6e36",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4,
              }}
            >
              <Text>{thing.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <IconButton
        style={{
          borderRadius: 8,
          backgroundColor: "#966231",
          padding: 4,
          alignSelf: "center",
        }}
        icon={<AntDesign name="plus" size={24} color="black" />}
      />
    </View>
  );
};

export default index;