import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FIREBASE_AUTH } from '../firebaseConfig';
// import { FIREBASE_APP } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validForm = () => {
        let valid = true;
        if (!email.trim()) {
            setEmailError('email is required');
            valid = false;

        } else if (!isValidEmail(email)) {
            setEmailError('email is invalid');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!password.trim()) {
            setPasswordError('password is required');
            valid = false
        } else {
            setPasswordError('');
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError("password doesn't match");
            valid = false;
        } else {
            setConfirmPasswordError('');
        } return valid
    }

    const auth = FIREBASE_AUTH;
    const handleSubmit = async () => {
        if (validForm() === true) {
            navigation.navigate("subscribe")
               try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        console.log('created user successfully');
        
      } catch (error) {
        console.log(error);
        
      }finally{
        navigation.navigate('signIn');
      }
        }
    }

    return (
        <View style={{ width: "100%", height: "100%" }}>
            <View style={{ marginLeft: 13 }}>
                <Text style={{ color: "#EB9800", alignSelf: "center", fontSize: 20, marginTop: 55 }}>CookSide</Text>
                <Text style={{ width: "95%", marginTop: 15, fontWeight: '100' }}>Before you try your free trial. Please create an account first by sign up.</Text>
            </View>
            <View style={{ marginLeft: 13, marginTop: 15 }}>

                <Text style={{ marginBottom: 5, fontWeight: "bold" }}>Name</Text>
                <TextInput style={{ backgroundColor: "whitesmoke", width: "95%", padding: 7, borderRadius: 10, borderWidth: 1, borderColor: "#EB9800" }}></TextInput>

                <Text style={{ marginBottom: 5, fontWeight: "bold", marginTop: 15 }}>Email</Text>
                <TextInput style={{ backgroundColor: "whitesmoke", width: "95%", padding: 7, borderRadius: 10, borderWidth: 1, borderColor: "#EB9800" }} onChangeText={(e) => { setEmail(e) }}>
                </TextInput>
                {emailError ? <Text style={{ color: 'red', paddingTop: 2 }}>{emailError}</Text> : null}

                <Text style={{ marginBottom: 5, fontWeight: "bold", marginTop: 15 }}>Phone Number</Text>
                <TextInput style={{ backgroundColor: "whitesmoke", width: "95%", padding: 7, borderRadius: 10, borderWidth: 1, borderColor: "#EB9800" }}></TextInput>

                <Text style={{ marginBottom: 5, fontWeight: "bold", marginTop: 15 }}>Password</Text>
                <TextInput style={{ backgroundColor: "whitesmoke", width: "95%", padding: 7, borderRadius: 10, borderWidth: 1, borderColor: "#EB9800" }} secureTextEntry onChangeText={(p) => { setPassword(p) }}></TextInput>
                {passwordError ? <Text style={{ color: 'red', paddingTop: 2 }}>{passwordError}</Text> : null}
                <AntDesign name='eyeo'></AntDesign>

                <Text style={{ marginBottom: 5, fontWeight: "bold", marginTop: 15 }}>Confirm Password</Text>
                <TextInput style={{ backgroundColor: "whitesmoke", width: "95%", padding: 7, borderRadius: 10, borderWidth: 1, borderColor: "#EB9800" }} secureTextEntry={passwordVisible} onChangeText={(cp) => { setConfirmPassword(cp) }}></TextInput>
                {confirmPasswordError ? <Text style={{ color: 'red', paddingTop: 2 }}>{confirmPasswordError}</Text> : null}
            </View>
            <TouchableOpacity onPress={()=>handleSubmit()} style={{ backgroundColor: "#EB9800", width: "91%", marginBottom: 100, display: "flex", justifyContent: "center", alignSelf: "center", borderRadius: 30, marginTop: 30 }}>
                <Text style={{ color: "white", padding: 12, textAlign: "center", fontWeight: '400' }}>Sign Up</Text>
            </TouchableOpacity>

        </View>
    )

}