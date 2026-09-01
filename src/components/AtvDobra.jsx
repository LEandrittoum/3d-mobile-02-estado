/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/

import { View, Text, Pressable, StyleSheet} from 'react-native'
import { useState } from 'react'


export default function AtvDobra({numero}){
  const [valor, setValor] = useState(numero);


  const duplicarValor = () => {
    setValor(valor * 2);
  };


  return (
    <View style={estilo.container}>


      <Text style={estilo.texto}>Valor agorinha = {valor}</Text>
      <Pressable style={estilo.botao} onPress={duplicarValor}>
        <Text style={estilo.textoBotao}>Dobrar Valor</Text>
      </Pressable>


    </View>
  );
}
    const estilo = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 18,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#781cc4',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
 
  textoBotao: {
    color: '#390f46',
    fontWeight: 'bold',
  },
});



