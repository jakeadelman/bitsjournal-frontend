import React from "react";
import DatePicker from "react-datepicker";
import { inject, observer } from "mobx-react";

import "react-datepicker/dist/react-datepicker.css";
import "./datepicker-additional.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

@inject(["store"])
@observer
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  handleChange = (date) => {
    this.setState({ date: date });
  };

  componentDidUpdate(prevProps) {
    console.log("just updated");
    if (this.props.set == true) {
      console.log("not equal");
      if (this.props.start == true) {
        console.log("was true");
        let firstDate = this.state.date.toISOString();
        let multiDate = firstDate.split("T");
        this.props.store.startDate = multiDate[0] + "T00:00:00.000Z";
        this.props.store.date = "Custom";
      }
      if (this.props.start == false) {
        console.log("was false");
        let firstDate = this.state.date.toISOString();
        let multiDate = firstDate.split("T");
        this.props.store.endDate = multiDate[0] + "T24:00:00.000Z";
        console.log(this.props.store.endDate);
        this.props.store.date = "Custom";
      }
    }
  }

  render() {
    return (
      <DatePicker selected={this.state.date} onChange={this.handleChange} />
    );
  }
}
