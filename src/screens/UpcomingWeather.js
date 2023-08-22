import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  FlatList,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
  {
    dt_txt: '2022-08-30 16:00:00',
    main: {
      temp_min: 296.34,
      temp_max: 298.24
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  },
  {
    dt_txt: '2022-08-30 17:00:00',
    main: {
      temp_min: 296.2,
      temp_max: 296.31
    },
    weather: [
      {
        main: 'Clouds'
      }
    ]
  },
  {
    dt_txt: '2022-09-03 15:00:00',
    main: {
      temp_min: 294.14,
      temp_max: 294.14
    },
    weather: [
      {
        main: 'Clouds'
      }
    ]
  }
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Upcoming Weather</Text>
        <ImageBackground
          source={require('../../assets/upcoming-background.jpg')}
          style={styles.image}
        >
          <FlatList
            data={DATA}
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
