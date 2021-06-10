import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';

export default function LikeandShare() {
    return (
        <View style={styles.container}>
            <View style={styles.iconbar}>
                <TouchableOpacity>
                    {/* <AntDesign name="hearto" size={28} color="black"  /> */}
                </TouchableOpacity>
                <TouchableOpacity>
                    {/* <Fontisto name="hipchat" size={28} color="black" style={styles.icon} /> */}
                </TouchableOpacity>
                <TouchableOpacity>
                    {/* <Feather name="send" size={28} color="black" style={styles.icon} /> */}
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                {/* <Feather name="bookmark" size={28} color="black" style={styles.icon} /> */}
            </TouchableOpacity>


        </View>

    )
}
const styles = StyleSheet.create({
    iconbar: {
        marginTop: 12,
        flexDirection: "row"
    },
    icon: {
        marginLeft: 4,
        marginRight: 12,
    },
    container:{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 4 }
});
