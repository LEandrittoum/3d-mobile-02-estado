/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <View> com dois <Pressable> lado a lado, e uma <View> abaixo dos botões.
Cada <Pressable> ao ser clicado, deve inserir na <View> abaixo um <Text> e um <TextInput>, 
e substituir o conteúdo anterior dessa <View> de baixo dos botões.
O texto digitado no <TextInput> ativado por um <Pressable> deve ser exibido no <Text> do outro <Pressable>, e vice-versa.
*/

import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'


export default function AtvTelefoneSemFio(){
   

    const [pagina, setPagina] = useState("");
const [texto1, setTexto1] = useState("");
const [texto2, setTexto2] = useState("");


return(
<View>
    <View style={{ flexDirection: "row" }}>
    <Pressable onPress={() => setPagina("1")}>
        <Text>Botão 1</Text>
    </Pressable>

    <Pressable onPress={() => setPagina("2")}>
        <Text>Botão 2</Text>
    </Pressable>
</View>

<View style={{ marginTop: 20 }}>

    {pagina === "1" && (
        <View>
            <Text>{texto2}</Text>

            <TextInput
                value={texto1}
                onChangeText={setTexto1}
                placeholder="insira o texto"
            />
        </View>
    )}

    {pagina === "2" && (
        <View>
            <Text>{texto1}</Text>

            <TextInput
                value={texto2}
                onChangeText={setTexto2}
                placeholder="insira o texto "
            />
        </View>
    )}

</View>
      
</View>

    )
    
    }
