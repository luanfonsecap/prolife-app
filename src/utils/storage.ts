import AsyncStorage from "@react-native-async-storage/async-storage";

function parse(value?: string | null) {
  return typeof value === "string" ? JSON.parse(value) : value;
}

export async function getItem<T>(key: string): Promise<T> {
  return AsyncStorage.getItem(key).then(parse);
}

export function setItem<T>(key: string, value: T): void {
  AsyncStorage.setItem(key, JSON.stringify(value));
}

export function removeItem(key: string): void {
  AsyncStorage.removeItem(key);
}

export async function clearStorage() {
  await AsyncStorage.clear();
}
