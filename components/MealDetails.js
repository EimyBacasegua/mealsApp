import { View, Text, StyleSheet } from "react-native";

function MealsDetails({duration, complexity, affordability}){
    retur(
        <View style={StyleSheet.details}>
            <Text styles={styles.detailItem}>{duration}</Text>
            <Text styles={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text styles={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealsDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})