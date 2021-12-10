import * as React from 'react';
import { SafeAreaView, StatusBar, Text, TouchableWithoutFeedback, View, StyleSheet, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native';
import Product from '../component/Product';
import styles from '../style/GlobalStyle';

const Home = ({ navigation }: any) => {

    const products = [
        {
            id: 100,
            name: 'ReactProX Headset',
            price: 350,
            image: "https://picsum.photos/500/350",
            description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
        },
        {
            id: 101,
            name: 'FastLane Toy Car',
            price: 600,
            image: "https://picsum.photos/500/350",
            description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
        },
        {
            id: 102,
            name: 'SweetHome Cupcake',
            price: 2,
            image: "https://picsum.photos/500/350",
            description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
        }
    ];

    function renderProduct({ item }: any) {
        return (
            <Product {...item}
                onPress={() => {
                    // navigation.navigate('ProductDetails', {
                    //     productId: item.id,
                    // });
                }}
            />
        );
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <FlatList
                    style={styles.productsList}
                    contentContainerStyle={styles.productsListContainer}
                    keyExtractor={(item) => item.id.toString()}
                    data={products}
                    renderItem={renderProduct}
                />
            </SafeAreaView>
        </>
    );
}

export default Home;