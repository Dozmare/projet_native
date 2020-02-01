import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import stationData from '../helpers/stationData'

class StationItem extends React.Component {
  render() {
    const station = this.props.station
    return (
      <View style={styles.main_container}>
        <View style={styles.content_container}>
            <View style={styles.header_container}>
                <Text style={styles.title_text}>{station.name}</Text>
            </View>
            <View style={styles.adress_container}>
              <Text style={styles.adress_text}>Adresse :{station.adress}</Text>
            </View>
            <View style={styles.state_container}>
                <Text style={styles.stat_text}> Etat: {station.state}</Text>
            </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    main_container: {
      height: 190,
      flexDirection: 'row'
    },
    content_container: {
      flex: 1,
      margin: 5
    },
    header_container: {
      flex: 1,
      flexDirection: 'row'
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 20,
      flex: 1,
      flexWrap: 'wrap',
      paddingRight: 5
    },
    adress_container: {
      flex: 1
    },
    adress_text: {
      fontStyle: 'italic',
      color: '#666666'
    },
    state_container: {
      flex: 1
    },
    state_text: {
      textAlign: 'left',
      fontSize: 14
    }
  })
  
  export default StationItem