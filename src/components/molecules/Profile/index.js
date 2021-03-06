import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { DumyUser, IconRemovePhoto } from '../../../assets'
import { colors, fonst } from '../../../utils'
//*buat props name dan desc
const index = ({ name, desc, isRemove, photo, onPress }) => {
    return (
        <View style={styles.container}>
            {!isRemove && (
                <View style={styles.borderProfile}>
                    <Image source={photo} style={styles.avatar} />
                </View>
            )}
            {/* Logic agar ketika tidak ada nama akan kosong dan tidak ada space */}
            {isRemove && (
                <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
                    <Image source={photo} style={styles.avatar} />
                    {isRemove && <IconRemovePhoto style={styles.RemovePhoto} />}
                </TouchableOpacity>
            )}
            { name && (
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.profession}>{desc}</Text>
                </View>
            )}
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center' },
    avatar: { width: 110, height: 110, borderRadius: 110 / 2 },
    borderProfile: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: "center"
    },
    name: {
        fontFamily: fonst.primary[600],
        fontSize: 20,
        color: colors.text.primary,
        marginTop: 16,
        textAlign: "center"
    },
    profession: {
        fontSize: 16,
        fontFamily: fonst.primary[600],
        color: colors.text.secondary,
        marginTop: 2

        , textAlign: "center"
    },
    RemovePhoto: { position: "absolute", right: 8, bottom: 8 }
})
