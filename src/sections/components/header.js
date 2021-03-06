import React from 'react'
import { 
    View, 
    SafeAreaView, 
    Image, 
    StyleSheet 
} from 'react-native';

function Header(props){
    return(
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    <Image 
                        source={require('../../../assets/logoHorizontal.png')}
                        style={styles.logo}
                    />
                    <View style={styles.right}>
                        {props.children}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: 'contain'
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: "center"
    }
})

export default Header;