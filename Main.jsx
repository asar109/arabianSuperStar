import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import SignUp from "./screens/SignUp/SignUp";
import Footer from "./Components/Footer/Footer";
import Profile from "./screens/Profile/Profile";
import SignUp2 from "./screens/SignUp/SignUp2";
import SignUp3 from "./screens/SignUp/SignUp3";
import SignUp4 from "./screens/SignUp/SignUp4";
import SignUp5 from "./screens/SignUp/SignUp5";
import Confirmation from "./screens/Confirmation/Confirmation";
import ResetPassword from "./screens/ResetPassword/ResetPassword";
import Verification from "./screens/ResetPassword/Verification";
import NewPassword from "./screens/ResetPassword/NewPassword";
import VoteBucket from "./screens/VoteBucket/VoteBucket";
import Temp from "./screens/Temp";
import Comments from "./screens/Comments/Comments";
import EditProfile from "./screens/Profile/EditProfile";
import BuyVote from "./screens/BuyVote/BuyVote";
import CardDetails from "./screens/CardDetails/CardDetails";
import TermsAndConditions from "./screens/TermsAndConditions/TermsAndConditions";
import FAQ from "./screens/FAQ/FAQ";

const Stack = createNativeStackNavigator();

const Main = () => {
  const isAuth = false;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true, // Enable smooth animations
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            };
          },
        }}
        initialRouteName="login"
      >
        <Stack.Screen
          name="temp"
          component={Temp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup2"
          component={SignUp2}
          options={{
            headerShown: true,
            headerTitle: "Back",
            headerBackground: () => {
              <View style={{ backgroundColor: "#fff" }}></View>;
            },
          }}
        />
        <Stack.Screen
          name="signup3"
          component={SignUp3}
          options={{
            headerShown: true,
            headerTitle: "Back",
            headerBackground: () => {
              <View style={{ backgroundColor: "#fff" }}></View>;
            },
          }}
        />
        <Stack.Screen
          name="signup4"
          component={SignUp4}
          options={{
            headerShown: true,
            headerTitle: "Back",
            headerBackground: () => {
              <View style={{ backgroundColor: "#fff" }}></View>;
            },
          }}
        />
        <Stack.Screen
          name="signup5"
          component={SignUp5}
          options={{
            headerShown: true,
            headerTitle: "Back",
            headerBackground: () => {
              <View style={{ backgroundColor: "#fff" }}></View>;
            },
          }}
        />
        <Stack.Screen
          name="confirmation"
          component={Confirmation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="resetpassword"
          component={ResetPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="verification"
          component={Verification}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="newpassword"
          component={NewPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="votebucket"
          component={VoteBucket}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="editprofile"
          component={EditProfile}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="buyvote"
          component={BuyVote}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="comment"
          component={Comments}
          options={{
            headerShown: true,
            headerBackground: () => {
              <View style={{ backgroundColor: "#fff" }}></View>;
            },
          }}
        />
        <Stack.Screen
          name="carddetails"
          component={CardDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="terms"
          component={TermsAndConditions}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="faq"
          component={FAQ}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      {isAuth ? <Footer /> : null}
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({});
