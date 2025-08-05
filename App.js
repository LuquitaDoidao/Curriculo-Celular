import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputComponent, TouchableOpacity,
  View
} from 'react-native';

export default function App() {

  function exibe(){
    Alert.alert("Você enviou uma mensagem!")
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <ImageBackground style={styles.ImagemFundo} source={require('./assets/caminho.png')}>
          <Image style={styles.Perfil} source={require('./assets/susej.jpg')}></Image>
          <Text style={styles.Nome}>Lucas A. Lima</Text>

          <View style={styles.Linha}>
            <Text style={styles.Descricao}>99117-1383   |   lucasamarantelima7@gmail.com</Text>
          </View>
        </ImageBackground>

        <View style={styles.conteudo}>
          <Text style={styles.topico}>Objetivo</Text>
          <Text style={styles.texto}>
            Estou em busca da minha primeira oportunidade formal no mercado de trabalho, disposto a aprender e contribui
            r com dedicação e responsabilidade. Tenho interesse em atuar em qualquer área, com abertura para novos desafios
            e crescimento profissional.
          </Text>

          <Text style={styles.topico}>Formação Acadêmica</Text>
          <Text style={styles.texto}>
            Ensino Médio – SESI (conclusão prevista: 2025) {'\n'}
            Curso Técnico em Desenvolvimento de Sistemas – SENAI (conclusão prevista: 2025)
          </Text>

          <Text style={styles.topico}>Experiência Profissional</Text>
          <Text style={styles.texto}>
            Ajudante de cozinha e caixa – Lanchonete "O Favorito"
          </Text>

          <Text style={styles.topico}>Habilidades e Competências</Text>
          <Text style={styles.texto}>
            Conhecimentos em informática e programação (em desenvolvimento pelo curso técnico){'\n'}
            Boa comunicação e responsabilidade{'\n'}
            Facilidade para trabalho em equipe e atendimento ao público{'\n'}
            Conhecimento em Libras (Língua Brasileira de Sinais)
          </Text>
        </View>

        <View>
          <TextInput placeholder={'Mande uma mensagem!'}></TextInput>
          <Button title={"Clique aqui!"} onPress={exibe}></Button>

          <TouchableOpacity onPress={exibe}>
            <Text>Cique aqui!</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3a3a3a',
  },

  ImagemFundo:{
    width: 'auto',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Perfil:{
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2, // você pode ajustar esse valor
    borderColor: '#f8f8f8',
    marginTop: 30,
  },

  Nome:{
    color: '#f8f8f8',
    fontSize: 20,
    fontStyle: 'normal',
    marginTop: 10,
    fontWeight: 'bold',

    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    justifySelf: 'center',
    flex: 1,
  },

  Linha: {
    flexDirection: 'row',   // Coloca os filhos lado a lado
  },

  Descricao:{
    color: '#f8f8f8',
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: 5,

    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    justifySelf: 'center',
    flex: 1,
  },

  conteudo:{
    marginTop: 30,
    padding: 4,
  },


  topico:{
    color: '#f8f8f8',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    flex: 1,
  },

  texto:{
    color: '#f8f8f8',
    fontSize: 16,
    marginTop: 5,
    flex: 1,
    padding: 4,
  },

});
