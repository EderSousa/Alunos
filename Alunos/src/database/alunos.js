import AsyncStorage from "@react-native-async-storage/async-storage";


async function Listar(curso){
    try {
        const storage = await AsyncStorage.getItem("app-alunos-cursos-" + curso);

        return storage ? JSON.parse(storage) : []

    } catch (error) {
        throw error;
    }
}

async function Inserir(curso, aluno){

    if (curso.length == 0){
        throw "Informe o nome do curso";
        return;
    }
    
    if (aluno.length == 0){
        throw "Informe o nome do aluno";
        return;
    }

    try {
        const alunos = await Listar(curso);

        const resultado = alunos.filter(a => a == aluno);
        
        // consiste duplicidades

        if (resultado.length > 0){
            throw "Esse aluno já está matrículado nesse curso"
            return
        } else {
            alunos.push(aluno);            
        }
        

        await AsyncStorage.setItem("app-alunos-cursos-" + curso, JSON.stringify(alunos));
        
    } catch (error) {
        throw error;
    }
}

async function Excluir(curso, aluno){

    if (curso.length == 0){
        throw "Informe o nome do curso";
        return;
    }
    if (aluno.length == 0){
        throw "Informe o nome do aluno";
        return;
    }

    try {
        const alunos = await Listar(curso);
        const novaLista = alunos.filter(item => item != aluno);

        await AsyncStorage.setItem("app-alunos-cursos-" + curso, JSON.stringify(novaLista));
        
    } catch (error) {
        throw error;
    }
}

export default {Listar, Inserir, Excluir};