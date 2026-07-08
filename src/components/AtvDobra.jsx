/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/

import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function AtvDobra({ numero }) {
  const [valor, setValor] = useState(numero);

  return (
    <View>
      <Text>{valor}</Text>

      <Pressable onPress={() => setValor(valor * 2)}>
        <Text>Dobrar</Text>
      </Pressable>
    </View>
  );
}


import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <View style={{ padding: 20 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Pressable
          onPress={() => setAtivo(1)}
          style={{ borderWidth: "1px", padding: "15px" }}
        >
          <Text>{texto2 || 'Botão 1'}</Text>
        </Pressable>

        <Pressable
          onPress={() => setAtivo(2)}
          style={{ borderWidth: "1px", padding: "15px" }}
        >
          <Text>{texto1 || 'Botão 2'}</Text>
        </Pressable>
      </View>
      <View style={{ marginTop: "30px" }}>
        {ativo === 1 && (
          <>
            <Text>Fale algo para o botão 2:</Text>
            <TextInput
              value={texto1}
              onChangeText={setTexto1}
              style={{
                borderWidth: "1px",
                padding: "10px",
                marginTop: "10px",
              }}
            />
          </>
        )}

        {ativo === 2 && (
          <>
            <Text>Fale algo para o botão 1:</Text>
            <TextInput
              value={texto2}
              onChangeText={setTexto2}
              style={{
                borderWidth: "1px",
                padding: "10px",
                marginTop: "10px",
              }}
            />
          </>
        )}
      </View>
    </View>
  );
}
