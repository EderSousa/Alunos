import {styles} from "./novo-curso.style.js";
import TextBox from "../../components/textbox/textbox.jsx";
import Titulo from "../../components/titulo/titulo.jsx";
import { Alert, View } from "react-native";
import icons from "../../constants/icons.js";
import Button from "../../components/button/button.jsx";
import dbCursos from "../../database/cursos.js"
import { useState } from "react";



function NovoCurso(props){

    const [curso, setCurso] = useState("");

    function onChange(texto){
        setCurso(texto);
    }

    async function CriarCurso(){
        try {
            await dbCursos.Inserir(curso);
            props.navigation.navigate("cursos");
        } catch (error) {
            Alert.alert(error);
        }
    }

    return <View style={styles.container}>
    
    <Titulo icone={icons.group} titulo="Novo Curso" 
            subtitulo="VAmos criar o seu novo curso." 
            marginExtra
    />
    
    <View style={styles.form}>
        <TextBox  placeholder="Nome do curso..."
        value={curso}
        onChangeText={onChange}
        />
    </View>

    <Button texto="Criar" onPress={CriarCurso} />

    </View>
}

export default NovoCurso;