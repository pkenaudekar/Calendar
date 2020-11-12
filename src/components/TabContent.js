import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchYears } from '../actions';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

// This component handles al the data under tabs.

class TabContent extends Component {
  componentDidMount() {
    this.props.fetchYears();
  }

  renderEmptyDiv() {
    return (
      <div
        className="center col s1 offset-s2"
        style={{
          backgroundColor: 'Grey',
          borderRadius: '15px',
        }}
      />
    );
  }

  renderDateDiv(days, months) {
    return (
      <div
        className="center col s1 offset-s2"
        style={{
          textAlign: 'center',
          fontSize: '0.9vw',
          backgroundColor: days.dayoftheweek === 'Sunday' ? '#891c1c' : 'Grey',
          borderRadius: '15px',
          borderStyle: days.holiday === 'true' ? 'solid' : '',
          borderColor: days.holiday === 'true' ? '#fccb00' : '',
        }}
        // A Toast with details of the holiday will be shown on click only if "days.holiday === 'true'" condition
        // i.e it must be marked a holiday
        onClick={
          days.holiday === 'true'
            ? () =>
                M.toast(
                  {
                    html: `${days.dayoftheweek}, ${days.day} ${months.monthname} 2019 <br/> Is ${days.details}`,
                  },
                  4000
                )
            : undefined
        }
      >
        <div>
          <b>
            <br />
            {days.dayoftheweek}
          </b>
        </div>
        <div>
          <b style={{ fontSize: '1.4vw' }}>{days.day}</b>
        </div>
      </div>
    );
  }

  renderTabContent() {
    return this.props.years.map((months) => {
      if (months.monthname === this.props.month) {
        return months.date.map((days) => {
          // Adds empty box's before date 1 of every month to adjust Sunday as the 1st
          // Column of calander
          if (days.day === '1') {
            switch (days.dayoftheweek) {
              case 'Monday':
                // For Day 1 Monday 1 empty box followed by day 1 box
                return (
                  <React.Fragment key={days.day}>
                    {this.renderEmptyDiv()}
                    {this.renderDateDiv(days, months)}
                  </React.Fragment>
                );
              case 'Tuesday':
                // For Day 1 Tuesday 2 empty box followed by day 1 box
                return (
                  <React.Fragment key={days.day}>
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderDateDiv(days, months)}
                  </React.Fragment>
                );
              case 'Wednesday':
                // For Day 1 Wednesday 3 empty box followed by day 1 box
                return (
                  <React.Fragment key={days.day}>
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderDateDiv(days, months)}
                  </React.Fragment>
                );
              case 'Thursday':
                // For Day 1 Thursday 4 empty box followed by day 1 box
                return (
                  <React.Fragment key={days.day}>
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderDateDiv(days, months)}
                  </React.Fragment>
                );
              case 'Friday':
                // For Day 1 Friday 5 empty box followed by day 1 box
                return (
                  <React.Fragment key={days.day}>
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderDateDiv(days, months)}
                  </React.Fragment>
                );
              case 'Saturday':
                // For Day 1 Saturday 6 empty box followed by day 1 box
                return (
                  <React.Fragment key={days.day}>
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderEmptyDiv()}
                    {this.renderDateDiv(days, months)}
                  </React.Fragment>
                );
              default:
                // For Day 1 Sunday 0 empty box followed by day 1 box
                return (
                  <React.Fragment key={days.day}>
                    {this.renderDateDiv(days, months)}
                  </React.Fragment>
                );
            }
          }
          // For all other days except day 1 of the month
          return (
            <React.Fragment key={days.day}>
              {this.renderDateDiv(days, months)}
            </React.Fragment>
          );
        });
      }
    });
  }

  render() {
    //console.log(this.props.years);
    // This section displays the content of the respective months, this is done by pulling data from a JSON Server
    // Runing simultaneously at localhosts:3001 while the client is running on localhost:3000
    return (
      <React.Fragment>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '6vw 6vw 6vw 6vw 6vw 6vw 6vw',
            gridTemplateRows: '6vw 6vw 6vw 6vw 6vw 6vw',
            justifyContent: 'center',
            alignContent: 'center',
            gridGap: '2px',
            paddingTop: '1vh',
          }}
        >
          {this.renderTabContent()}
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ years }) {
  return { years };
}

export default connect(mapStateToProps, { fetchYears })(TabContent);
