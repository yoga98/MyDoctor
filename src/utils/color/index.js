//setup color ini terbentuk warna basic
//mainColor adalah kumpulan warna warna
const mainColor = {
    green1: "#0BcAD4",
    dark1: '#112340',
    grey1: "#7D8797",
    grey2: '#E9E9E9'
}
export const colors = {
    primary: mainColor.green1,
    secondary: mainColor.dark1,
    white: 'white',
    black: 'black',
    text: {
        primary: mainColor.dark1,
        secondary: mainColor.grey1
    },
    button: {
        primary: {
            background: mainColor.green1,
            text: 'white'
        },
        secondary: {
            background: 'white',
            text: mainColor.dark1
        }
    },
    border: mainColor.grey2
}