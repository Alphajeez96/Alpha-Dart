import { shallowMount } from "@vue/test-utils";
import Pill from "~/components/Pill";

describe("Pill", () => {
  it("renders appropriately", () => {
    expect(shallowMount(Pill).html()).toMatchSnapshot();
  });

  it("Renders text", () => {
    const wrapper = shallowMount(Pill, {
      propsData: {
        text: "pill",
      },
    });

    const textSpan = wrapper.find("span");
    expect(textSpan.text()).toEqual("pill");
  });
});
