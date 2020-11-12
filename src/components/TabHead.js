import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import TabContent from './TabContent';

class TabHead extends Component {
  componentDidMount() {
    // Initialise Tab
    M.Tabs.init(this.Tabs);
  }

  render() {
    // This section displays the Months in the tabs horizontally along with its respective Tab Content,
    // they are both connected with href.
    return (
      <React.Fragment>
        <ul
          ref={(Tabs) => {
            this.Tabs = Tabs;
          }}
          id="tabs-swipe-demo"
          className="tabs z-depth-2 hoverable center-align"
        >
          <li className="tab col s3">
            <a href="#1">
              <b style={{ fontSize: '1vw' }}>January</b>
            </a>
          </li>
          <li className="tab col s3">
            <a href="#2">
              <b style={{ fontSize: '1vw' }}>February</b>
            </a>
          </li>
          <li className="tab col s3">
            <a href="#3">
              <b style={{ fontSize: '1vw' }}>March</b>
            </a>
          </li>
          <li className="tab col s3">
            <a href="#4">
              <b style={{ fontSize: '1vw' }}>April</b>
            </a>
          </li>
          <li className="tab col s3">
            <a href="#5">
              <b style={{ fontSize: '1vw' }}>May</b>
            </a>
          </li>
          <li className="tab col s3">
            <a href="#6">
              <b style={{ fontSize: '1vw' }}>June</b>
            </a>
          </li>
          <li className="tab col s3">
            <a href="#7">
              <b style={{ fontSize: '1vw' }}>July</b>
            </a>
          </li>
          <li className="tab col s3">
            <a href="#8">
              <b style={{ fontSize: '1vw' }}>August</b>
            </a>
          </li>
          <li className="tab col s3">
            <a href="#9">
              <b style={{ fontSize: '1vw' }}>September</b>
            </a>
          </li>
          <li className="tab col s3">
            <a href="#10">
              <b style={{ fontSize: '1vw' }}>October</b>
            </a>
          </li>
          <li className="tab col s3">
            <a href="#11">
              <b style={{ fontSize: '1vw' }}>November</b>
            </a>
          </li>
          <li className="tab col s3">
            <a href="#12">
              <b style={{ fontSize: '1vw' }}>December</b>
            </a>
          </li>
        </ul>

        <div id="1" className="col s12 " align="center">
          <p style={{ fontSize: '2.2vw' }}>
            <b>January 2019</b>
          </p>
          <TabContent month={'January'} />
        </div>
        <div id="2" className="col s12" align="center">
          <p style={{ fontSize: '2.2vw' }}>
            <b>February 2019</b>
          </p>
          <TabContent month={'February'} />
        </div>
        <div id="3" className="col s12" align="center">
          <p style={{ fontSize: '2.2vw' }}>
            <b>March 2019</b>
          </p>
          <TabContent month={'March'} />
        </div>
        <div id="4" className="col s12" align="center">
          <p style={{ fontSize: '2.2vw' }}>
            <b>April 2019</b>
          </p>
          <TabContent month={'April'} />
        </div>
        <div id="5" className="col s12" align="center">
          <p style={{ fontSize: '2.2vw' }}>
            <b>May 2019</b>
          </p>
          <TabContent month={'May'} />
        </div>
        <div id="6" className="col s12" align="center">
          <p style={{ fontSize: '2.2vw' }}>
            <b>June 2019</b>
          </p>
          <TabContent month={'June'} />
        </div>
        <div id="7" className="col s12" align="center">
          <p style={{ fontSize: '2.2vw' }}>
            <b>July 2019</b>
          </p>
          <TabContent month={'July'} />
        </div>
        <div id="8" className="col s12" align="center">
          <p style={{ fontSize: '2.2vw' }}>
            <b>August 2019</b>
          </p>
          <TabContent month={'August'} />
        </div>
        <div id="9" className="col s12" align="center">
          <p style={{ fontSize: '2.2vw' }}>
            <b>September 2019</b>
          </p>
          <TabContent month={'September'} />
        </div>
        <div id="10" className="col s12" align="center">
          <p style={{ fontSize: '2.2vw' }}>
            <b>October 2019</b>
          </p>
          <TabContent month={'October'} />
        </div>
        <div id="11" className="col s12" align="center">
          <p style={{ fontSize: '2.2vw' }}>
            <b>November 2019</b>
          </p>
          <TabContent month={'November'} />
        </div>
        <div id="12" className="col s12" align="center">
          <p style={{ fontSize: '2.2vw' }}>
            <b>December 2019</b>
          </p>
          <TabContent month={'December'} />
        </div>
      </React.Fragment>
    );
  }
}

export default TabHead;
