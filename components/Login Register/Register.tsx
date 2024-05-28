import React from "react";

const Register: React.FC = () => {
  return (
    <>
      <div id="fsignUp" className="modal fade">
        <div className="modal-dialog modal-login">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Member Registration</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <input type="checkbox" name="terms" /> I agree with the{" "}
                    <a href="#">Terms and Conditions</a>.
                  </label>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    defaultValue="Sign up"
                    className="btn btn-primary btn-block btn-lg"
                  />
                </div>
                <div className="clearfix" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
