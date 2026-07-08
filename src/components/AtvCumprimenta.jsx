/*
[ATIVIDADE CUMPRIMENTA]

Crie e exporte por padrão um componente chamado "AtvCumprimenta". Este componente não recebe nenhum argumento. 
Ele deve retornar uma <View>, onde dentro dela haverá um <Text> com o conteúdo "Olá, qual seu nome?". 
Abaixo deste <Text> deve haver um <TextInput> onde o usuário poderá digitar seu nome. 
Ao lado deste <TextInput> deve haver um <Pressable>, que ao ser apertado vai fazer um <Text> ser exibido abaixo 
com o texto "É um prazer lhe conhecer, [NOME]", onde [NOME] deve ser igual ao texto que o usuário digitou no <TextInput>.

Ordem visual dos elementos:

_________________________________
|       Olá, qual seu nome?     |
|                               |
|  ________________  ________   |
| | Nome aqui     | | Salvar |  |
| ----------------  ---------   |
|                               |
| É um prazer lhe conhecer...   |
|_______________________________|
*/
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from 'react'

export default function AtvCumprimenta() {
const [nome, setNome] = useState("")
const [exibido, setExibido] = useState("")
  const clique = () => {
    setExibido(nome)
  }
    return(
<View >
        <Text>Olá, qual é seu nome?</Text>
            <View>
                <TextInput
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Nome aqui"/>
                    <Pressable onPress={clique}>
                      <Text>SALVAR</Text>
                    </Pressable>
            </View>
            <Text>É um prazer lhe conhecer, {exibido}</Text>
</View>
    )
}