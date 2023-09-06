import { StyleSheet, Text, View } from 'react-native';
import { FlippableCard } from './src/components/molecules/flippable-card';

export default function App() {
    return (
        <View style={styles.container}>
            <FlippableCard />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202432',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
