"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ContentDetailProfile from "./ContentDetailProfile";
import Swal from "sweetalert2";
import Loaders from "../utils/Loaders";

const DetailProfile = () => {
  // Pastikan API URL tersedia
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          Swal.fire({
            title: "Error!",
            text: "No token found. Please login first.",
            icon: "error",
            confirmButtonText: "OK",
          });
          return;
        }

        const response = await axios.get(`${apiUrl}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to fetch user data. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div className="content-wrapper">
      <section id="subheader">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-heading">Detail Profile</h1>
            </div>
          </div>
        </div>
      </section>

      {user ? <ContentDetailProfile user={user} /> : <Loaders />}
    </div>
  );
};

export default DetailProfile;
