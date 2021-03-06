import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fonst } from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

//memasukakn props icon type tittle dan onPress
//maka dimana ada type maka memanggil icon
const Button = ({ type, title, onPress, icon, disable }) => {
    //buat kondisi button/icon
    //icon-only ini akan dijadikan sebagai kumpulan kumpulan icon secara dinamis
    //tambahkan juga onpress agar bisa diklik
    if (type === 'btn-icon-send') {
        return <BtnIconSend disable={disable} onPress={onPress} />
    }
    if (type === 'icon-only') {
        return (
            <IconOnly onPress={onPress} icon={icon} />
        )
    }
    if (disable) {
        return (
            <View style={styles.disableBg}>
                <Text style={styles.disableText}>{title}</Text>
            </View>
        );
    }
    return (
        <TouchableOpacity style={styles.constainer(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    );

}
//TouchableOpacity memberikan agar bisa di klik
export default Button;
const styles = StyleSheet.create({
    //jika typenya container stylenya ini
    constainer: type => ({
        backgroundColor: type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
        paddingVertical: 10,
        borderRadius: 10,
    }),
    disableBg: {
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: colors.button.disable.background,
    },
 
    //jika type text maka munculkan ini
    text: (type) => (
        {
            fontSize: 16,
            fontWeight: '600',
            fontFamily: fonst.primary[600],
            textAlign: "center",
            color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text
        }
    ),
    disableText: {
        fontSize:18,
        fontFamily:fonst.primary[600],
        textAlign:"center",
        color:colors.button.disable.text
    },
});
