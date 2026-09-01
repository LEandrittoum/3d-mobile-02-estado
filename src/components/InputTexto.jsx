// Elementos necessários para o componente
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
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
  },
  input: {
    borderRadius: "5px",
    backgroundColor: "#bbb",
    padding: "4px",
  }
})

export default function InputTexto() {
  // Criação das variáveis que armazenam o texto digitado, e o texto salvo
  const [textoInserido, setTextoInserido] = useState("")
  const [texto, setTexto] = useState("Quem é este Pokemon?")

  // Parte visual do componente
  return(
    <View style={estilo.view}>
      <Text style={estilo.texto}>
        {texto}
      </Text>
      <TextInput
        style={estilo.input}
        value={textoInserido}
        onChangeText={setTextoInserido}
        placeholder="Digite aqui o novo texto"
      />
      <Pressable style={estilo.botao} onPress={() => setTexto(textoInserido)}>
        <Text style={estilo.textoBotao}>Salvar texto</Text>
      </Pressable>
    </View>
  )
}