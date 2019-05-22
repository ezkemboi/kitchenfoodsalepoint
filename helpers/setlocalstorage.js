import AsyncStorage from '@react-native-community/async-storage';

const setItemToLocalStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
        console.log('---------errror setting token----', err)
        return false
    }
}

export default setItemToLocalStorage;
