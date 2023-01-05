import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
import news_banner_data from './news_banner_data.json';
// react nativede ekranda bir veri göstermek için FlatList kullanılır.
//FlatList çalışma mantığı: ekrana 300 veri basman lazım ekrana 5 tane basıyor kullanıcı aşağı
//indikçe diğer verileri yüklüyor aynı anda 300 veri yüklemeye çalışmıyor. Üstte kalan önceden gördüklerini de kaldırır.

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const keyNews = (item, index) => item.u_id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        // keyExtractor={(item, index) => item.u_id.toString()}
        keyExtractor={keyNews}
        data={news_data}
        renderItem={renderNews}
        // renderItem={({item}) => <NewsCard news={item}/>}
        //bu fonksiyonu yukarda tanımlamak daha mantıklı bir kere fonksiyonu oluşturup onu kullanırız. keyde de aynısını yaptık.
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default App;
//scrollView üstte kalıp flatList onun altına giriyodu scrollView üstte sürekli kalıyordu.
//bunu için ListHeaderCompanent propu kullanıp içine scrollView koyduk.
