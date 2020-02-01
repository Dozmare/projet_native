import React from 'react';
import {StyleSheet,View,FlatList,} from 'react-native'
import StationItem from './StationItem'
import stations from '../helpers/stationData'

export default function ListScreen() {
  return (
    <View style={styles.main_content}>
      <FlatList   
      data={stations}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <StationItem station={item}/>}
      />
    </View>
  );
}

ListScreen.navigationOptions = {
  title: "Vélibs",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main_content:{
    marginTop: 20,
    flex: 1,

  }
});
