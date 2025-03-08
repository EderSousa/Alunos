import { Text, View, Image, FlatList } from "react-native";
import { styles } from "./cursos.style.js"
import Button from "../../components/button/button.jsx"
import Curso from "../../components/curso/curso.jsx";
import Titulo from "../../components/titulo/titulo.jsx";
import icons from "../../constants/icons.js";
import dbCursos from "../../database/cursos.js"
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";



function Cursos(props){

    const [cursos, setCursos] = useState([]);

    function ClickCurso(curso){
       props.navigation.navigate("alunos", {
            nome: curso
        });
    }

    async function ListarCursos(){
       setCursos(await dbCursos.Listar());
    }

    useFocusEffect(useCallback(() => {
        ListarCursos();
    }, []));

    return <View style={styles.container}>

        
        <Titulo icone={icons.group} titulo="Cursos"
         subtitulo="Gerencie os cursoso de sua escola. " />

        <FlatList data={cursos} 
            style={styles.list}
            keyExtractor={(curso) => curso}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <Curso nome={item} onPress={ClickCurso} />
            }}

            />

        <Button texto="Cadastrar novo curdo" onPress={() => props.navigation.navigate("novo-curso")} />

    </View>
}
export default Cursos;