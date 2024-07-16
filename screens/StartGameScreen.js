import {TextInput, View, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return(
        <View style={styles.inputContainer}>
            <TextInput/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}
export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 100,
        padding: 16,
        backgroundColor: '#72063c',
        elevation: 4, //Android only concept, like box shadow
        shadowColor: "black", //ios only concept, like box shadow
        shadowOffset:{width: 0, height: 2}, //ios only concept, like box shadow
        shadowOpacity: 0.5, //ios only concept, like box shadow
        shadowRadius: 6, //ios only concept, like box shadow
    }
})