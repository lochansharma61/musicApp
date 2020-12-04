import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'
import { Colors, Fonts, } from '../../themes';
var { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({

    card: {
        width: width * (170/375), 
        height: width * (200/375), 
        borderRadius: width * (10/375), 
        backgroundColor:Colors.lightGrey, 
    },
    albumImage: {
        width:'100%', 
        height: height * (55/375), 
        borderTopLeftRadius: width * (10/375), 
        borderTopRightRadius: width * (10/375)
    },
    albumName:{
        fontFamily:Fonts.type.semiBold, 
        fontSize: width * (20/375), 
        color:'rgb(35,88,106)', 
        marginHorizontal: width * (12/375), 
        marginVertical: width * (20/375)
    }


})