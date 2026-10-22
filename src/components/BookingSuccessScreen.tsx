import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  BookingSuccess: {
    bookingDetails?: {
      date: string;
      time: string;
      guests: string;
      wishes: string;
    };
  };
  MyBookings: undefined;
  RestaurantMenu: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'BookingSuccess'>;

export default function BookingSuccessScreen({ route, navigation }: Props) {
  const bookingDetails = route.params?.bookingDetails || {
    date: '25.10.2026',
    time: '19:30',
    guests: '2 человека',
    wishes: 'Нет',
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Жоғарғы панель: Артқа қайту батырмасы ең сол жақта */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Фиолетовый дөңгелек ішіндегі белгі */}
        <View style={styles.checkContainer}>
          <Ionicons name="checkmark" size={44} color="#FFFFFF" />
        </View>

        {/* Тақырыпшалар */}
        <Text style={styles.title}>Бронь подтверждена!</Text>
        <Text style={styles.subtitle}>
          Мы отправили детали бронирования в ресторан.{'\n'}Ждем вас!
        </Text>

        {/* Детали бронирования карточкасы */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Детали бронирования</Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Дата:</Text>
            <Text style={styles.detailValue}>{bookingDetails.date}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Время:</Text>
            <Text style={styles.detailValue}>{bookingDetails.time}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Гости:</Text>
            <Text style={styles.detailValue}>{bookingDetails.guests}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Пожелания:</Text>
            <Text style={styles.detailValue}>{bookingDetails.wishes}</Text>
          </View>
        </View>

        {/* Мои бронирования батырмасы */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('MyBookings' as any)}
        >
          <Text style={styles.primaryButtonText}>Мои бронирования</Text>
        </TouchableOpacity>

        {/* Посмотреть меню батырмасы */}
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('RestaurantMenu' as any)}
        >
          <Text style={styles.secondaryButtonText}>Посмотреть меню</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    width: '100%',
    paddingLeft: 16, // Уменьшено, чтобы кнопка была у самого левого края
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'flex-start',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  checkContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#A855F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#A855F7',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    width: '100%',
    backgroundColor: '#F3E8FF',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#A855F7',
    fontSize: 16,
    fontWeight: '600',
  },
});