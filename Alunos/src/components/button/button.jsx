import {  Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

function Button(props){
    return <TouchableOpacity 
    onPress={props.onPress}
    style={[styles.btn, props.estilo == "red" ? styles.btnRed : styles.btnBlue]}>
    <Text style={styles.btnText}>
        {props.texto}
    </Text>
</TouchableOpacity>

}

export default Button;