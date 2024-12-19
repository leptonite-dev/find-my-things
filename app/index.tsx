import { IconButton } from "@/components/IconButton";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView, Text, View } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";

const mythings = [{ name: "kunci" }, { name: "ball" }];

const index = () => {
  const [loaded] = useFonts({
    Mulish: require("../assets/fonts/Mulish-VariableFont_wght.ttf"),
  });
  const router = useRouter();

  return (
    <View>
      <ScrollView>
        <View style={{ padding: 8, gap: 8 }}>
          {mythings.map((thing, idx) => (
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
              key={idx}
            >
              <Text>{thing.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <Link
        href="/add-record"
        style={{
          alignSelf: "center",
        }}
      >
        <IconButton
          style={{
            borderRadius: 8,
            backgroundColor: "#966231",
            padding: 8,
          }}
          icon={<AntDesign name="plus" size={24} color="white" />}
        />
      </Link>
      <Link
        href="/storage-test"
        style={{
          alignSelf: "center",
        }}
      >
        <IconButton
          style={{
            borderRadius: 8,
            backgroundColor: "#966231",
            padding: 8,
          }}
          icon={<AntDesign name="plus" size={24} color="white" />}
        />
      </Link>
    </View>
  );
};

export default index;
