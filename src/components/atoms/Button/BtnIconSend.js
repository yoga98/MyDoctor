import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { IconSendDark, IconSendLight } from '../../../assets'
import { colors } from '../../../utils'

const BtnIconSend = ({ disable,onPress}) => {
    if (disable) {
        return (
            <View style={styles.container(disable)}>
                <IconSendDark />
            </View>
        )
    }
    return (
        <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
            <IconSendLight />
        </TouchableOpacity>
    )
    // return (
    //     <View style={styles.container(disable)}>
    //         kondisi boolean true/false 
    //         jika benar icon dark 
    //         jika salah icon light

    //         {disable && <IconSendDark/> }
    //         {!disable && <IconSendLight/>}

    //     </View> 
    // )
}

export default BtnIconSend

const styles = StyleSheet.create({
    container: (disable) => ({
        backgroundColor: disable ? colors.disable : colors.tertiary,
        width: 45,
        height: 45,
        borderRadius: 10,
        paddingTop: 3,
        paddingRight: 3,
        paddingBottom: 8,
        paddingLeft: 8
    })
})
