import { Text, View, Image, FlatList } from "react-native";
import { styles } from "./cursos.style.js"
import Button from "../../components/button/button.jsx"
import Curso from "../../components/curso/curso.jsx";
import Titulo from "../../components/titulo/titulo.jsx";
import icons from "../../constants/icons.js";
import dbCursos from "../../database/cursos.js"
import { useEffect, useState } from "react";



function Cursos(props){

    const [cursos, setCursos] = useState([]);

    function ClickCurso(){
       // props.navigation.navigate("alunos", {
            
       /// });
    }

    async function ListarCursos(){
       setCursos(await dbCursos.Listar());
    }

    useEffect(() => {
        ListarCursos();
    }, [])

    return <View style={styles.container}>

        
        <Titulo icone={icons.group} titulo="Cursos"
         subtitulo="Gerencie os cursoso de sua escola. " />

        <FlatList data={curso} 
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