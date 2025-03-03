import AsyncStorage from "@react-native-async-storage/async-storage";


async function Listar(){
    try {
        const storage = await AsyncStorage.getItem("app-alunos-cursos");

        return storage ? JSON.parse(storage) : []

    } catch (error) {
        throw error;
    }
}

async function Inserir(curso){

    if (curso.length == 0){
        throw "Informe o nome do curso";
        return;
    }

    try {
        const cursos = await Listar();
        cursos.push(curso);

        await AsyncStorage.setItem("app-alunos-cursos", JSON.stringify(cursos));
        
    } catch (error) {
        throw error;
    }
}

async function Excluir(curso){

    if (curso.length == 0){
        throw "Informe o nome do curso";
        return;
    }

    try {
        const cursos = await Listar();
        const novaLista = cursos.filter(item => item != curso);

        await AsyncStorage.setItem("app-alunos-cursos", JSON.stringify(novaLista));
        await AsyncStorage.removeItem("app-alunos-cursos-" + curso);
        
    } catch (error) {
        throw error;
    }
}

export default {Listar, Inserir, Excluir};