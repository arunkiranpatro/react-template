import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import Tabs from "./components/UILibrary/Tabs";
import Tab from "./components/UILibrary/Tab";
import TabLinks from "./components/UILibrary/TabLinks";
import TabLink from "./components/UILibrary/TabLink";
import AjaxContainer from "./components/UILibrary/AjaxContainer";
import ErrorBoundary from "./components/ErrorBoundary";
import SampleComponent from "./components/SampleComponent";

import { SET_COMPONENT } from "./store/constants";

import "./css/index.scss";

function lazyComponent() {
  const SampleTable = React.lazy(() => import("./components/SampleTable"));
  const component = (
    <Suspense fallback={<div>Loading...</div>}>
      <SampleTable />
    </Suspense>
  );
  store.dispatch({
    type: SET_COMPONENT,
    payload: { component: component }
  });
}
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
              <a onClick={lazyComponent}>Render Table in Ajax Component</a>
              <AjaxContainer initial={<SampleComponent />} />
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
