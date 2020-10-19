import React from "react";
import { shallow } from "enzyme";
import HomeScreen from '../../src/screens/HomeScreen'
import Button from '../../src/components/Button'
import Logo from '../../src/components/Logo'
import { HomeBanner } from "../../src/styles/globalImages";
import { ImageBackground } from "react-native";



describe(HomeScreen, () => {

  const wrapper = shallow(
      <HomeScreen />
  );

  it("includes the Home banner image", () => {
    const banner = wrapper.find(ImageBackground).at(0);

    expect(banner.prop("source")).toBe(HomeBanner);
  });

  it("includes the logo image", () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  });

  it("includes the get started button", () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});