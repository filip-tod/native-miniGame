import {View, Text, StyleSheet} from "react-native";

function GameOverScreen({userNumber}) {
    return (
        <View style={styles.container}>
            <Text>Game Over!</Text>
            <Text>User Number was: {userNumber}</Text>
        </View>
    );
}
export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});