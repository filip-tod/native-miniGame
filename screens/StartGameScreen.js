import {TextInput, View, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return(
        <View style={styles.inputContainer}>
            <TextInput
                keyboardType={'number-pad'}
                maxLength={2}
                style={styles.numberInput}
                autoCapitalize={'none'}
                autoCorrect={false}/>
            <View style={styles.buttonsContainers}>
                <View style={styles.buttonInnerContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonInnerContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}
export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
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
    },
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical:8,
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonsContainers:{
        flexDirection:"row"
    },
    buttonContainer:{
        flex: 1
    }
})