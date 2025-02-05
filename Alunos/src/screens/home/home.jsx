import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./home.style";
import icons from "../../constants/icons.js"
import Button from "../../components/button/button.jsx";


function Home(){

    function Teste(){
        console.log("Clicou...")
    }

    return <View style={styles.container}>

        <Image style={styles.logo} source={icons.logo} />

       <Text style={styles.titulo}>Alunos</Text> 
       
       <Text style={styles.subtitulo}>
        
        Faça a gestão dos alunos de sua escola com o app Alunos

        </Text>
        
        <Button texto="Acessar" estilo="blue" onPress={Teste} />
    </View>
    
    
}

export default Home;