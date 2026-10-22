import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const MENU_ITEMS = [
  {
    id: '1',
    name: 'Фирменный бургер',
    price: '2 800 ₸',
    desc: 'Сочная говяжья котлета, сыр чеддер, соус',
    image: 'https://yastatic.net/naydex/yandex-search/g8fjaj191/1be479_LO/h9Fm0wPgxoqh2CDvUx8-CcXez4NDF2aaBs1q0wvPzAJ5lpwl9G6DIp-3TijPm3fr8GpgsfXu_LfHJftlxhOql-eQB94y_drT3IEItgM_Mh3Nq7qPB2YOi3KkY6MmxrgzAY6AzFGrSvpqQuKEWmKXgrEbEKzRt5jXN8A',
  },
  {
    id: '2',
    name: 'Пицца Маргарита',
    price: '3 500 ₸',
    desc: 'Томатный соус, моцарелла, свежий базилик',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80',
  },
  {
    id: '3',
    name: 'Салат Цезарь',
    price: '2 400 ₸',
    desc: 'Куриное филе, пармезан, сухарики, соус цезарь',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&q=80',
  },
  {
    id: '4',
    name: 'Лимонад Домашний',
    price: '1 200 ₸',
    desc: 'Свежий цитрус, мята, минеральная вода',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80',
  },
];

export default function RestaurantMenuScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Меню заведения</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.menuCard}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.menuInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDesc} numberOfLines={2}>
                {item.desc}
              </Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#1F2937' },
  listContent: { padding: 20 },
  menuCard: {
    flexDirection: 'row', // Размещает картинку и текст в один ряд
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 14,
  },
  menuInfo: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: '700', color: '#1F2937', marginBottom: 4 },
  itemDesc: { fontSize: 13, color: '#6B7280', marginBottom: 8 },
  itemPrice: { fontSize: 15, fontWeight: '700', color: '#A855F7' },
});