import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const INITIAL_BOOKINGS = [
  { id: '1', restaurant: 'Bahandi Burger', date: '25.10.2026', time: '19:30', guests: '2', status: 'Активно' },
  { id: '2', restaurant: 'Del Papa', date: '12.09.2026', time: '18:00', guests: '4', status: 'Завершено' },
];

export default function MyBookingsScreen({ navigation }: any) {
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);

  const handleCancel = (id: string) => {
    Alert.alert('Отмена брони', 'Вы уверены, что хотите отменить бронь?', [
      { text: 'Нет', style: 'cancel' },
      {
        text: 'Да, отменить',
        style: 'destructive',
        onPress: () => setBookings((prev) => prev.filter((item) => item.id !== id)),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Мои бронирования</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.restaurantName}>{item.restaurant}</Text>
              <Text style={[styles.status, item.status === 'Активно' ? styles.activeStatus : styles.completedStatus]}>
                {item.status}
              </Text>
            </View>

            <Text style={styles.infoText}>📅 {item.date} в {item.time}</Text>
            <Text style={styles.infoText}>👥 {item.guests} гостя</Text>

            {item.status === 'Активно' && (
              <TouchableOpacity style={styles.cancelBtn} onPress={() => handleCancel(item.id)}>
                <Text style={styles.cancelBtnText}>Отменить бронь</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 14 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#1F2937' },
  listContent: { padding: 20 },
  card: { backgroundColor: '#F9FAFB', borderRadius: 16, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: '#F3F4F6' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  restaurantName: { fontSize: 16, fontWeight: '700', color: '#1F2937' },
  status: { fontSize: 12, fontWeight: '600', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  activeStatus: { backgroundColor: '#F3E8FF', color: '#A855F7' },
  completedStatus: { backgroundColor: '#E5E7EB', color: '#6B7280' },
  infoText: { fontSize: 14, color: '#4B5563', marginBottom: 4 },
  cancelBtn: { marginTop: 12, alignItems: 'center', paddingVertical: 10, borderRadius: 10, backgroundColor: '#FEE2E2' },
  cancelBtnText: { color: '#EF4444', fontSize: 14, fontWeight: '600' },
});