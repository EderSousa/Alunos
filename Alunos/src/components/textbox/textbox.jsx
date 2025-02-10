const { TextInput } = require("react-native");
import { styles } from "./textbox.style";



function TextBox(props){
    return <TextInput 
        style={styles.input}  
        placeholder={props.placeholder}  
        placeholderTextColor={styles.placeholder}
        //value={props.value}
        onChangeText={(texto) => props.onChangeText(texto)}
    
    />
}

export default TextBox;