import AsyncStorage from '@react-native-community/async-storage';

// Method to get an item stored for user credentials
getItemToLocalStorage = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        this.setState({
            user: JSON.parse(value)
        })
    } catch (err) {
        console.log('---------errror setting token----', err)
        return false
    }
}

export default getItemToLocalStorage;
