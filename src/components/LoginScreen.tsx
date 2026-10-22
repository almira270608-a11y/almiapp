import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }: any) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Функция входа в аккаунт
  const handleLogin = () => {
    if (!phone.trim() || !password.trim()) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните все поля!');
      return;
    }

    // Переход на главный экран или выбор города после успешного входа
    navigation.navigate('SelectCity'); // Можно заменить на 'Booking' или любой другой ваш экран
  };

  return (
    <SafeAreaView style={styles.container}>
      {navigation.canGoBack() && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>
      )}

      <View style={[styles.content, !navigation.canGoBack() && { paddingTop: 40 }]}>
        
        <Text style={styles.title}>Привет, с возвращением!</Text>
        <Text style={styles.subtitle}>Войдите в свой аккаунт.</Text>

        {/* Телефон нөмірі */}
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={20} color="#9CA3AF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Номер телефона"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Пароль */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="#A855F7"
            />
          </TouchableOpacity>
        </View>

        {/* Забыли пароль? */}
        <TouchableOpacity
          style={styles.forgotPasswordContainer}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.forgotPassword}>Забыли пароль?</Text>
        </TouchableOpacity>

        {/* Войти */}
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.8}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Войти</Text>
        </TouchableOpacity>

        {/* Зарегистрироваться */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>У вас нет аккаунта? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.linkText}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignSelf: 'flex-start',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 28,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 52,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#1F2937',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPassword: {
    color: '#A855F7',
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#A855F7',
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  linkText: {
    color: '#A855F7',
    fontSize: 14,
    fontWeight: '600',
  },
});