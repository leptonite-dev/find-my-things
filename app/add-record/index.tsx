import React, { useEffect, useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import * as SQLite from "expo-sqlite";

const AddRecordScreen = () => {
  const [facing, setFacing] = useState<CameraType>("front");
  const [permission, requestPermission] = useCameraPermissions();
  const [db, setdb] = useState<SQLite.SQLiteDatabase>();
  const camera = useRef(null);

  const addRecord = async () => {
    if (!db) return;
    try {
      const result = await db.runAsync(
        "INSERT INTO records (location, name) VALUES (?, ?)",
        "aaa",
        "100"
      );
      console.log(result.lastInsertRowId, result.changes);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllRecords = async () => {
    if (!db) return;
    try {
      const result = await db.runAsync("SELECT * FROM records");
      console.log(result.lastInsertRowId, result.changes);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteRecord = async (id: number) => {
    if (!db) return;
    try {
      const result = await db.runAsync("DELETE FROM records WHERE id = ?", id);
      console.log(result.lastInsertRowId, result.changes);
    } catch (error) {
      console.error(error);
    }
  };

  const updateRecord = async (id: number) => {
    if (!db) return;
    try {
      const result = await db.runAsync(
        "UPDATE records SET location = ?, name = ? WHERE id = ?",
        "aaa",
        "100",
        id
      );
      console.log(result.lastInsertRowId, result.changes);
    } catch (error) {
      console.error(error);
    }
  };

  const initDB = async () => {
    const db = await SQLite.openDatabaseAsync("My-Things");
    setdb(db);
    console.log(db)
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS records (id INTEGER PRIMARY KEY NOT NULL, location TEXT NOT NULL, name TEXT NOT NULL);
      INSERT INTO records (location, name) VALUES ('test1', '123');
      `);
  };

  useEffect(() => {
    initDB();
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
        onPress={getAllRecords}
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
