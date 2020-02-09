import React, { Component } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);

class DatePickerInput extends Component {
    render() {
        return (
            <div>
                <DatePicker
                    className="form-control"
                    id="fromDateStats"
                    name="fromDateStats"
                    placeholder="검색날짜"
                    dateFormat="yyyy-MM-dd"
                     selected={this.props.dateSearch}
                     onChange={this.props.handleDate}
                    minDate={new Date('2019-09-01')}
                    maxDate={new Date('2019-09-30')}
                    locale="ko"
                />
            </div>
        );
    }
}

export default DatePickerInput;