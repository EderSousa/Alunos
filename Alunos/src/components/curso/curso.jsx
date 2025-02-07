import {  Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./curso.style.js";
import icons from "../../constants/icons.js";


function Curso(props){
    return <TouchableOpacity onPress={() => props.onPress(props.nome)} 
    style={styles.curso}>
    
    <Image style={styles.icone} source={icons.group} />
    
    <Text style={styles.titulo}> {props.nome} </Text>

</TouchableOpacity>

}

export default Curso;