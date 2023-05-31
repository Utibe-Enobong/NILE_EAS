import { StyleSheet, View } from 'react-native'

import colors from '../../app/config/colors';

const Separator = () => <View style={styles.separator} />;

export default Separator

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.black,
        marginVertical: 8,
        alignSelf: 'center',
    }
})