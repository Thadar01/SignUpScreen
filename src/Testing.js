import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Modal,
  ImageBackground,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import style from "../style";

const Testing = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState(true);
  const validateEmail = (email) => {
    // Regular expression for validating email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const Clear = () => {
    setUserName("");
    setPassword("");
    setEmail("");
  };
  const close = () => {
    setModalVisible(false);
    Clear();
    setView(true);
  };
  const checkAndSignUp = () => {
    if (userName.trim() === "") {
      Alert.alert("Error", "Please enter the user name!");
    } else if (email.trim() === "") {
      Alert.alert("Error", "Please enter the email!");
    } else if (!validateEmail(email)) {
      Alert.alert("Error", "Your email is invalid");
    } else if (password.trim() === "") {
      Alert.alert("Error", "Please enter the password!");
    } else {
      // Perform signup logic here
      Alert.alert("Sign up Successfully");
      Clear();
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#ff9900"} />
      <ImageBackground
        source={require("../assets/bg1.avif")}
        resizeMode="cover"
        style={style.image}
      >
        <View style={style.centeredView}>
          <SafeAreaView>
            <Modal
              transparent={true}
              visible={modalVisible}
              animationType="fade"
            >
              <View style={style.centerView}>
                <View style={style.modalStyle}>
                  <View>
                    <Text style={style.helloText}>Sign Up</Text>
                    <View style={style.list}>
                      <Text style={style.label}>User Name</Text>
                      <TextInput
                        placeholder="Enter your name"
                        value={userName}
                        style={style.input}
                        onChangeText={setUserName}
                      />
                      <Text style={style.label}>Email</Text>
                      <TextInput
                        placeholder="Enter your email"
                        value={email}
                        style={style.input}
                        onChangeText={setEmail}
                      />
                      <Text style={style.label}>Password</Text>
                      <TextInput
                        placeholder="Enter your Password"
                        value={password}
                        style={style.input}
                        onChangeText={setPassword}
                        secureTextEntry={view}
                      />
                      <Pressable
                        onPress={() => setView(!view)}
                        style={style.pressView}
                      >
                        <Text style={style.View}>View</Text>
                      </Pressable>
                      <View style={style.button}>
                        <Pressable
                          style={style.closeButton}
                          onPress={checkAndSignUp}
                        >
                          <Text>Sign Up</Text>
                        </Pressable>
                        <Pressable onPress={close} style={style.closeButton}>
                          <Text>Close</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </SafeAreaView>
        </View>
        <Pressable
          style={style.openButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={style.openText}>Sign up</Text>
        </Pressable>
      </ImageBackground>

      {/* <Image
        style={style.tinyLogo}
        // source={{
        //   uri: "https://reactnative.dev/img/tiny_logo.png",
        // }}
        source={require("../assets/favicon.png")}
      /> */}
    </SafeAreaView>
  );
};

export default Testing;
