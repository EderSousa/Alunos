import { Text, Image } from "react-native";
import { styles } from "./tittulo.style.js";


function Titulo(props){
    return <>
     <Image style={styles.logo} source={props.icone} />
            
            <Text style={styles.titulo} >{props.titulo}</Text>
            
            <Text style={[styles.subtitulo,
                 props.marginExtra && styles.marginExtra]} >
               
                {props.subtitulo}
                
            </Text>
    </>

}

export default Titulo;