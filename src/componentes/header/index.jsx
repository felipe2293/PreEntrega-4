import { View,Text,useWindowDimensions } from "react-native";
import {styles} from './styles'

const Header =({title})=>{
    const{widht}=useWindowDimensions();
    const isTablet=widht>650;
    return(
        <View style={isTablet?styles.TabletContainer:styles.container}>
            <Text style={isTablet?styles.titleTablet:styles.title}>{title}</Text>
        </View>
    )
}

export default Header;