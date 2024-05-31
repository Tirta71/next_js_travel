"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [terms, setTerms] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!terms) {
      toast.fire({
        icon: "error",
        title: "You must agree with the Terms and Conditions.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("name", `${firstName} ${lastName}`);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone_number", phoneNumber);
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      const response = await axios.post(`${apiUrl}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast
        .fire({
          icon: "success",
          title: response.data.message,
        })
        .then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        });
    } catch (err) {
      console.error("Registration failed:", err);
      toast.fire({
        icon: "error",
        title: "Registration failed. Please try again.",
      });
    }
  };

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
              <form onSubmit={handleRegister}>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phone_number"
                    className="form-control"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Avatar</label>
                  <input
                    type="file"
                    name="avatar"
                    className="mb-5"
                    onChange={(e) =>
                      setAvatar(e.target.files ? e.target.files[0] : null)
                    }
                  />
                </div>
                <div className="form-group mt-12">
                  <label>
                    <input
                      type="checkbox"
                      name="terms"
                      checked={terms}
                      onChange={(e) => setTerms(e.target.checked)}
                    />{" "}
                    I agree with the <a href="#">Terms and Conditions</a>.
                  </label>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Sign up"
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
