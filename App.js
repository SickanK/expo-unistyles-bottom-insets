import { Text, View } from "react-native";
import {
    UnistylesRuntime,
    createStyleSheet,
    useStyles,
} from "react-native-unistyles";
import * as NavigationBar from "expo-navigation-bar";

// Set NavigationBar position to absolute
NavigationBar.setPositionAsync("absolute");

console.log(UnistylesRuntime.insets.bottom); // => 0

export default function App() {
    const { styles } = useStyles(stylesheet);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Open up App.js to start working on your app!
            </Text>
        </View>
    );
}

const stylesheet = createStyleSheet((_, runtime) => ({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    // Should position the text above the bottom navigation bar, but it does not
    text: {
        position: "absolute",
        left: 0,
        bottom: runtime.insets.bottom,
    },
}));
