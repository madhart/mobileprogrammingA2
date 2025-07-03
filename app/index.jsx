import { Text, View, Image, Button, Pressable } from "react-native";
import { useRouter } from 'expo-router';

export default function Index() {
const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text>Edit Madison's recipe blog</Text>
        <Button onPress={() => router.navigate('/recipes')}title="Recipe display"></Button>
        </View>
  );
}