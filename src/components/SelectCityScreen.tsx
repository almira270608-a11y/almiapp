import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const CITIES = [
  'Астана',
  'Алматы',
  'Шымкент',
  'Ақтау',
  'Ақтөбе',
  'Атырау',
  'Қарағанды',
  'Көкшетау',
  'Қостанай',
  'Қызылорда',
  'Орал',
  'Өскемен',
  'Павлодар',
  'Петропавл',
  'Семей',
  'Талдықорған',
  'Тараз',
  'Түркістан',
];

export default function SelectCityScreen({ navigation }: any) {
  const [selectedCity, setSelectedCity] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={24} color="#1F2937" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Выберите город</Text>
        <Text style={styles.subtitle}>
          Заведения которые будут показываться вам, будут зависеть от вашего города.
        </Text>

        <TouchableOpacity
          style={styles.selectBox}
          onPress={() => setIsModalVisible(true)}
          activeOpacity={0.8}
        >
          <Text style={[styles.selectText, !selectedCity && styles.placeholderText]}>
            {selectedCity || 'Выбрать город'}
          </Text>
          <Ionicons name="chevron-down" size={20} color="#A855F7" />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
  <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('Booking')}
    activeOpacity={0.8}
  >
    <Text style={styles.buttonText}>Продолжить</Text>
  </TouchableOpacity>
</View>

      <Modal visible={isModalVisible} animationType="slide" transparent>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Выберите город</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Ionicons name="close" size={24} color="#1F2937" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={CITIES}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.cityItem}
                  onPress={() => {
                    setSelectedCity(item);
                    setIsModalVisible(false);
                  }}
                >
                  <Text
                    style={[
                      styles.cityText,
                      selectedCity === item && styles.cityTextSelected,
                    ]}
                  >
                    {item}
                  </Text>
                  {selectedCity === item && (
                    <Ionicons name="checkmark" size={20} color="#A855F7" />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  backButton: { paddingHorizontal: 20, paddingVertical: 12, alignSelf: 'flex-start' },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 10 },
  title: { fontSize: 24, fontWeight: '700', color: '#1F2937', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#9CA3AF', marginBottom: 28, lineHeight: 20 },
  selectBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 52,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  selectText: { fontSize: 15, color: '#1F2937' },
  placeholderText: { color: '#9CA3AF' },
  bottomContainer: { paddingHorizontal: 24, paddingBottom: 24 },
  button: { backgroundColor: '#A855F7', height: 52, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#FFFFFF', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24, maxHeight: '60%' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  modalTitle: { fontSize: 18, fontWeight: '700', color: '#1F2937' },
  cityItem: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#F3F4F6', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cityText: { fontSize: 16, color: '#4B5563' },
  cityTextSelected: { color: '#A855F7', fontWeight: '600' },
});