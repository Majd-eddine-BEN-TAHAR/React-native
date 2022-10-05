import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={{ flex: 1, backgroundColor: "red" }}>hey</Text>
        <Text style={{ flex: 2, backgroundColor: "blue" }}>hey</Text>
        <Text style={{ flex: 3, backgroundColor: "yellow" }}>hey</Text>
      </View>
      <View style={styles.container2}>
        <Text style={{ flex: 1, backgroundColor: "red" }}>hey</Text>
        <Text style={{ flex: 1, backgroundColor: "blue" }}>hey</Text>
        <Text style={{ flex: 1, backgroundColor: "yellow" }}>hey</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 30,
    justifyContent: "space-around",
  },
  container1: {
    height: 100,
    flexDirection: "row",
    alignItems: "stretch",
  },
  container2: {
    height: 200,
  },
});
