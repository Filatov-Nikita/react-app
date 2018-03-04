import React, {Component} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux';
import {setDate} from '../AC'

 class Example extends Component {
  static defaultProps = {
    numberOfMonths: 2,
  };

  handleDayClick = (day) => {
    const {setDate, date} = this.props
    setDate(DateUtils.addDayToRange(day, date))
  }
  
  // handleResetClick = () => {
  //   this.setState(this.getInitialState());
  // }

  render() {
    const { from, to } = this.props.date;
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
        <div className="date-range">
            <DayPicker
                ref="daypicker"
                selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                onDayClick={ this.handleDayClick }
            />
            {selectedRange}
        </div>
    );
}
}

export default connect(state => ({date: state.dateRange}), {setDate})(Example)