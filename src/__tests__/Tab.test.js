import React from "react";
import { shallow } from "enzyme";
import Tab from "../components/UILibrary/Tab";

describe("A Tab Test Suite", function() {
  it("should render children when active", function() {
    const markup = shallow(
      <Tab id="1" activeId="1">
        <div>Test1</div>
      </Tab>
    );
    expect(markup.find("div")).toHaveLength(2);
    expect(markup.hasClass("tab-body")).toBe(true);
  });
  it("should not render children when inactive", function() {
    const markup = shallow(
      <Tab id="1" activeId="2">
        <div>Test1</div>
      </Tab>
    );
    expect(markup.find("div")).toHaveLength(1);
    expect(markup.hasClass("tab-body")).toBe(true);
  });
});
