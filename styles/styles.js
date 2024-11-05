// styles/styles.js
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    endDateText: {
        fontSize: 14,
        color: '#888',
    },
    priorityText: {
        fontSize: 14,
        color: '#ff6b6b',
        fontWeight: '600',
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#ff6b6b',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        zIndex: 10,
    },
    floatingButtonText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    bodytext: {
        fontSize: 14,
        color: '#ff6b6b',
        fontWeight: '600',
    }
});
