import { View, Text, Button } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface TRecord {
  name: string;
}
const index = () => {
  const storeData = async (value: TRecord) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(Date.now().toString(), jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getAllKeys()
      console.log(jsonValue)
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View>
      <Button onPress={()=>{storeData({name:"jam"})}} title="add"></Button>
      <Button  title="get" onPress={getData}></Button>
      <Text>index</Text>
    </View>
  );
};

export default index;
