import React from "react";
import { shallow, mount } from "enzyme";
import TabLink from "../components/UILibrary/TabLink";
import Tabs from "../components/UILibrary/Tabs";

describe("A TabLink Test Suite", function() {
  it("should have active class", function() {
    const markup = shallow(
      <TabLink id="1" activeId="1">
        Tab-1
      </TabLink>
    );
    expect(markup.find("li")).toHaveLength(1);
    expect(markup.hasClass("tab-link")).toBe(true);
    expect(markup.hasClass("active-tab")).toBe(true);
  });
  it("should not have active class", function() {
    const markup = shallow(
      <TabLink id="1" activeId="2">
        Tab-1
      </TabLink>
    );
    expect(markup.find("li")).toHaveLength(1);
    expect(markup.hasClass("tab-link")).toBe(true);
    expect(markup.hasClass("active-tab")).toBe(false);
  });
  it("should have active class after click", function() {
    const markup = mount(
      <Tabs>
        <TabLink id="1" activeId="2">
          Tab-1
        </TabLink>
      </Tabs>
    );
    expect(markup.find("li")).toHaveLength(1);
    expect(markup.find("li").hasClass("tab-link")).toBe(true);
    expect(markup.find("li").hasClass("active-tab")).toBe(false);
    markup.find("li").simulate("click");
    expect(markup.find("li").hasClass("active-tab")).toBe(true);
  });
});
