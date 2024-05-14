import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function StartUp({navigation}) {
  
  const languages = [
    {title: 'English'},
    {title: 'French'},
    {title: 'Deutsch'},  
    {title: 'Spannish'},
  ];
  return (
    <View style={styles.container}>
      
      <View style={styles.visualizer}>
        <Text style={styles.text} > Welcome to WhatsApp </Text>
      </View>

       <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('./assets/Capture.png')} />
      </View>

     

      
      <View style={styles.sms}>
      <Text style={{ textAlign: 'center' }}>Read our <Text style={{color: 'blue'}}>  Privacy Polycy </Text>  . Tap " Agree and Continue " to accept the<Text style={{color: 'blue'}}> Teams of service</Text>. </Text>
      </View>


      


       
      <TouchableOpacity style={styles.button} >
      <View style={styles.iconContainer}>
        <Ionicons
          name={'globe-outline'}
          size={25}
          color={'#156056'}
          style={styles.Inputicon}
        />
      </View>
      <SelectDropdown
        data={languages}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem.title, index);
        }}
        defaultValue={languages[0]}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              {selectedItem && (
                <Icon
                  name={selectedItem.icon}
                  style={styles.dropdownButtonIconStyle}
                />
              )}
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || 'languages'}
              </Text>
              <Icon
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                style={styles.dropdownButtonArrowStyle}
              />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && {backgroundColor: '#D2D9DF'}),
              }}>
              <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
      {/* <Text style={{ color: '#156056', fontSize: 15, fontWeight: '300' }}>English</Text> */}
      {/* <View style={styles.iconContainer}>
        <Ionicons
          name={'chevron-down-outline'}
          size={25}
          color={'#156056'}
          style={styles.Inputicon}
        />
      </View> */}
    </TouchableOpacity>
     
    

      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('SignUp') }>
          <Text style={{color: '#FDFDFD', fontSize: 20, fontWeight: '500'}}>
          Agree and Continue
          </Text>
        </TouchableOpacity>
        
      <Text/>
      </View>
      )}
export default StartUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,  
    alignContent: 'space-between',
  },
  visualizer: {
   flex: 0.3,
  //  backgroundColor: 'green',
   justifyContent: 'center',
   alignItems: 'center',
   
  },
  text: {
   fontWeight: 'bold',
   fontSize: 26,
   color: 'black',
   },

   imageContainer: {
    flex: 0.65,
    alignItems: 'center',
    
    height: 100,
    borderRadius: 0,
    overflow: 'hidden',

   
  },

  image: {
    width: 300,
    height: 300,
  },

   sms:{
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom:20,
   },

  

  button1: {
    alignItems: 'center',
    backgroundColor: '#156056',
    padding: 8,

    borderRadius: 20,
    marginHorizontal: 30,
    height: 50,
   
    // styles.button, { marginTop: 10 }]}
  },


  space1: {
    color: '#FFFFFF',
    
  },
button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4C4C4',
    padding: 1,

    borderRadius: 20,
    marginHorizontal: 100,
    marginBottom: 150,
  },
  iconContainer: {
    marginRight: -55,
  },
  Inputicon: {
    marginLeft: 8,
  },

 
  Sign2: { 
    color: '#FFFFFF',
    
  },




  
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    // backgroundColor: '#E9ECEF',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    // marginHorizontal: 120
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 38,
    marginRight: 65,

  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    // borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    // color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },

  
});
