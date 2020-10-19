import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { HomeBanner } from "../styles/globalImages";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { GlobalStyles } from "../styles/globalStyles";

class Home extends Component {
  render() {
    return (
      <ImageBackground
        style={GlobalStyles.image}
        source={HomeBanner}
      >
        <Logo />
        <Button onPress={() => {}} title="Get Started" />
      </ImageBackground>
    );
  }
}

export default Home;
