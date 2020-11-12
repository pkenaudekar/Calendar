import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchYears } from '../actions';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class TabContent extends Component {
  componentDidMount() {
    this.props.fetchYears();
  }

  renderTabContent() {
    return this.props.years.map((months) => {
      if (months.monthname === this.props.month) {
        return months.date.map((days) => {
          return (
            <React.Fragment key={days.day}>
              <div
                className="center col s1 offset-s2"
                style={{
                  textAlign: 'center',
                  fontSize: '1.0vw',
                  backgroundColor:
                    days.dayoftheweek === 'Sunday' ? '#891c1c' : 'Grey',
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
                  <b style={{ fontSize: '1.8vw' }}>{days.day}</b>
                </div>
              </div>
            </React.Fragment>
          );
        });
      }
    });
  }

  render() {
    //console.log(this.props.years);
    return (
      <React.Fragment>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '7vw 7vw 7vw 7vw 7vw 7vw 7vw',
            gridTemplateRows: '7vw 7vw 7vw 7vw 7vw',
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
