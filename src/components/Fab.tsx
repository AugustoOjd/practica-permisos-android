import { StyleSheet, Text, View, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


interface Props {
    iconName: string,
    onPress : () => void
    style  ?: StyleProp<ViewStyle>
}

const Fab = ({ iconName, onPress, style = {} }: Props) => {
  return (
    <View style={{
        ...style as any
    }}> 
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={ onPress}
        style={ styles.blackButton}
      >

        <Icon
            name={iconName}
            color={'white'}
            size={35}
        />

      </TouchableOpacity>
    </View>
  )
}

export default Fab

const styles = StyleSheet.create({
    blackButton: {
        zIndex: 999,
        height: 45,
        width: 45,
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})