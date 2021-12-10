import React, { useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik'
import styles from '../style/GlobalStyle';
import * as yup from 'yup'

interface LoginValues {
    email: string;
    password: string;
}

const Login = ({ navigation }: any) => {
    const initialValue: LoginValues = { email: '', password: '' }
    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .required('Email Address is Required'),
        password: yup
            .string()
            .required('Password is required'),
    });

    return (
        <View style={[styles.container, styles.centerItem]}>
            <View style={styles.loginContainer}>
                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={initialValue}
                    onSubmit={(values, { setTouched }) => {
                        setTouched({ email: true, password: true });
                        console.log('Values => ', values);
                    }}
                >
                    {({ handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched, }) => (
                        <>
                            <TextInput
                                placeholder="Email Address"
                                style={styles.textInput}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            {(errors.email && touched.email) &&
                                <Text style={styles.errorText}>{errors.email}</Text>
                            }
                            <TextInput
                                placeholder="Password"
                                style={styles.textInput}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry
                            />
                            {(errors.password && touched.password) &&
                                <Text style={styles.errorText}>{errors.password}</Text>
                            }
                            {/* <Button onPress={handleSubmit} title="Submit" /> */}
                            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('registration')}><Text style={{ color: 'blue' }}>Sign Up</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login;