import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        color:COLORS.background,
    },
    categoryContainer:{
        marginTop:10,
        marginHorizontal:10,
    },
    listCategoryContainer:{
        gap:10,
    },
    categoryItemLandscape:{
        height:100,
    }
});
