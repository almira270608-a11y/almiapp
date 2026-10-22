import React, { useState } from 'react';

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [phone, setPhone] = useState('');
const [password, setPassword] = useState('');
  const handleBack = () => {
    console.log('Артқа қайту батырмасы басылды');
  };
  const handlepasswordPress = () => {
    console.log('Забыли пароль? батырмасы басылды');
  };
  const handleLoginPress = () => {
    console.log('Войти батырмасы басылды');
  };
    const handlelTextPress = () => {
    console.log('У вас нет аккаунта? батырмасы басылды');
  };
  const handlemTextPress = () => {
    console.log('Зарегистрироваться батырмасы басылды');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        {/* Кнопка "Назад" в виде стрелочки */}
        <Pressable
          style={styles.backButton}
          onPress={handleBack}
        >
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>
          Привет, с возвращением!
        </Text>

        <Text style={styles.subtitle}>
          Войдите в свой аккаунт.
        </Text>

        <View style={styles.inputContainer}>
          {/* Иконка телефона в виде текстового символа 📞 */}
          <Text style={styles.inputIconText}>📞</Text>

          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Номер телефона"
            placeholderTextColor="#AAA9B2"
            keyboardType="phone-pad"
          />
        </View>
                <View style={styles.inputContainer}>/
          <Text style={styles.inputIconText}>🔒</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Номер телефона"
            placeholderTextColor="#AAA9B2"
            keyboardType="phone-pad"
          />
        </View>
        <Pressable
        style={styles.passwordContainer}
        onPress={handlepasswordPress}
        >
          <Text style={styles.passwordText}>Забыли пароль?</Text>
        </Pressable>
        <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLoginPress}
        >
          <Text style={styles.loginButtonText}>Войти</Text>
        </TouchableOpacity>
        <Pressable
          style={styles.nText}
        onPress={handlelTextPress}
        >
          <Text style={styles.nText}>У вас нет аккаунта?</Text>
        </Pressable>
        <Pressable
          style={styles.mText}
          onPress={handlemTextPress}
        >
          <Text style={styles.mText}>Зарегистрироваться</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 24,
  },

  /* Стили для текстовой стрелочки назад */
  backButtonText: {
    fontSize: 32,
    color: '#1B1923',
    fontWeight: '300',
  },

  title: {
    color: '#1B1923',
    fontSize: 27,
    fontWeight: '700',
    lineHeight: 34,
  },

  subtitle: {
    color: '#AAA9B2',
    fontSize: 18,
    marginTop: 3,
    marginBottom: 29,
  },

  inputContainer: {
    width: '100%',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginTop: 30,
  },

  /* Стили для текстовой иконки телефона */
  inputIconText: {
    fontSize: 20,
    marginRight: 14,
  },

  input: {
    flex: 1,
    height: '100%',
    color: '#1B1923',
    fontSize: 18,
  },
  passwordContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  passwordText: {
    color: '#A811DA',
    fontSize: 16,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#A811DA',
    borderRadius: 18,
    paddingVertical: 16,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  nText: {
    color: '#A2A0A8',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },
  mText: {
    color: '#A811DA',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});