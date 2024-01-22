import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Platform } from 'react-native';
import { Image } from 'expo-image';
import { Asset } from 'expo-asset';

const nativeWidth = Dimensions.get("window").width
const nativeImageWidth = 0.8 * nativeWidth
const nativeImageHeight = Math.floor(nativeImageWidth / 1.7)
const firstpageImage = Asset.fromModule(require("./assets/images/firstpage.png")).uri

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Platform: {Platform.OS}</Text>
      <Text>Image should be below this line</Text>
      <Image
        style={styles.image}
        source={firstpageImage}
        contentFit="contain"
        transition={1000}
        />
      <Text>Image should be above this line</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    ...Platform.select({
      web: {
        width: "100%",
        height: 400,
        marginVertical: 10,
      },
      default: {
        width: nativeImageWidth,
        height: nativeImageHeight,
        marginVertical: 10,
        background: 'red'
      }
    })
  },
});
