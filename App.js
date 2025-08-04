import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View>
          <ImageBackground style={styles.ImagemFundo} source={require('./assets/estrada.webp')}>
            <Image style={styles.Perfil} source={require('./assets/susej.jpg')}></Image>
            <Text style={styles.Nome}>Lucas A. Lima</Text>
          </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroun: 'linear-gradiant',
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },

  ImagemFundo:{
    width: 'auto',
    height: 200,

  },

  Perfil:{
    width: 30,
    height: 30,
    borderRadius: 50,
    borderColor: '#f8f8f8'
  },

  Nome:{
    color: '#f8f8f8',
    fontSize: 20,
    height: 300,
    width: '100%',
    fontStyle: 'italic',

    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    justifySelf: 'center',
    flex: 1,
  },
});
