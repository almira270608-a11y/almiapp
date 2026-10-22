import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BookingScreen({ navigation }: any) {
  // Өрістердің мәндерін сақтайтын State:
  const [date, setDate] = useState('25.10.2026');
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState('2');
  const [wishes, setWishes] = useState('');

  const handleBooking = () => {
    // Келесі экранға енгізілген деректерді жіберу
    navigation.navigate('BookingSuccess', {
      bookingDetails: { date, time, guests, wishes },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Шапка с кнопкой "Назад" и заголовком */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={22} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Детали бронирования</Text>

        {/* Пустой блок для выравнивания заголовка по центру */}
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Дата өрісі */}
        <Text style={styles.label}>Дата</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
          placeholder="ДД.ММ.ГГГГ"
        />

        {/* Уақыт өрісі */}
        <Text style={styles.label}>Время</Text>
        <TextInput
          style={styles.input}
          value={time}
          onChangeText={setTime}
          placeholder="ЧЧ:ММ"
        />

        {/* Қонақтар саны өрісі */}
        <Text style={styles.label}>Количество гостей</Text>
        <TextInput
          style={styles.input}
          value={guests}
          onChangeText={setGuests}
          keyboardType="numeric"
        />

        {/* Тілектер өрісі */}
        <Text style={styles.label}>Пожелания (необязательно)</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={wishes}
          onChangeText={setWishes}
          placeholder="Например: столик у окна"
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleBooking}>
          <Text style={styles.buttonText}>Забронировать</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#111827',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#A855F7',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 28,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});