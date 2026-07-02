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
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles/main";
export default function AtvCumprimenta() {
  const [nome, setNome] = useState("");
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  function salvar() {
    setMostrarMensagem(true);
  }
  return (
    <View style={styles.container}>
      <Text>Digite seu nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Seu nome"
      />
      <Button title="Salvar" onPress={salvar} />
      {mostrarMensagem && (
        <Text style={styles.mensagem}>
          É um prazer lhe conhecer, {nome}
        </Text>
      )}
    </View>
  );
}
