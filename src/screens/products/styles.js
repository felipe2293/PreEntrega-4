import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop:10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
   
    notFound: {
        flex: 1,
        alignItems: 'center',
    },
    notFoundText: {

    },
    clearIcon: {
        position: 'absolute',
        zIndex: 2,
        right: 5,
    },
    products:{
        flex:1,
        marginTop:10,
    },
    productsContent: {
        paddingVertical: 25,
        gap: 15,
    },
    productContainer: {
        backgroundColor: COLORS.background,
        borderRadius: 10,
        width: '45%',
        marginHorizontal: 10,
        marginBottom:10,
    },
    productImage: {
        width: '100%',
        height: 150,
    },
    productDetail: {
        padding: 10,
        gap: 5,
    },
    productName: {
        fontSize: 14,
    },
    productPrice: {
        fontSize: 15,
        fontWeight: 'bold',
    },
})