import React from 'react';
import Tabs from './components/UILibrary/Tabs';
import Tab from './components/UILibrary/Tab';
import TabLinks from './components/UILibrary/TabLinks';
import TabLink from './components/UILibrary/TabLink';
import SingleDynamicContainer from './components/UILibrary/SingleDynamicContainer';
import SampleTable from './components/SampleTable';
import AutoComplete from './components/UILibrary/AutoComplete';
import MultiSelectDropdown from './components/UILibrary/MultiSelectDropdown';

import './css/index.scss';

function lazyComponent() {
  let SampleComponent = React.lazy(() => import('./components/SampleComponent')
  );
  SampleComponent = React.createElement(SampleComponent);
  SingleDynamicContainer.loadComponent(SampleComponent);
}

function getResults(x) {
  const list = ['arun', 'ramya', 'ram', 'wk'];
  const p = new Promise(function(resolve, reject) {
      setTimeout(function() {
          if (!x || x === '') {
              resolve(list);
              return;
          }
          const results = list.filter(value => {
              if (value.search(x) !== -1) {
                  return true;
              }
              return false;
          });
          resolve(results);
      }, 1000);
  });

  return p;
}

const App = () => (
  <div className="container">
        <Tabs>
          <TabLinks>
            <TabLink id="0">Table</TabLink>
            <TabLink id="1">AutoComplete</TabLink>
            <TabLink id="2">MultiSelectDropdown</TabLink>
          </TabLinks>
          <Tab id="0" name="Tab-1">
            {/* eslint-disable-next-line */}
            <a onClick={lazyComponent} >Test Dynamic container</a>
            <SingleDynamicContainer initial={<SampleTable />} />
          </Tab>
          <Tab id="1" name="Tab-2">
            <h2>Welcome to Tab 2</h2>
             <AutoComplete getResults={getResults} />
          </Tab>
          <Tab id="2" name="Tab-3">
            <h2>Welcome to Tab 2</h2>
             <MultiSelectDropdown getResults={getResults} />
          </Tab>
        </Tabs>
  </div>
);

export default App;
