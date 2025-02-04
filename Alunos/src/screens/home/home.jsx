import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./home.style";
import icons from "../../constants/icons.js"



function Home(){
    return <View style={styles.container}>

        <Image style={styles.logo} source={icons.logo} />

       <Text style={styles.titulo}>Alunos</Text> 
       
       <Text style={styles.subtitulo}>
        
        Faça a gestão dos alunos de sua escola com o app Alunos

        </Text>
        
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Acessar</Text>
        </TouchableOpacity>

    </View>
    
    
}

export default Home;