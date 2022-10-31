import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";


type Props = {}

export default function SignIn({ }: Props) {
  const navigate = useNavigate();
  return (

    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5   titleSignIn">Sign In</h5>
              <h3>Welcome to Airbnb</h3>
              <form>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="rememberPasswordCheck" />
                  <label className="form-check-label" htmlFor="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>
                <div className="d-grid">
                  <button className="  btn-login  fw-bold" type="submit">Sign
                    In</button>             
                </div>
                <hr className="my-4" />
                <div className="d-grid">
                  <button className="  btn-login  fw-bold" type="submit">Sign
                    Up</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}