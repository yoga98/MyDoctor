import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DoctorCategori, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonst } from '../../utils'


const Doctor = () => {
    return (
        <View style={styles.page}>
            <View style={styles.conten}>
                <HomeProfile />
                <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini</Text>
                {/* agar bisa scrol ke samping card piliha dokter maka gunakan SCrollView bawaan
            react-native secara defaul vertical maka aktifkan ketik horizontal seperti 
            dibawah ini,
            lalu agar indikator scrollnya hilang maka matikan gunakan showHorizontalScrollIndicatro ={false}
            */}
                <View style={styles.wrapperScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.categori}>
                            <Gap width={16} />
                            <DoctorCategori />
                            <DoctorCategori />
                            <DoctorCategori />
                            <DoctorCategori />
                            <Gap width={6} />
                        </View>
                    </ScrollView>
                </View>
                <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
                <RatedDoctor />
                <RatedDoctor />
                <RatedDoctor />
                <Text style={styles.sectionLabel}>Good News</Text>
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page: {

        backgroundColor: colors.secondary,
        flex: 1
    },
    //ini adalah cara untuk membuat lengkungan
    conten: {
        paddingVertical: 30,
        paddingHorizontal: 16, 
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    welcome: {
        fontSize: 20,
        fontFamily: fonst.primary[600], color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209
    },
    categori: {
        flexDirection: 'row'
    },
    sectionLabel:{
        fontSize:16,
        fontFamily:fonst.primary[600],
        color:colors.text.primary,
        marginTop:30,
        marginBottom:16
    },
    wrapperScroll: { marginHorizontal: -16 }
})