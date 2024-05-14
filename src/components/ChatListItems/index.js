import React from 'react';
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


function ChatListItems({item, navigation}) {
  // console.log(`item:`, item)

  // const image = item.image
  // console.log('image:' , image); 


 

  return (
    
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ChatUp')} >
     <View>
      <Image source={require( './Assets/image.png') } style={styles.image} />

    </View> 
    

      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
          {item.name}
          </Text>
          <Text style={styles.subTitle}>{item.heure}</Text>
        </View>

        <Text numberOfLines={1} style={styles.subTitle}>
        {item.message}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ChatListItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 10,
    height: 70,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },

  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },

  name: {
    flex: 1,
    fontWeight: 'bold',
    color: 'gray',
  },

  subtitle: {},
});
