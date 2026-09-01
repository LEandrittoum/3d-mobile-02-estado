/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <View> com dois <Pressable> na horizontal, e abaixo destes dois botões mais uma <View>. 
Ao clicar no primeiro <Pressable>, a <View> de baixo deverá exibir um <Text> com o conteúdo "Página em construção". 
Ao clicar no segundo <Pressable>, o conteúdo dessa <View> deve ser substituído por três <View> dispostas lado a lado, 
onde cada uma destas <Views> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/

import { View, Text, Pressable, StyleSheet} from 'react-native';
import { useState } from 'react';


export default function AtvMudaConteudo(){
  const [conteudinho, setConteudinho] = useState(0);


  return(
<View style={estilo.containerPrincipal}>
    <View style={estilo.container}>
    <Pressable style={({ pressed }) => [estilo.botao, pressed && estilo.botaoAtivo]}
    onPress={() => setConteudinho(1) }>
    <Text style={estilo.textoBotao}>coisinha 1</Text>
    </Pressable>


    <Pressable style={({ pressed }) => [estilo.botao, pressed && estilo.botaoAtivo]}
    onPress={() => setConteudinho(2) }>
    <Text style={estilo.textoBotao}>coisinha 2</Text>
    </Pressable>
   
    </View>


    <View style={estilo.containerDois}>
      {conteudinho === 1 && (
        <Text style={estilo.texto}>Página em construção</Text>
      )}


      {conteudinho === 2 && (
        <View style={estilo.corzinhas}>


       <View style={[estilo.corzinha, { backgroundColor: 'purple' }]}></View>
       <View style={[estilo.corzinha, { backgroundColor: 'teal' }]}></View>
       <View style={[estilo.corzinha, { backgroundColor: 'orange' }]}></View>
       
        </View>
      )}
    </View>
</View>
  );
}


const estilo = StyleSheet.create({


    containerPrincipal: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  texto: {
    fontSize: 18,
    marginBottom: 15,
    color: '#3b0d34',
  },

  botao: {
    backgroundColor: '#ca16ca',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
 
  textoBotao: {
    color: '#680c58',
    fontWeight: 'bold',
  },

  containerDois: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  corzinhas: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

   corzinha: {
    width: 200,
    height: 200,
    marginHorizontal: 5,
  },
});
