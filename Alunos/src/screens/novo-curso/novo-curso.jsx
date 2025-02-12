import {styles} from "./novo-curso.style.js";
import TextBox from "../../components/textbox/textbox.jsx";
import Titulo from "../../components/titulo/titulo.jsx";
import { View } from "react-native";
import icons from "../../constants/icons.js";
import Button from "../../components/button/button.jsx";




function NovoCurso(){


    function onChange(){

    }

    function CriarCurso(){

    }

    return <View style={styles.container}>
    
    <Titulo icone={icons.group} titulo="Novo Curso" 
            subtitulo="VAmos criar o seu novo curso." 
            marginExtra
    />
    
    <View style={styles.form}>
        <TextBox  placeholder="Nome do curso..."
        value="teste"
        onChangeText={onChange}
        />
    </View>

    <Button texto="Criar" onPress={CriarCurso} />

    </View>
}

export default NovoCurso;