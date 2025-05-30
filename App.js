import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const images = {
  steam: require("./assets/steam.png"),
  Dota: require("./assets/Dota.jpg"),
  TheWitcher3: require("./assets/The Witcher 3.jpg"),
  Barotrauma: require("./assets/Barotrauma.jpg"),
  Rust: require("./assets/rust.jpg"),
  Cyberpunk2077: require("./assets/Cyberpunk 2077.jpg"),
  ava1: require("./assets/ava1.jpg"),
  ava2: require("./assets/ava2.jpg"),
  ava3: require("./assets/ava3.jpg"),
  ava4: require("./assets/ava4.jpg"),
  ava5: require("./assets/ava5.jpg"),
  ava6: require("./assets/ava6.jpg"),
  ava7: require("./assets/ava7.jpg"),
  ava8: require("./assets/ava8.jpg"),
  ava9: require("./assets/ava9.jpg"),
  Valheim: require("./assets/Valheim.jpg"),
  shop: require("./assets/shop.png"),
  profile: require("./assets/profile.png"),
  chat: require("./assets/chat.png"),
  safety: require("./assets/Safety.png"),
  DragonAge: require("./assets/Dragon Age.jpg"),
  Stalker2: require("./assets/Stalker2.jpg"),
  HollowKnight: require("./assets/Hollow Knight.jpg"),
  Starfield: require("./assets/Starfield.jpg"),
};

const gamesList = [
  {
    title: "The Witcher 3",
    price: "$25",
    discount: "-50%",
    image: images.TheWitcher3,
  },
  { title: "Valheim", price: "$20", image: images.Valheim },
  { title: "Barotrauma", price: "$12", image: images.Barotrauma },
  { title: "Dota", price: "Free", image: images.Dota },
  { title: "Rust ", price: "$35", image: images.Rust },
];

const newsList = [
  {
    title: "Dragon Age: Dreadwolf отримає демо-версію",
    summary:
      "BioWare анонсувала вихід демо-версії Dragon Age: Dreadwolf у липні 2025 року для обмеженої кількості гравців.",
    image: images.DragonAge,
    source: "IGN",
  },
  {
    title: "S.T.A.L.K.E.R. 2 вийде раніше, ніж очікувалося",
    summary:
      "GSC Game World повідомила, що реліз S.T.A.L.K.E.R. 2 перенесено на листопад 2025 року — гра вже на фінальній стадії.",
    image: images.Stalker2,
    source: "GameSpot",
  },
  {
    title: "Silksong нарешті отримав дату релізу",
    summary:
      "Team Cherry офіційно оголосила, що довгоочікувана гра Hollow Knight: Silksong вийде у жовтні 2025 року.",
    image: images.HollowKnight,
    source: "IGN",
  },
  {
    title: "Starfield отримає масштабне DLC вже цієї осені",
    summary:
      "Bethesda підтвердила вихід доповнення 'Shattered Skies' для Starfield, реліз очікується у вересні 2025 року.",
    image: images.Starfield,
    source: "GameSpot",
  },
];

const chatList = [
  {
    id: 1,
    name: "Artemis",
    message: "Ready for the next quest?",
    date: "28 May",
    avatar: images.ava1,
  },
  {
    id: 2,
    name: "NightWolf",
    message: "You: Let’s do this!",
    date: "27 May",
    avatar: images.ava2,
  },
  {
    id: 3,
    name: "Echo",
    message: "See you on the battlefield.",
    date: "26 May",
    avatar: images.ava5,
  },
  {
    id: 4,
    name: "FrostByte",
    message: "I'm online now.",
    date: "25 May",
    avatar: images.ava3,
  },
  {
    id: 5,
    name: "Venom",
    message: "Team up?",
    date: "24 May",
    avatar: images.ava4,
  },
  {
    id: 6,
    name: "Luna",
    message: "Almost ready!",
    date: "23 May",
    avatar: images.ava7,
  },
  {
    id: 7,
    name: "Cryptic",
    message: "Invite me when you're in.",
    date: "22 May",
    avatar: images.ava8,
  },
  {
    id: 8,
    name: "RogueOne",
    message: "Let’s crush it!",
    date: "21 May",
    avatar: images.ava9,
  },
];

