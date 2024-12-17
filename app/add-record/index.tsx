import React, { useEffect, useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import * as SQLite from 'expo-sqlite'



const AddRecordScreen = () => {
  const [facing, setFacing] = useState<CameraType>("front");
  const [permission, requestPermission] = useCameraPermissions();
  const camera = useRef(null);
  useEffect(() => { 
    const initdb = async() => { 
    const db = await SQLite.openDatabaseAsync('records');
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, location TEXT NOT NULL, name TEXT NOT NULL);
      INSERT INTO test (location, name) VALUES ('test1', '123');
      `)
  }
    requestPermission();
  }, []);
  
  return (
    <View style={{ padding: 8 }}>
      <View
        style={{
          overflow: "hidden",
          width: "100%",
          backgroundColor: "lightgray",
          aspectRatio: "1 / 1",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
      >
        {permission?.granted ? (
          <CameraView
            ref={camera}
            style={{ aspectRatio: "1 / 1" }}
            facing={facing}
            ratio="1:1"
          ></CameraView>
        ) : (
          <Feather name="camera" size={64} color="rgba(0, 0, 0, 0.8)" />
        )}
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


