import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { FIREBASE_APP } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
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

        return valid
    }

    const auth = FIREBASE_AUTH;
    const handleSubmit = async () => {
        console.log("hdghfh")
        if (validForm()) {
            try {
                response = await signInWithEmailAndPassword(auth, email, password);
                navigation.navigate("home")
            } catch (error) {
                console.log(error.code);

            }

        }
    }

    return (
        <View style={{ width: "100%", height: "100%" }}>
            <View style={{ marginLeft: 13 }}>
                <Text style={{ color: "#EB9800", alignSelf: "center", fontSize: 20, marginTop: 65 }}>CookSide</Text>
                <Text style={{ width: "95%", marginTop: 15, fontWeight: '100' }}>Before you try your free trial. Please create an account first by sign up.</Text>
            </View>
            <View style={{ marginLeft: 13, marginTop: 45 }}>

                <Text style={{ marginBottom: 5, fontWeight: "bold", marginTop: 25 }}>Email</Text>
                <TextInput style={{ backgroundColor: "whitesmoke", width: "95%", padding: 7, borderRadius: 10, borderWidth: 1, borderColor: "#EB9800" }} onChangeText={(e) => { setEmail(e) }}></TextInput>
                {emailError ? <Text style={{ color: 'red', paddingTop: 2 }}>{emailError}</Text> : null}

                <Text style={{ marginBottom: 5, fontWeight: "bold", marginTop: 15 }}>Password</Text>
                <TextInput style={{ backgroundColor: "whitesmoke", width: "95%", padding: 7, borderRadius: 10, borderWidth: 1, borderColor: "#EB9800" }} secureTextEntry onChangeText={(p) => { setPassword(p) }}></TextInput>
                {passwordError ? <Text style={{ color: 'red', paddingTop: 2 }}>{passwordError}</Text> : null}
            </View>
            <TouchableOpacity onPress={() => handleSubmit()} style={{ backgroundColor: "#EB9800", width: "91%", display: "flex", justifyContent: "center", alignSelf: "center", borderRadius: 30, marginTop: 30 }}>
                <Text style={{ color: "white", padding: 12, textAlign: "center", fontWeight: '400' }}>Sign In</Text>
            </TouchableOpacity>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 10, justifyContent: "center" }}>
                <Text>If you don't have an account please </Text>
                <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
                    <Text style={{ color: "#EB9800", fontSize: 16 }}>SignUp</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}