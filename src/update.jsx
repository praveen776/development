import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Update extends Component {
  onSubmit = (e) => {
    console.log(e);
    axios.post('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:9002/update_company_profile', {
      name: e.name,
      address: e.Address,
      city: e.city,
      country: e.country,
      phone: e.phone,
      country_code: e.country_code,
      client_id: e.client_id,
      state: e.state,
      zipcode: e.zip

    }, {
      headers: {
        Authorization: "O5mGIP3VNia0JvPH2IBiwA=="
      }
    })
      .then(function (response) {
        console.log(response);
        if(response.data.status === 1){
          toast.success(response.data.message, {containerId: 'success',duration : 1000})
        }

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container">
        <ToastContainer containerId={'success'} />
        <div className="row">
          <div className="col-md-12">
            <div className="">
              <h4 className="text-center">Update</h4>
              <Formik
                initialValues={{
                  name: '',
                  Address: '',
                  city: '',
                  country: '',
                  phone: '',
                  country_code: '',
                  client_id: '',
                  state: '',
                  zip:''
                }}
                onSubmit={this.onSubmit}
                validationSchema={Yup.object().shape({
                  name: Yup.string().required("name is required"),
                  Address: Yup.string().required("Address is required"),
                  state: Yup.string().required("state is required"),
                  country: Yup.string().required("country is required"),
                  phone: Yup.string().required("phone is required"),
                  country_code: Yup.string().required("country code is required"),
                  client_id: Yup.string().required("client id is required"),
                  city: Yup.string().required("City is required"),
                  zip: Yup.string().required("Zip code is required")
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
                          <label>Name</label>
                          <input
                            name="name"
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter Name"
                            className={
                              errors.name && touched.name
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.name && touched.name && (
                            <span className="error-msg">{errors.name}</span>
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
                          <label>city</label>
                          <input
                            name="city"
                            type="text"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter city"
                            className={
                              errors.city && touched.city
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.city && touched.city && (
                            <span className="error-msg">{errors.city}</span>
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
                          <label>client id</label>
                          <input
                            name="client_id"
                            type="text"
                            value={values.client_id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter client id"
                            className={
                              errors.client_id && touched.client_id
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.client_id && touched.client_id && (
                            <span className="error-msg">{errors.client_id}</span>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>state</label>
                          <input
                            name="state"
                            type="text"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter state name"
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
                          <label>Zip code</label>
                          <input
                            name="zip"
                            type="text"
                            value={values.zip}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter Zip code"
                            className={
                              errors.zip && touched.zip
                                ? "form-control text-input error"
                                : "form-control"
                            }
                          />
                          {errors.zip && touched.zip && (
                            <span className="error-msg">{errors.zip}</span>
                          )}
                        </div>


                      </div>
                      <div className="text-center">
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

export default Update;
