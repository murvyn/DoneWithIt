// import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useImageDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  // const handlePress = () =>{
  //   // Alert.alert("My title", "My message", [
  //   //   { text: "Yes", onPress: () => console.log("yes") },
  //   //   { text: "No", onPress: () => console.log("no") },
  //   // ]);
  //   Alert.prompt("my title", "my message", text=> console.log(text))
  // }
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native
      </Text>
      <TouchableNativeFeedback onPress={handlePress}>
        <View style={{width: 200, height: 70, backgroundColor: "dodgerblue"}}></View>
        <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableNativeFeedback> */}
      {/* <StatusBar style="auto" /> */}
      {/* <Button color="orange" title="Click Me" onPress={handlePress} /> */}

      {/* <View 
       style={{backgroundColor: "dodgerblue", width: '100%', height: useDeviceOrientation() === "landscape" ? "100%" : '30%'}}></View> */}

      {/* <View style={{ backgroundColor: "#fff", flex: 1, flexDirection: "row", justifyContent: "center", alignItems: 'center' }}>
        <View style={{ backgroundColor: "dodgerblue", width: 100, height: 300 }} />
        <View style={{ backgroundColor: "gold", width: 100, height: 200 }} />
        <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
      </View> */}
      <WelcomeScreen />
    </SafeAreaView>
  );
}

const containerStyle = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
