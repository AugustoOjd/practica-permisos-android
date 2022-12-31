import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
    title: string,
    onPress: () => void
    style?: StyleProp<ViewStyle>
}

const BlackButton = ({ title, onPress, style = {}}:Props) => {
  return (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={ onPress}
        style={{
            ...styles.blackBtn,
            ...style as any
        }}
    >
        <Text style={ styles.textTitle}>
            { title }
        </Text>
    </TouchableOpacity>
  )
}

export default BlackButton

const styles = StyleSheet.create({
    blackBtn: {
        marginVertical: 20,
        height: 42,
        width: 180,
        backgroundColor: 'black',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textTitle: {
        color: 'white',
        fontSize: 18
    }
})