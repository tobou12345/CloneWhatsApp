import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  handleTextChange,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function SignUp({navigation}) {


  const countries = [
    {title: 'Cameroon'},
    {title: 'Ghana'},
    {title: 'Amerique'},  
    {title: 'Nigeria'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.visualizer}>
        <Text> </Text>
        <Text style={{color: 'green', fontWeight: '400'}}>
          Enter your phone number
        </Text>
        <View>
          <Ionicons
            style={styles.Inputicon}
            name={'ellipsis-vertical-outline'}
            size={25}
            color={'#156056'}
          />
        </View>
      </View>

      <Text style={styles.sms}>
        WhatsAap will need to verify your phone number. fees may apply depending
        on the operator.<Text style={{color: 'blue'}}>What is my number?</Text>
      </Text>

      <View>
        <View style={styles.listItem}>
          <Text> </Text>
          <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem.title, index);
        }}
        defaultValue={countries[1]}
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
                {(selectedItem && selectedItem.title) || ' country'}
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
          {/* <Ionicons
            style={styles.iconContainer}
            name={'chevron-down-outline'}
            size={25}
            color={'#156056'}
          /> */}
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.container1}>
        <View style={styles.inputContainer1}>
          <TextInput
            style={styles.input1}
            // value={Text}
            onChangeText={handleTextChange}
            keyboardType="numeric"
            placeholder="+ 237"
            numberOfLines={1}
          />
        </View>

        <View style={styles.inputContainer2}>
          <TextInput
            style={styles.input2}
            // value={Text}
            onChangeText={handleTextChange}
            keyboardType="numeric"
            placeholder="674743448"
          />
        </View>
      </View>

     

      <TouchableOpacity style={styles.button1} onPress={ () => navigation.navigate('CodeUp')}>
        <Text style={{color: '#FDFDFD', fontSize: 20, fontWeight: '400'}}>
          Continue
        </Text>
        
      </TouchableOpacity>
{/* 
      <TouchableOpacity style={styles.button1} onPress={this.onPress1}>
        <Text style={{color: '#FDFDFD', fontSize: 20, fontWeight: '400'}}>
          next
        </Text>
        
      </TouchableOpacity> */}

    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    // justifyContent: 'space-evenly',
    padding: 20,
  },
  visualizer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconContainer: {
    // marginLeft: 50,
  },

  // Inputicon: {
  //   marginLeft: 20,
  // },

  sms: {
    // marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 20,
  },

  listItem: {
    width: '75%',
    borderBottomColor: 'green',
    borderBottomWidth: 2,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginBottom: 5,
  },

  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 300,
    width: '75%',
    alignSelf: 'center',
  },

  input1: {
    borderColor: 'gray',
    textAlign: 'center',
  },

  input2: {
    borderColor: 'gray',
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

  inputContainer1: {
    flex: 0.3,
    borderBottomColor: 'green',
    borderBottomWidth: 2,
  },

  inputContainer2: {
    flex: 0.6,
    borderBottomColor: 'green',
    borderBottomWidth: 2,
  },





  dropdownButtonStyle: {
    width: 200,
    height: 50,
    // backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
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
    fontSize: 28,
    marginRight: 8,
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
