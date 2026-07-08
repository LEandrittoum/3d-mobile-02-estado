/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/
import { useState } from 'react'
import {View, Text, Pressable} from "react-native/types_generated/index";

export default function AtvDobra(numero) {
  const [numer, setNumero] = useState(1)
  const dobrar = () => {
    setNumero(numer * 2)
  }
}

return (
  <View>
      <Text>(numer)</Text>
      <Pressable onPress={dobrar}>
        <Text>Dobra aí</Text>
      </Pressable>
  </View>
)