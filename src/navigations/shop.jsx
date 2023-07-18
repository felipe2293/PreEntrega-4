import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, ProductDetail } from "../screens"
import { COLORS, FONTS } from "../themes";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
    return (
        <Stack.Navigator initialRouteName="Categories"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTitleStyle: {
                    fontFamily: FONTS.bold,
                    fontSize: 20,
                },
                title:'Categorias'

            }}>

            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen
                name="Products"
                component={Products}
                options={({ navigation, route }) => ({
                    headerStyle: {
                        backgroundColor: route.params.color,
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back-circle" size={35} color={COLORS.black} />
                        </TouchableOpacity>
                    ),
                    title:route.params.name,
                })} />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetail}
                options={({ navigation, route }) => ({
                    headerStyle: {
                        backgroundColor: route.params.color,
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back-circle" size={35} color={COLORS.black} />
                        </TouchableOpacity>
                    ),
                    title:route.params.name,
                })}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    goBack: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    goBackText: {
        fontSize: 15,
        color: COLORS.text,
    },
})

export default ShopNavigator;