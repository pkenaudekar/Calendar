import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import TabContent from './TabContent';
import { connect } from 'react-redux';
import { fetchYears } from '../actions';

class TabHead extends Component {
  componentDidMount() {
    this.props.fetchYears();

    // Initialise Tab
    M.Tabs.init(this.Tabs);
  }

  liTag(tabNo, month) {
    return (
      <li className="tab col s3">
        <a href={`#${tabNo}`}>
          <b style={{ fontSize: '1vw' }}>{month}</b>
        </a>
      </li>
    );
  }

  divTag(id, month) {
    return (
      <div id={id} className="col s12 " align="center">
        <p style={{ fontSize: '2.2vw' }}>
          <b>{month} 2019</b>
        </p>
        <TabContent month={month} />
      </div>
    );
  }

  render() {
    // This section displays the Months in the tabs horizontally along with its respective Tab Content,
    // they are both connected with href.
    //console.log(this.props.years);
    return (
      <React.Fragment>
        <ul
          ref={(Tabs) => {
            this.Tabs = Tabs;
          }}
          id="tabs-swipe-demo"
          className="tabs z-depth-2 hoverable center-align"
        >
          {this.props.years.map((month) => {
            this.liTag(month.id, month.monthname);
          })}
          {this.liTag('1', 'January')}
          {this.liTag('2', 'February')}
          {this.liTag('3', 'March')}
          {this.liTag('4', 'April')}
          {this.liTag('5', 'May')}
          {this.liTag('6', 'June')}
          {this.liTag('7', 'July')}
          {this.liTag('8', 'August')}
          {this.liTag('9', 'September')}
          {this.liTag('10', 'October')}
          {this.liTag('11', 'November')}
          {this.liTag('12', 'December')}
        </ul>

        {this.divTag('1', 'January')}
        {this.divTag('2', 'February')}
        {this.divTag('3', 'March')}
        {this.divTag('4', 'April')}
        {this.divTag('5', 'May')}
        {this.divTag('6', 'June')}
        {this.divTag('7', 'July')}
        {this.divTag('8', 'August')}
        {this.divTag('9', 'September')}
        {this.divTag('10', 'October')}
        {this.divTag('11', 'November')}
        {this.divTag('12', 'December')}
      </React.Fragment>
    );
  }
}

function mapStateToProps({ years }) {
  return { years };
}

export default connect(mapStateToProps, { fetchYears })(TabHead);
