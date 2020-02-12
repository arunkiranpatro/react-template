import React from "react";
import { shallow } from "enzyme";
import Details from "../components/UILibrary/ReadOnlyData";

describe("A read only div suite", function() {
  it("should render with class name", function() {
    const markup = shallow(
      <Details label="test label" value="test" className="test" />
    );
    expect(markup.find("div")).toHaveLength(1);
    expect(markup.find("label")).toHaveLength(1);
    expect(markup.find("span")).toHaveLength(1);
    expect(markup.find("button")).toHaveLength(0);
    expect(markup.find("label").text()).toContain("test label");
    expect(markup.find("span").text()).toContain("test");
    expect(markup.hasClass("test")).toBe(true);
    expect(markup.find("span.field-value")).toHaveLength(1);
  });
  it("should render without class name", function() {
    const markup = shallow(<Details label="test label" value="test" />);
    expect(markup.find("div")).toHaveLength(1);
    expect(markup.find("label")).toHaveLength(1);
    expect(markup.find("span")).toHaveLength(1);
    expect(markup.find("button.cc-icon")).toHaveLength(0);
    expect(markup.find("label").text()).toContain("test label");
    expect(markup.find("span").text()).toContain("test");
    expect(markup.find("span.field-value")).toHaveLength(1);
  });
  it("should render without class name with ccicon", function() {
    const markup = shallow(
      <Details label="test label" value="test" ccicon="true" />
    );
    expect(markup.find("div")).toHaveLength(1);
    expect(markup.find("label")).toHaveLength(1);
    expect(markup.find("span")).toHaveLength(1);
    expect(markup.find("button")).toHaveLength(1);
    expect(markup.find("label").text()).toContain("test label");
    expect(markup.find("span").text()).toContain("test");
    expect(markup.find("span.field-value")).toHaveLength(1);
  });
  it("should render children", function() {
    const markup = shallow(
      <Details label="test label" ccicon="true">
        <div className="test-field">Test Children</div>
      </Details>
    );
    expect(markup.find("div")).toHaveLength(2);
    expect(markup.find("label")).toHaveLength(1);
    expect(markup.find("span")).toHaveLength(0);
    expect(markup.find("button")).toHaveLength(1);
    expect(markup.find("label").text()).toContain("test label");
    expect(markup.find("span.field-value")).toHaveLength(0);
    expect(markup.text()).toContain("Test Children");
    expect(markup.find("div.test-field")).toHaveLength(1);
  });
  it("should render children even it has value props", function() {
    const markup = shallow(
      <Details label="test label" ccicon="true" value="dummy">
        <div className="test-field">Test Children</div>
      </Details>
    );
    expect(markup.find("div")).toHaveLength(2);
    expect(markup.find("label")).toHaveLength(1);
    expect(markup.find("span")).toHaveLength(0);
    expect(markup.find("button")).toHaveLength(1);
    expect(markup.find("label").text()).toContain("test label");
    expect(markup.find("span.field-value")).toHaveLength(0);
    expect(markup.text()).toContain("Test Children");
    expect(markup.find("div.test-field")).toHaveLength(1);
  });
});
