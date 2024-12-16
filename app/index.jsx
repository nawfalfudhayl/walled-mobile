import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/walledLogo.png")} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
      />

      <Link href="/(home)">Back Home</Link>
      
      <Button text={"Login"}/>
      <Text style={styles.footer}>Dont Have Account?</Text> 
      <Link href="/register" style={styles.link}>Register Here</Link>
      {/* <Input text="notes" /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 233,
    height: 53,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
  link: {
    color: "#0d9488",
    fontSize: 16
  },
  footer: {
    flexDirection: "row",
    alignItems: "left",
    marginTop: 10,
    fontSize: 16
  },
  footerText: {
    fontSize: 16,
    color: "#555",
  }
});
