import React from "react";

class BadgeForm extends React.Component {
  /*
  state = {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: ""
  };
  */

  // handleChange = e => {
  /*
    console.log({
      name: e.target.name,
      value: e.target.value
    });
    */
  /*
    this.setState({
      [e.target.name]: e.target.value
    });
    */
  // };

  handleClick = e => {
    console.log("Button was clicked");
  };

  /*
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    console.log("Form was submitted");
  };
  */

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        {/* <form onSubmit={this.handleSubmit}> */}
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              // onChange={this.handleChange}
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              // value={this.state.firstName} // tobe controlated
              value={this.props.formValues.firstName} // tobe controlated
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName} // tobe controlated
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email} // tobe controlated
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle} // tobe controlated
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter} // tobe controlated
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
