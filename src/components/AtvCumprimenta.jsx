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

import { View, Text, Pressable, StyleSheet, TextInput} from 'react-native'
import { useState } from 'react'

// Estilos de "CSS"
const estilo = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: "#303540",
    padding: "10px",
    margin: "10px",
    gap: "10px",
  },
  texto: {
    color: "#eee",
    fontSize: "32px",
  },
  textoBotao: {
    color: "#eee",
    fontSize: "16px",
  },
  botao: {
    borderRadius: "5px",
    backgroundColor: "#505560",
    padding: "10px",
    margin: "10px",
  },
  viewBotoes: {
    display: "flex",
    flexDirection: "row",
    flex: "1 0",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  }
})

export default function AtvCumprimenta() {
 const [texto, setValorAtual] = useState('');

 function novonome() {
    setValorAtual()
  }

  function perderPonto() {
    setPlacar(placar - 1)
  }

  return(
    <View style={estilo.view}>
      <Text style={estilo.texto}>
        "Olá, qual seu nome?"
      </Text>
         <TextInput 
        placeholder="Digite um nome"
        onChangeText={(texto) => setValorAtual(texto)}
      />
       <Pressable style={estilo.botao} onPress={() => console.log("")}>
        </Pressable>

      <View style={estilo.viewBotoes}>
        <Pressable style={estilo.botao} onPress={() => Dobrar()}>
          <Text style={estilo.textoBotao}>dobrar</Text>
        </Pressable>
      </View>
    </View>
  )
}
