import React from 'react';
import SidebarMenu from './components/SidebarMenu';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#EDF1F2" }}>
      <div className="row">
        <div className="col-3">
          <SidebarMenu />
        </div>
        <div className="col-9">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;
