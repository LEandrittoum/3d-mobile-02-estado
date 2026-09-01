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

import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'


export default function AtvCumprimenta(){
 const [textoInserido, setTextoInserido] = useState('')
 const [texto, setTexto] = useState('')


  return(
    <View style={estilo.view}>
      <Text style={estilo.texto}>"Olá, qual seu nome?"</Text>
      <TextInput
        style={estilo.input}
        value={textoInserido}
        onChangeText={setTextoInserido}
        placeholder="Digite aqui o seu nome"/>


    <Pressable style={estilo.botao} onPress={() => setTexto(textoInserido)}>
        <Text style={estilo.textoBotao}>Salvar nome</Text>
      </Pressable>




      {texto !== "" && (
      <Text style={estilo.resposta}>É um prazer lhe conhecer, {texto}</Text>
    )}
    </View>
  );
}


    const estilo = StyleSheet.create({


  view: {
    padding: 20,
    width: '100%',
  },
  titulo: {
    fontSize: 18,
    marginBottom: 10,
  },
  linhaInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e7488a',
    padding: 10,
    marginRight: 10,
    borderRadius: 4,
  },
  botao: {
    backgroundColor: '#d65989',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#691a38',
  },
  resposta: {
    fontSize: 16,
    marginTop: 10,
  },
});




