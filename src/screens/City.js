import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'

const City = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/city-background.jpg')}
          style={styles.image}
        >
          <Text style={[styles.cityName, styles.cityText]}>London</Text>
          <Text style={[styles.countryName, styles.cityText]}>UK</Text>
          <View style={[styles.populationWrapper, styles.rowLayout]}>
            <IconText
              iconName={'user'}
              iconColor={'red'}
              bodyText={8000}
              bodyTextStyles={styles.populationText}
            />
          </View>
          <View style={[styles.riseSetWrapper, styles.rowLayout]}>
            <IconText
              iconName={'sunrise'}
              iconColor={'white'}
              bodyText={'6:00 AM'}
              bodyTextStyles={styles.riseSetText}
            />

            <IconText
              iconName={'sunset'}
              iconColor={'white'}
              bodyText={'7:00 PM'}
              bodyTextStyles={styles.riseSetText}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'royalblue',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1
  },
  image: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItem: 'center'
  }
})
export default City
