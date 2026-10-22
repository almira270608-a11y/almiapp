import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function OTPScreen({ navigation }: any) {
  const [otp, setOtp] = useState(['7', '8', '5', '4']);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#1F2937" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Подтвердить номер</Text>
        <Text style={styles.subtitle}>
          Мы только что отправили код на{'\n'}
          <Text style={{ fontWeight: '600', color: '#1F2937' }}>+7 (700) 555 77 55</Text>
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpBox}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => {
                const newOtp = [...otp];
                newOtp[index] = text;
                setOtp(newOtp);
              }}
            />
          ))}
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('ResetPassword')}
        >
          <Text style={styles.buttonText}>Продолжить</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resendButton}>
          <Text style={styles.resendText}>Отправить код еще раз</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  backButton: { 
    paddingHorizontal: 20, 
    paddingVertical: 12, 
    alignSelf: 'flex-start' 
  },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 16 },
  title: { fontSize: 22, fontWeight: '700', color: '#1F2937', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#6B7280', marginBottom: 32, lineHeight: 20 },
  otpContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32 },
  otpBox: {
    width: 60,
    height: 60,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
  },
  button: {
    backgroundColor: '#9333EA',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
  resendButton: { alignItems: 'center' },
  resendText: { color: '#6B7280', fontSize: 14 },
}); 