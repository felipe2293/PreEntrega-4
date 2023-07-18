import { FlatList, SafeAreaView, View } from 'react-native';
import { CategoryItem, Header } from '../../componentes';
import CATEGORIES from '../../constantes/data/categories.json';
import { styles } from './styles'
import useOrientation from '../../hooks/useOrientation';
import {ORIENTATION} from '../../constantes/orientation'
function Categories({ navigation,route }) {
    const orientation = useOrientation();
    const onSelectCategory=({categoryId,color,name})=>{
        navigation.navigate('Products',{categoryId,color,name});
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={CATEGORIES}
                    style={styles.categoryContainer}
                    contentContainerStyle={styles.listCategoryContainer}
                    renderItem={({ item }) => <CategoryItem{...item} onSelectCategory={()=>onSelectCategory({categoryId:item.id,color:item.backgroundColor,name:item.name})} style={
                        orientation === ORIENTATION.LANDSCAPE ? styles.categoryItemLandscape : {}} />}
                    keyExtractor={(item) => item.id}


                />
            </View>
        </SafeAreaView>

    );
}
export default Categories;

