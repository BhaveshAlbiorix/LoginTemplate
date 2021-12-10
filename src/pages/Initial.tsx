import * as React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Initial = ({ navigation }: any) => {
    const CardView = (text: string, type: number) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    if (type === 2) {
                        navigation.navigate('login')
                    } else {
                        navigation.push('home');
                    }
                }}>
                <View style={styles.mainCardView}>
                    <Text style={{ color: Colors.black }}>
                        {text}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={{ height: "100%", alignContent: 'center', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    {CardView("Conditional Login", 1)}
                    {CardView("Default Login", 2)}
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    mainCardView: {
        // height: 90,
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 15,
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 50,
        padding: 30,
        width: "50%"
    },
    subCardView: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: Colors.history_back,
        borderColor: Colors.color_eeeeee,
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default Initial;