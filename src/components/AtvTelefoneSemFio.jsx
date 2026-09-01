/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <View> com dois <Pressable> lado a lado, e uma <View> abaixo dos botões.
Cada <Pressable> ao ser clicado, deve inserir na <View> abaixo um <Text> e um <TextInput>, 
e substituir o conteúdo anterior dessa <View> de baixo dos botões.
O texto digitado no <TextInput> ativado por um <Pressable> deve ser exibido no <Text> do outro <Pressable>, e vice-versa.
*/

import { View, Text, Pressable, TextInput, StyleSheet} from 'react-native';
import { useState } from 'react';


export default function AtvTelefoneSemFio(){
  const [telefone, setTelefone] = useState(null);
  const [textoTelefone1, setTextoTelefone1] = useState('');
  const [textoTelefone2, setTextoTelefone2] = useState('');


  return(
   <View style={estilo.container}>
    <View style={estilo.row}>
        <Pressable
          style={[estilo.botao, telefone === 1]}
          onPress={() => setTelefone(1)}>
       
        <Text style={estilo.textoBotao}>{ textoTelefone2 || "Coisinha 1"}</Text>
        </Pressable>


        <Pressable
          style={[estilo.botao, telefone === 2]}
          onPress={() => setTelefone(2)}>
       
        <Text style={estilo.textoBotao}>{ textoTelefone1 || "Coisinha 2"}</Text>
        </Pressable>
   </View>


   <View style={estilo.parteDeBaixo}>
        {telefone === 1 && (
          <View style={estilo.preencher}>
            <Text style={estilo.label}> Escrevendo (Muda o Coisinha 2):</Text>
            <TextInput
              style={estilo.input}
              value={textoTelefone1}
              onChangeText={setTextoTelefone1}
              placeholder="Escreva pliss"
            />
          </View>
        )}


        {telefone === 2 && (
          <View style={estilo.preencher}>
            <Text style={estilo.label}> Escrevendo (Muda o Coisinha 1):</Text>
            <TextInput
              style={estilo.input}
              value={textoTelefone2}
              onChangeText={setTextoTelefone2}
              placeholder="Escreva pliss"
            />
          </View>
         )}
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({


container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  botao: {
    flex: 1,
    backgroundColor: '#e685ba',
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: '#79294a',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  parteDeBaixo: {
    minHeight: 120,
    borderWidth: 1,
    borderColor: '#57273d',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#ffcfe3',
    justifyContent: 'center',
  },

  preencher: {
    width: '100%',
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '600',
  },

  input: {
    borderWidth: 1,
    borderColor: '#7c3757',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#ff8fbe',
    fontSize: 16,
  },
});


