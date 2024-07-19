import {StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

function Title({title='default title'}){
    return(
        <Text style={styles.title}>{title}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        color: 'white',
        textAlign:'center',
        borderWidth: 2,
        borderColor:  'white',
        padding:12,
        borderRadius: 5,
    },

})