import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ForgotPasswordScreen({ navigation }: any) {
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Артқа қайту батырмасы */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={24} color="#1F2937" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Восстановление пароля</Text>
        <Text style={styles.subtitle}>Введите свой номер телефона, чтобы восстановить пароль</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={20} color="#9CA3AF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="+7 (700) 555 77 55"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('OTPScreen')}
        >
          <Text style={styles.buttonText}>Продолжить</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF' 
  },
  backButton: { 
    paddingHorizontal: 20, 
    paddingVertical: 12, 
    alignSelf: 'flex-start' 
  },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 16 },
  title: { fontSize: 22, fontWeight: '700', color: '#1F2937', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#6B7280', marginBottom: 32 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  icon: { marginRight: 12 },
  input: { flex: 1, fontSize: 15, color: '#1F2937' },
  button: {
    backgroundColor: '#9333EA',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
});