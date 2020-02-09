import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/index";
import Tabs from "./src/components/UILibrary/Tabs";
import Tab from "./src/components/UILibrary/Tab";
import TabLinks from "./src/components/UILibrary/TabLinks";
import TabLink from "./src/components/UILibrary/TabLink";
import ErrorBoundary from "./src/components/ErrorBoundary";
import "./css/index.scss";
const App = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <ErrorBoundary>
          <Tabs>
            <TabLinks>
              <TabLink id="0">Tab-1</TabLink>
              <TabLink id="1">Tab-2</TabLink>
            </TabLinks>
            <Tab id="0" name="Tab-1">
              <h2>Welcome to Tab 1</h2>
            </Tab>
            <Tab id="1" name="Tab-2">
              <h2>Welcome to Tab 2</h2>
            </Tab>
          </Tabs>
        </ErrorBoundary>
      </Provider>
    </div>
  );
};

export default App;
