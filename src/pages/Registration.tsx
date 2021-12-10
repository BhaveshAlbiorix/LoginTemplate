import * as React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik'
import styles from '../style/GlobalStyle';
import * as yup from 'yup'

interface RegistrationValues {
    email: string;
    password: string;
    phone: string;
}

const Registration = () => {
    const initialValue: RegistrationValues = { email: '', password: '', phone: '' };
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Email Address is not valid")
            .required('Email Address is Required'),
        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
        phone: yup.string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required('Mobile no is Required')
    })

    return (
        <View style={[styles.container, styles.horizontalCenter]}>
            <View style={styles.loginContainer}>
                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={initialValue}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values,
                        errors,
                        isValid,
                        touched }) => (
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
                                placeholder="Mobile Number"
                                style={styles.textInput}
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                                secureTextEntry
                                maxLength={10}
                            />
                            {(errors.phone && touched.phone) &&
                                <Text style={styles.errorText}>{errors.phone}</Text>
                            }

                            <TextInput
                                placeholder="Password"
                                style={styles.textInput}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry
                                maxLength={10}
                            />
                            {(errors.password && touched.password) &&
                                <Text style={styles.errorText}>{errors.password}</Text>
                            }
                            {/* <Button onPress={handleSubmit} title="Submit" /> */}
                            <TouchableOpacity disabled={!isValid} onPress={handleSubmit} style={styles.button}>
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>
            </View>
        </View>
    )
}

export default Registration;