import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign'

const data = [
    { label: 'USD', value: '1' },
    { label: 'CAD', value: '2' },
    { label: 'LKR', value: '3' },
    { label: 'ERO', value: '4' },
  ];

  const DropdownList = ({onChange,allCurrency,placeholder="Currency",search=false}) => {
    const [value, setValue] = useState(null);

    const renderItem = item => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          {item.value === value && (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
        </View>
      );
    };

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={allCurrency}
        search = {search}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={value}
        // onChange={item => {
        //   setValue(item.value);
        // }}
        onChange={onChange}
        // renderLeftIcon={() => (
        //     <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
        renderItem={renderItem}
        
      />
    );
  };

  export default DropdownList;

  const styles = StyleSheet.create({
    dropdown: {
      width:135,
      margin: 5,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
      color:'black'
    },
    placeholderStyle: {
      fontSize: 16,
      color:'black'
    },
    selectedTextStyle: {
      fontSize: 16,
      color:'black'
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      color:'black'
    },
  });
