import React from "react";
import DatePicker from "react-datepicker";
import { inject, observer } from "mobx-react";

import "react-datepicker/dist/react-datepicker.css";
import "./datepicker-additional.css";
import { reaction } from "mobx";

@inject(["store"])
@observer
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.dateReaction = reaction(
      () => this.props.store.startDate,
      (notifications, reaction) => {
        if (this.props.store.startDate !== null) {
          if (this.props.start == true) {
            this.setState({ date: new Date(this.props.store.startDate) });
          } else {
            this.setState({ date: new Date(this.props.store.endDate) });
          }
        }
      }
    );
  }

  handleChange = (date) => {
    this.setState({ date: date });
    console.log(date, "THIS IS DATE");
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
