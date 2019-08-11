import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'

import logo from '../assets/logo.png'
import api from '../services/api'

export default function Login ({ navigation }) {
  // Define o primeiro estado da aplicação
  const [user, setUser] = useState('')

  // Utiliza useEffect apenas uma vez no inicio da aplicação
  // para verificar se existe um usuario cadastrado dentro do AsyncStorage
  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        // Se existir um usuario ele redireciona para a Main.js
        navigation.navigate('Main', { user })
      }
    })
  }, [])

  // Função responsavel por receber o click no botão inicial
  // utilizado para fazer o login
  async function handleLogin () {
    // Faz a requisição para a api com método post em /devs passando o username
    const response = await api.post('/devs', { username: user })

    //armazena o _id que vem no response da requisição à api
    const { _id } = response.data

    // Armazena no AsyncStorage o usuário buscado na api
    await AsyncStorage.setItem('user', _id)

    // Faz a primeira navegação para a Main.js caso não existe um
    // usuário cadasrtado
    navigation.navigate('Main', { _id })
  }
  return (
    <KeyboardAvoidingView
      behavior='padding'
      enabled={Platform.OS === 'ios'}
      style={styles.container}>
      <View>
        <Image source={logo} />
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}
          on
          value={user}
          // react native utiliza onChangeText() passando diretamente a funçao
          // setUser que pertence ao useState()
          onChangeText={setUser}
          placeholder='Digite seu usuário do Github'
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#DF4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  }
})
