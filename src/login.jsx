import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      user_id: null,
      client_id: null,
      role_id: null,
      user_name: null,
      email: null,
      phone: null,
      user_image: null,
      company_name: null
    }
  }
 


  onSubmit = (e) => {
    const self = this;
    console.log(e)
    axios.post('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:9002/login', {
      email_id: e.email,
      password: e.password
    }, {
      headers: {
        Authorization: "O5mGIP3VNia0JvPH2IBiwA=="
      }
    })

      .then(function (res) {
        self.setState({ 
          loggedIn: true, 
          user_id: res.data.user_id, 
          client_id: res.data.client_id, 
          role_id: res.data.role_id, 
          user_name: res.data.user_name, 
          email :res.data.email,
          phone :res.data.phone,
          user_image :res.data.user_image ,
          company_name :res.data.company_name 
        })
        console.log(res);

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="content">
              <h4>Login</h4>
              <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                onSubmit={this.onSubmit}
                validationSchema={Yup.object().shape({
                  email: Yup.string().required("Email is required"),
                  password: Yup.string().required("Password is required")
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
                      <div className="form-group">
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
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          name="password"
                          type="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter Password"
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
                      <button className="btn btn-primary" type="submit">
                        Login
                      </button>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
          <div className="col-md-4">
            {this.state.loggedIn ?
           <div className="content">
           <h4>Details</h4>
           <ul>
           <li>user_id : {this.state.user_id}</li>
             <li>client_id : {this.state.client_id}</li>
             <li>role_id :{this.state.role_id} </li>
             <li>user_name : {this.state.user_name}</li>
             <li>email : {this.state.email}</li>
             <li>phone : {this.state.phone}</li>
             <li>company_name : {this.state.company_name}</li>
           </ul>
         </div>:null 
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
