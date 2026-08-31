/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/

import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'


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
export default function AtvDobra() {
  const [numero, setNumero] = useState(1)
  function Dobrar() {
    setNumero(numero * 2)
  }
  return(
    <View style={estilo.view}>
      <Text style={estilo.texto}>
        {numero}
      </Text>
      <View style={estilo.viewBotoes}>
        <Pressable style={estilo.botao} onPress={() => Dobrar()}>
          <Text style={estilo.textoBotao}>dobrar</Text>
        </Pressable>
      </View>
    </View>
  )
}
