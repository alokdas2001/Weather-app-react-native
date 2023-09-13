import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  FlatList,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  //FlatList is react native component
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/upcoming-background.jpg')}
          style={styles.image}
        >
          <FlatList
            data={weatherData}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_text}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'royalblue',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },

  image: {
    flex: 1
  }
})

export default UpcomingWeather
