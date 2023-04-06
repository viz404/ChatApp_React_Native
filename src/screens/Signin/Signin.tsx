import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, {useState} from "react";

import auth from "@react-native-firebase/auth";

import {dark, light} from "./stylesSignin";

const logo = require("../../assets/images/chat-logo.png");

const Signin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirm, setConfirm] = useState<any>(null);
  const [code, setCode] = useState("");

  let theme = "dark";

  const styles = theme == "dark" ? dark : light;

  const sendOTP = async () => {
    const confirmation = await auth().signInWithPhoneNumber(
      `+91 ${phoneNumber}`,
    );
    setConfirm(confirmation);
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      setPhoneNumber("");
      setCode("");
      setConfirm(null);
    } catch (error) {
      console.log("Invalid code.");
    }
  };

  const phoneNumberCheck = phoneNumber != "" && phoneNumber.length < 10;

  return (
    <ScrollView style={styles.main}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerBold}>Welcome.</Text>
        <Text style={styles.header}>Let's sign you in.</Text>
        <Text style={styles.header}>We've been waiting for you!</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputBoxContainer}>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter phone number"
            inputMode="decimal"
            style={styles.inputBox}
            placeholderTextColor="silver"
          />
          {phoneNumberCheck && (
            <Text style={styles.errorText}>
              phone number should be 10 digits
            </Text>
          )}
        </View>
        <TextInput
          value={code}
          onChangeText={setCode}
          editable={confirm ? true : false}
          placeholder="Enter OTP"
          inputMode="decimal"
          style={styles.inputBox}
          placeholderTextColor="silver"
        />
      </View>
      <View style={styles.signinButtonContainer}>
        <TouchableOpacity
          style={styles.signinButton}
          disabled={phoneNumber.length != 10}
          onPress={() => {
            confirm ? confirmCode() : sendOTP();
          }}>
          <Text style={styles.signinButtonText}>
            {confirm ? "Verify OTP" : "Send OTP"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signin;
