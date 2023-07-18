import { Image, Text, View } from 'react-native'
import PRODUCTS from '../../constantes/data/products.json'
import { styles } from './styles'

function ProductDetail({ navigation, route }) {
    const { color, productId } = route.params;
    const product = PRODUCTS.find((product) => product.id === productId);
    return (
        <View style={styles.container}>
            <View style={[styles.containerImage, { backgroundColor: color }]}>
                <Image source={{ uri: product.image }} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.content}>
                <Text style={styles.textDescription}>{product.resume}</Text>
                <Text style={styles.priceText}>USD {product.price}</Text>
                <Text style={styles.stockText}>Stock: {product.stock}</Text>
            </View>


        </View>
    )
}

export default ProductDetail;