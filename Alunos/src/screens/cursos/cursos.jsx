import { Text, View, Image, FlatList } from "react-native";
import { styles } from "./cursos.style.js"
import Button from "../../components/button/button.jsx"
import Curso from "../../components/curso/curso.jsx";
import Titulo from "../../components/titulo/titulo.jsx";
import icons from "../../constants/icons.js";


function Cursos(){

    const curso = ["Contabilidade", "Eletrônica", "Pintura", "Desenho"];

    function ClickCurso(curso){
        console.log("cliclou no curso " + curso);
    }

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

        <Button texto="Cadastrar novo curdo" />

    </View>
}
export default Cursos;