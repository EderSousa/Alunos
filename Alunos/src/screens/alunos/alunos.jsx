import { Text, View,  FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "./alunos.style.js"
import Titulo from "../../components/titulo/titulo.jsx";
import icons from "../../constants/icons.js";
import Button from "../../components/button/button.jsx"
import TextBox from "../../components/textbox/textbox.jsx"
import Aluno from "../../components/aluno/aluno.jsx";



function Alunos(){

    const alunos = ["Eder", "Bruno", "Matheus", "Maria"];

    function ClickCurso(curso){
        console.log("cliclou no curso " + curso);
    }

    function onChangeText(texto){
        console.log(texto)
    }

    function DeleteAluno(aluno){
        console.log(aluno);
    }

    return <>    
    
    
        <View style={styles.container}>

        
        <Titulo icone={icons.group} titulo="Contabilidade"
         subtitulo="Gerencie os alunos desse curso. " />

         <View  style={styles.form}>
           
            <TextBox placeholder="Nome do aluno..." 
                     onChangeText={onChangeText}
                     //value={} 
                     />

            <TouchableOpacity>
                <Image source={icons.add} style={styles.add} />
            </TouchableOpacity>

         </View >

        <FlatList data={alunos} 
            style={styles.list}
            keyExtractor={(curso) => curso}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <Aluno nome={item} onDelete={DeleteAluno} />
            }}

            />

        <Button texto="Remover curso" estilo="red" />

            
        </View>

    


    </>

}
export default Alunos;