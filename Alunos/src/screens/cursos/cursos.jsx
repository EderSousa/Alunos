import { Text, View, Image, FlatList } from "react-native";
import { styles } from "./cursos.style.js"
import icons from "../../constants/icons.js"
import Button from "../../components/button/button.jsx"

function Cursos(){

    const curso = ["Contabilidade", "Eletrônica", "Pintura", "Desenho"];

    return <View style={styles.container}>

        <Image style={styles.logo} source={icons.group} />
        
        <Text style={styles.titulo} >Cursos</Text>
        
        <Text style={styles.subtitulo} >Gerencie os cursos de sua escola.</Text>

        <FlatList data={curso} 
            style={styles.list}
            keyExtractor={(curso) => curso}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <Text>{item}</Text>
            }}

            />

        <Button texto="Cadastrar novo curdo" />

    </View>
}
export default Cursos;