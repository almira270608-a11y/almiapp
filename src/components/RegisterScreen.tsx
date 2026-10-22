import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={24} color="#1F2937" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Регистрация</Text>
        <Text style={styles.subtitle}>
          Создайте учетную запись,{'\n'}чтобы продолжить!
        </Text>

       
        <View style={styles.inputContainer}>
          <Ionicons
            name="person"
            size={20}
            color={name ? '#A855F7' : '#9CA3AF'}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Ваше имя"
            placeholderTextColor="#9CA3AF"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Номер телефона */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="call"
            size={20}
            color={phone ? '#A855F7' : '#9CA3AF'}
            style={styles.icon}
          />
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
          <Ionicons
            name="lock-closed"
            size={20}
            color={password ? '#A855F7' : '#9CA3AF'}
            style={styles.icon}
          />
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
              color={password ? '#A855F7' : '#9CA3AF'}
            />
          </TouchableOpacity>
        </View>

        {/* Чекбокс */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setIsChecked(!isChecked)}
          activeOpacity={0.8}
        >
          <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
            {isChecked && <Ionicons name="checkmark" size={14} color="#FFFFFF" />}
          </View>
          <Text style={styles.checkboxText}>
            Создавая учетную запись, вы соглашаетесь с нашими{' '}
            <Text style={styles.linkTextInline}>Условиями использования.</Text>
          </Text>
        </TouchableOpacity>

        {/* Зарегистрироваться батырмасы */}
        <TouchableOpacity
          style={[styles.button, !isChecked && styles.buttonDisabled]}
          disabled={!isChecked}
          onPress={() => navigation.navigate('SelectCity')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Зарегистрироваться</Text>
        </TouchableOpacity>

        {/* Войти */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Уже есть аккаунт? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Войти</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  backButton: { paddingHorizontal: 20, paddingVertical: 12, alignSelf: 'flex-start' },
  content: { paddingHorizontal: 24, paddingTop: 10 },
  title: { fontSize: 24, fontWeight: '700', color: '#1F2937', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#9CA3AF', marginBottom: 28, lineHeight: 20 },
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
  icon: { marginRight: 12 },
  input: { flex: 1, fontSize: 15, color: '#1F2937' },
  checkboxContainer: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 24, marginTop: 4 },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 2,
  },
  checkboxChecked: { backgroundColor: '#A855F7', borderColor: '#A855F7' },
  checkboxText: { flex: 1, fontSize: 12, color: '#6B7280', lineHeight: 18 },
  linkTextInline: { color: '#A855F7', fontWeight: '500' },
  button: { backgroundColor: '#A855F7', height: 52, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  buttonDisabled: { opacity: 0.6 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 24, marginBottom: 20 },
  footerText: { color: '#9CA3AF', fontSize: 14 },
  linkText: { color: '#A855F7', fontSize: 14, fontWeight: '600' },
});