import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#FFFFFF',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 20,
      alignSelf: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    description: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
    },
    featureContainer: {
      marginBottom: 20,
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 16,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    featureTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    featureDescription: {
      fontSize: 16,
      textAlign: 'center',
      color: '#333333',
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#007AFF',
      padding: 12,
      borderRadius: 6,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    settingsButton: {
      marginTop: 20,
      backgroundColor: '#CCCCCC',
      padding: 12,
      borderRadius: 6,
      alignSelf: 'stretch',
    },
    settingsButtonText: {
      color: '#333333',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default styles;