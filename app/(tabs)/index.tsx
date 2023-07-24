import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { MotiView } from "moti";

export default function TabOneScreen() {
  return (
    <MotiView
      transition={{
        loop: true,
        duration: 2000,
      }}
      from={{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
      }}
      style={styles.container}
    >
      <Text>khalil benmezaine</Text>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
