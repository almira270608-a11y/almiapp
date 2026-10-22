import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ResetPasswordScreen({ navigation }: any) {
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

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
        <Text style={styles.title}>Сбросить пароль</Text>
        <Text style={styles.subtitle}>
          Не менее 8 символов, с прописными и строчными буквами
        </Text>

        {/* Пароль */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showPass1}
            value={pass1}
            onChangeText={setPass1}
          />
          <TouchableOpacity onPress={() => setShowPass1(!showPass1)}>
            <Ionicons
              name={showPass1 ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="#A855F7"
            />
          </TouchableOpacity>
        </View>

        {/* Повторить пароль */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Повторить пароль"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showPass2}
            value={pass2}
            onChangeText={setPass2}
          />
          <TouchableOpacity onPress={() => setShowPass2(!showPass2)}>
            <Ionicons
              name={showPass2 ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="#A855F7"
            />
          </TouchableOpacity>
        </View>

        {/* «Продолжить» батырмасы — Тіркелу (Register) экранына өтеді */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Продолжить</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  backButton: { paddingHorizontal: 20, paddingVertical: 12, alignSelf: 'flex-start' },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 10 },
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
  button: {
    backgroundColor: '#A855F7',
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});