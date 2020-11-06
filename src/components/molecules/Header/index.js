import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonst } from '../../../utils';
import { Button, Gap } from '../../atoms';
//memanggil onPress
//artinya button icon back-dark menjadi event press kembalidarokomponen yang dipunya
//membuat props title agar dinams 
//akan muncul di register,
const Header = ({onPress,title}) => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back-dark" onPress={onPress}/>
            <Text style={styles.text}>{title}</Text>
            <Gap width={24}/>
        </View>
    )
}

export default Header
//agar saling bersamping gunakan flexdirection yang value row
//agar benar" ditengah text header maka gunakan Gap bawaan yang sudah dibuat
// dan gunakan flex gunakan dumy background color untuk melihat luas ukuran
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        paddingVertical:30,
        backgroundColor:colors.white,
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        textAlign:'center', 
        // backgroundColor:'yellow',
        flex:1,
        fontSize:20,
        fontFamily: fonst.primary[600],
        color: colors.text.primary
    }
})