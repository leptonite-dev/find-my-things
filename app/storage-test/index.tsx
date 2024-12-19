import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

interface TRecord {
  name: string;
}

const index = () => {
  const [db, setDB] = useState<SQLite.SQLiteDatabase>();

  const storeData = async (value: TRecord) => {
    try {
    } catch (e) {
      console.log(e);
    }
  };

  const getAllData = async () => {
    if (!db) return;

    try {
      const allRows = await db.getAllAsync<{
        id: number;
        name: string;
        location: string;
      }>("SELECT * FROM records");
      for (const row of allRows) {
        console.log(row);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const createTable = async (db: SQLite.SQLiteDatabase) => {
    try {
      await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS records (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, location TEXT NOT NULL);
        `);
    } catch (e) {
      console.log(e);
    }
  };

  const initDB = async () => {
    const db = await SQLite.openDatabaseAsync("my-things");
    console.log(db)
    createTable(db);

    setDB(db);
  };

  useEffect(() => {
    initDB();
  }, []);

  return (
    <View>
      <Button onPress={() => {}} title="add"></Button>
      <Button title="get" onPress={getAllData}></Button>
      <Text>index</Text>
    </View>
  );
};

export default index;
