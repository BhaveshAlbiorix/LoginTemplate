import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import ProductModal from '../modal/ProductModal';

const Product = ({ name, price, image, onPress }: ProductModal) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => {
            if (onPress) {
                onPress();
            }
        }}>
            <ImageBackground
                style={[styles.thumb]}
                imageStyle={{
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                }}
                source={{ uri: image }}
                resizeMode="cover"
            />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>$ {price}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Product;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginVertical: 20,
    },
    thumb: {
        height: 265,
        minWidth: '100%',
    },
    infoContainer: {
        padding: 16,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    }
});