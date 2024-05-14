import React, { useState } from 'react';
import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import ChatListItems from '../components/ChatListItems';

function CodeUp({navigation}) {


  const [selectedId, setSelectedId] = useState();
  

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Manou',
      message:'lorem ipsum dollor ........',
      heure: '8h30',
      
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Nelly',
      message:'lorem ipsum dollor ........',
      heure: '8h00',
     
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Nathan',
      message:'lorem ipsum dollor ........',
      heure: '7h30',
      
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Ornela',
      message:'lorem ipsum dollor ........',
      heure: '6h30',
    
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Pharella',
      message:'lorem ipsum dollor ........',
      heure: '6h31',
    
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Achille',
      message:'lorem ipsum dollor ........',
      heure: '6h37',
    
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'larry',
      message:'lorem ipsum dollor ........',
      heure: '6h37',
    
    }, 
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'loren',
      message:'lorem ipsum dollor ........',
      heure: '6h37',
    
    },
     {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Ali',
      message:'lorem ipsum dollor ........',
      heure: '6h37',
    
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Achille',
      message:'lorem ipsum dollor ........',
      heure: '6h37',
    
    },
   
  ];
  


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text />
      {/* <ChatListItems /> */}
      <FlatList
        data={DATA}
        renderItem={(elt) =>{
          return(
            <ChatListItems 
            item={elt.item} 
            navigation={navigation}
            />
            
          ); 
        }}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />

    </View>
   
   
  );
}

export default CodeUp;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
