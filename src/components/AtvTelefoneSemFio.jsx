/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <View> com dois <Pressable> lado a lado, e uma <View> abaixo dos botões.
Cada <Pressable> ao ser clicado, deve inserir na <View> abaixo um <Text> e um <TextInput>, 
e substituir o conteúdo anterior dessa <View> de baixo dos botões.
O texto digitado no <TextInput> ativado por um <Pressable> deve ser exibido no <Text> do outro <Pressable>, e vice-versa.
*/
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles/main";
export default function AtvTelefoneSemFio() {
  const [ativo, setAtivo] = useState("A");
  const [textoA, setTextoA] = useState("");
  const [textoB, setTextoB] = useState("");
  return (
    <View style={styles.container}>
      <Button
        title="Botão A"
        onPress={() => setAtivo("A")}
      />
      <Button
        title="Botão B"
        onPress={() => setAtivo("B")}
      />
      {ativo === "A" ? (
        <View>
          <Text>{textoB}</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite..."
            value={textoA}
            onChangeText={setTextoA}
          />
        </View>
      ) : (
        <View>
          <Text>{textoA}</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite..."
            value={textoB}
            onChangeText={setTextoB}
          />
        </View>
      )}
    </View>
  );
}
