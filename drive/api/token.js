import AsyncStorage from '@react-native-async-storage/async-storage';

const setStudentToken = (token) => {
    return AsyncStorage.setItem('student',token)
};

const getToken = () => {
    return AsyncStorage.getItem('student')
};


export { setStudentToken,getToken}