import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from 'moment';
import axios from 'axios';

class Register extends Component {

  state = {
    incorporation_date: new Date(),
    start_date: new Date(),
    end_date: new Date()
  };

  handleChange = date => {
    this.setState({
      incorporation_date: date
    });
    console.log()
  };
  handleEndDate = date =>{
    this.setState({
      end_date: date
    });
  }
  handleStartDate = date =>{
    this.setState({
      start_date: date
    });
  }

  onSubmit = (e) => {
    console.log(e)
    axios.post('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:9002/register_new_company',  {
      entity_name: e.CompanyName,
      address: e.Address,
      state:e.state,
      country:e.country,
      email:e.email,
      phone:e.phone,
      home_currency:e.home_currency,
      country_code:e.country_code,
      entity_number:e.entity_number,
      entity_type:e.entity_type,
      incorporation_date:moment(this.state.incorporation_date).format('YYYY-MM-DD'),
      principle_activities:e.principle_activities,
      first_name:e.first_name,
      last_name:e.last_name,
      company_email:[e.company_email , e.alt_email],
      company_phone:[e.company_phone,e.alt_phone],
      password:e.password,
      plan_id:e.plan_id,
      subscription_start_date : moment(this.state.startDate).format('YYYY-MM-DD'),
      subscription_end_date : moment(this.state.end_date).format('YYYY-MM-DD')
    }, {
    headers: { 
      Authorization: "O5mGIP3VNia0JvPH2IBiwA=="
     }
})
  
      .then(function (response) {
        console.log(response);
      
      })
      .catch(function (error) {
        console.log(error);
      });

  }
 
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="">
              <h4 className="text-center">Register</h4>
              <Formik
                initialValues={{
                  CompanyName: '',
                  Address: '',
                  state: '',
                  country: '',
                  email: '',
                  phone: '',
                  home_currency: '',
                  country_code: '',
                  entity_number: '',
                  entity_type: '',
                  principle_activities: '',
                  first_name: '',
                  last_name: '',
                  company_email: '',
                  alt_email: '',
                  company_phone: '',
                  alt_phone: '',
                  password: '',
                  plan_id: '',

                }}
                onSubmit={this.onSubmit}
                validationSchema={Yup.object().shape({
                  CompanyName: Yup.string().required("Company name is required"),
                  Address: Yup.string().required("Address is required"),
                  state: Yup.string().required("state is required"),
                  country: Yup.string().required("country is required"),
                  email: Yup.string().required("email is required"),
                  phone: Yup.string().required("phone is required"),
                  home_currency: Yup.string().required("home currency is required"),
                  country_code: Yup.string().required("country code is required"),
                  entity_number: Yup.string().required("entity number is required"),
                  entity_type: Yup.string().required("entity type is required"),
                  principle_activities: Yup.string().required("principle activities is required"),
                  first_name: Yup.string().required("first name is required"),
                  last_name: Yup.string().required("last name is required"),
                  company_email: Yup.string().required("company email is required"),
                  alt_email: Yup.string().required("alternate company email is required"),
                  company_phone: Yup.string().required("company phone is required"),
                  alt_phone: Yup.string().required("alt phone is required"),
                  password: Yup.string().required("password is required"),
                  plan_id: Yup.string().required("plan id is required"),

                })}
              >
                {props => {
                  const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="row">

                        <div className="col-md-6 mb-3">
                          <label>Company Name</label>
                          <input
                            name="CompanyName"
                            type="text"
                            value={values.CompanyName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter Company Name"
                            className={
                              errors.CompanyName && touched.CompanyName
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.CompanyName && touched.CompanyName && (
                            <span className="error-msg">{errors.CompanyName}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>Address</label>
                          <input
                            name="Address"
                            type="text"
                            value={values.Address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter Address"
                            className={
                              errors.Address && touched.Address
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.Address && touched.Address && (
                            <span className="error-msg">{errors.Address}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>State</label>
                          <input
                            name="state"
                            type="text"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter State"
                            className={
                              errors.state && touched.state
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.state && touched.state && (
                            <span className="error-msg">{errors.state}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>country</label>
                          <input
                            name="country"
                            type="text"
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter country name"
                            className={
                              errors.country && touched.country
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.country && touched.country && (
                            <span className="error-msg">{errors.country}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>Email</label>
                          <input
                            name="email"
                            type="text"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter email name"
                            className={
                              errors.email && touched.email
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.email && touched.email && (
                            <span className="error-msg">{errors.email}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>phone</label>
                          <input
                            name="phone"
                            type="text"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter phone number"
                            className={
                              errors.phone && touched.phone
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.phone && touched.phone && (
                            <span className="error-msg">{errors.phone}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>home currency</label>
                          <input
                            name="home_currency"
                            type="text"
                            value={values.home_currency}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter home currency"
                            className={
                              errors.home_currency && touched.home_currency
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.home_currency && touched.home_currency && (
                            <span className="error-msg">{errors.home_currency}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>country_code</label>
                          <input
                            name="country_code"
                            type="text"
                            value={values.country_code}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter country code"
                            className={
                              errors.country_code && touched.country_code
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.country_code && touched.country_code && (
                            <span className="error-msg">{errors.country_code}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>Entity number</label>
                          <input
                            name="entity_number"
                            type="text"
                            value={values.entity_number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter entity number"
                            className={
                              errors.entity_number && touched.entity_number
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.entity_number && touched.entity_number && (
                            <span className="error-msg">{errors.entity_number}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>Entity Type</label>
                          <input
                            name="entity_type"
                            type="text"
                            value={values.entity_type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter Entity type"
                            className={
                              errors.entity_type && touched.entity_type
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.entity_type && touched.entity_type && (
                            <span className="error-msg">{errors.entity_type}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>Incorporation date</label>
                          <DatePicker
                            selected={this.state.incorporation_date}
                            onChange={this.handleChange}
                          />
                         
                        
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>principle activities</label>
                          <input
                            name="principle_activities"
                            type="text"
                            value={values.principle_activities}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter principle activities"
                            className={
                              errors.principle_activities && touched.principle_activities
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.principle_activities && touched.principle_activities && (
                            <span className="error-msg">{errors.principle_activities}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>first name</label>
                          <input
                            name="first_name"
                            type="text"
                            value={values.first_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter first name"
                            className={
                              errors.first_name && touched.first_name
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.first_name && touched.first_name && (
                            <span className="error-msg">{errors.first_name}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>last name</label>
                          <input
                            name="last_name"
                            type="text"
                            value={values.last_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter last name"
                            className={
                              errors.last_name && touched.last_name
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.last_name && touched.last_name && (
                            <span className="error-msg">{errors.last_name}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>company_email</label>
                          <input
                            name="company_email"
                            type="text"
                            value={values.company_email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter company email"
                            className={
                              errors.company_email && touched.company_email
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.company_email && touched.company_email && (
                            <span className="error-msg">{errors.company_email}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>Alternate email</label>
                          <input
                            name="alt_email"
                            type="text"
                            value={values.alt_email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter alt email"
                            className={
                              errors.alt_email && touched.alt_email
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.alt_email && touched.alt_email && (
                            <span className="error-msg">{errors.alt_email}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>company phone</label>
                          <input
                            name="company_phone"
                            type="text"
                            value={values.company_phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter company phone"
                            className={
                              errors.company_phone && touched.company_phone
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.company_phone && touched.company_phone && (
                            <span className="error-msg">{errors.company_phone}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>Alternate phone</label>
                          <input
                            name="alt_phone"
                            type="text"
                            value={values.alt_phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter Alternate phone"
                            className={
                              errors.alt_phone && touched.alt_phone
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.alt_phone && touched.alt_phone && (
                            <span className="error-msg">{errors.alt_phone}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>password</label>
                          <input
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter password"
                            className={
                              errors.password && touched.password
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.password && touched.password && (
                            <span className="error-msg">{errors.password}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>plan id</label>
                          <input
                            name="plan_id"
                            type="text"
                            value={values.plan_id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter plan id"
                            className={
                              errors.plan_id && touched.plan_id
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.plan_id && touched.plan_id && (
                            <span className="error-msg">{errors.plan_id}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>subscript start date</label>
                          <DatePicker
                            selected={this.state.start_date}
                            onChange={this.handleStartDate}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>subscript end date</label>
                          <DatePicker
                            selected={this.state.end_date}
                            onChange={this.handleEndDate}
                          />
                        </div>
                      </div>
                      <div className="text-center mb-3">
                        <button className="btn btn-primary" type="submit">
                          Submit
                      </button>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
