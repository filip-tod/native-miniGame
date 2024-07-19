import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                "Number must be a number between 1 and 99!",
                [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
            );
            return;
        }
        onPickNumber(chosenNumber);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                keyboardType={'number-pad'}
                maxLength={2}
                style={styles.numberInput}
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainers}>
                <View style={styles.buttonInnerContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonInnerContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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
        backgroundColor: Colors.primary800,
        elevation: 4, //Android only concept, like box shadow
        shadowColor: "black", //ios only concept, like box shadow
        shadowOffset: { width: 0, height: 2 }, //ios only concept, like box shadow
        shadowOpacity: 0.5, //ios only concept, like box shadow
        shadowRadius: 6, //ios only concept, like box shadow
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color:  Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonsContainers: {
        flexDirection: "row"
    },
    buttonInnerContainer: {
        flex: 1
    }
});
