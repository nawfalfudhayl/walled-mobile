import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HelloWorld from "./components/HelloWorld";
import Button from "./components/Button";

const Stack = createStackNavigator();

function LandingScreen({ navigation }) {
  const actions = [
    { id: 1, title: "Transfer", icon: "💸" },
    { id: 2, title: "Bill Pay", icon: "💡" },
    { id: 3, title: "QRIS", icon: "📱" },
    { id: 4, title: "More", icon: "📋" },
  ];

  return (
    <View style={styles.landingContainer}>
      <LinearGradient
        colors={["#ffcc00", "#ff6600"]}
        style={styles.headerBackground}
      >
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Indonesia_Jersey_Launching_%28Safira_Ika_Putri%29.jpg/800px-Indonesia_Jersey_Launching_%28Safira_Ika_Putri%29.jpg",
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Shafia</Text>
            <Text style={styles.profileSubtitle}>Easy Wadiah</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Your Balance</Text>
        <Text style={styles.cardBalance}>Rp 10,000,000</Text>
      </View>

      <FlatList
        data={actions}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.actionRow}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>{item.icon}</Text>
            <Text style={styles.actionText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <Button />

      <StatusBar style="light" />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BYOND Banking</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Transfer")}
      >
        <Text style={styles.buttonText}>Go to Transfers</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function TransferScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transfer Money</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Transfer" component={TransferScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  landingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerBackground: {
    height: 150,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#fff",
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  profileSubtitle: {
    fontSize: 14,
    color: "#fff",
  },
  cardContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -10,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 16,
    color: "#888",
    marginBottom: 5,
  },
  cardBalance: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  actionRow: {
    justifyContent: "space-around",
    marginTop: 20,
  },
  actionButton: {
    width: "40%",
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    padding: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 10,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  footerButton: {
    backgroundColor: "#27ae60",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  footerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#27ae60",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