// Екрани
class SafetyScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.sectionHeader}>Safety</Text>
        <Text style={styles.safetyCode}>G7H36</Text>
        <Text style={styles.safetyText}>
          You'll enter your code each time you enter your password to sign in to
          your Steam account.
        </Text>
        <TouchableOpacity style={styles.safetyButton}>
          <Text>Remove Authenticator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.safetyButton}>
          <Text>My Recovery Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.safetyButton}>
          <Text>Help</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class StoreScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <TopHeader />
        <Text style={styles.sectionHeader}>Store</Text>
        <FlatList
          data={gamesList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.gameCard}>
              <Image
                source={item.image}
                style={styles.gameImage}
                resizeMode="contain"
              />
              <View style={styles.gameDetails}>
                <Text style={styles.gameTitle}>{item.title}</Text>
                <Text style={styles.gamePrice}>
                  {item.price}{" "}
                  <Text style={styles.discount}>{item.discount}</Text>
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

class CommunityScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <TopHeader />
        <Text style={styles.sectionHeader}>Community</Text>
        <FlatList
          data={newsList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.newsCard}>
              <Image
                source={item.image}
                style={styles.newsImage}
                resizeMode="cover"
              />
              <View style={styles.newsDetails}>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsSummary}>{item.summary}</Text>
                <Text style={styles.newsSource}>{item.source}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

class ChatScreen extends Component {
  renderChatItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      {item.avatar ? (
        <Image source={item.avatar} style={styles.chatAvatar} />
      ) : (
        <View style={styles.chatAvatarPlaceholder}>
          <Text style={styles.chatAvatarText}>{item.name[0]}</Text>
        </View>
      )}
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
      <Text style={styles.chatDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.sectionHeader}>Chat</Text>
        <FlatList
          data={chatList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderChatItem}
        />
      </View>
    );
  }
}

class TopHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          source={images.steam}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.appTitle}>Steam Store</Text>
      </View>
    );
  }
}

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={images.ava6} style={styles.profileImage} />
        <Text style={styles.profileName}>Hnidyi Bohdan</Text>
        <Text style={styles.profileGroup}>VTk-24-1</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text>Change Theme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ tabBarStyle: { backgroundColor: "#1b1b1b" } }}
        >
          <Tab.Screen
            name="Store"
            component={StoreScreen}
            options={{
              tabBarIcon: ({ size }) => (
                <Image
                  source={images.shop}
                  style={{ width: size, height: size }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Community"
            component={CommunityScreen}
            options={{
              tabBarIcon: ({ size }) => (
                <Image
                  source={images.profile}
                  style={{ width: size, height: size }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              tabBarIcon: ({ size }) => (
                <Image
                  source={images.chat}
                  style={{ width: size, height: size }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Safety"
            component={SafetyScreen}
            options={{
              tabBarIcon: ({ size }) => (
                <Image
                  source={images.safety}
                  style={{ width: size, height: size }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ size }) => (
                <Image
                  source={images.ava6}
                  style={{ width: size, height: size, borderRadius: size / 2 }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#1b1b1b",
    padding: 15,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#121212",
  },
  logoImage: { width: 50, height: 50 },
  appTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  sectionHeader: {
    color: "white",
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold",
  },

  safetySection: {
    padding: 20,
    backgroundColor: "#2b2b2b",
    borderRadius: 10,
    marginBottom: 20,
  },
  safetyCode: {
    color: "#ff9800",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  safetyText: { color: "white", fontSize: 16, marginBottom: 15 },
  safetyButton: {
    backgroundColor: "#333",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  safetyButtonText: { color: "white", fontSize: 16 },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  profileName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  profileGroup: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  profileButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: "center",
  },
  profileButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },

  gameCard: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#2b2b2b",
    borderRadius: 10,
    marginBottom: 10,
  },
  gameImage: { width: 80, height: 80, borderRadius: 10 },
  gameDetails: { marginLeft: 10, justifyContent: "center" },
  gameTitle: { color: "white", fontSize: 16, fontWeight: "bold" },
  gamePrice: { color: "white", fontSize: 14, fontWeight: "bold" },
  discount: { color: "green", fontSize: 14 },

  newsCard: {
    padding: 10,
    backgroundColor: "#2b2b2b",
    borderRadius: 10,
    marginBottom: 10,
  },
  newsImage: { width: "100%", height: 100, borderRadius: 10 },
  newsDetails: { marginTop: 10 },
  newsTitle: { color: "white", fontSize: 16, fontWeight: "bold" },
  newsSummary: { color: "gray", fontSize: 14 },
  newsSource: { color: "#007bff", fontSize: 12, marginTop: 5 },

  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#2b2b2b",
    borderRadius: 10,
    marginBottom: 10,
  },
  chatAvatar: { width: 40, height: 40, borderRadius: 20 },
  chatDetails: { marginLeft: 10, flex: 1 },
  chatName: { color: "white", fontSize: 14, fontWeight: "bold" },
  chatMessage: { color: "gray", fontSize: 12 },
  chatDate: { color: "gray", fontSize: 12, marginLeft: "auto" },
});

export default App;
