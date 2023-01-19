import React,{ useEffect, useState } from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function profile() {
    const [data, setData] = useState([]);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const user = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // console.log("ini tokennyaaaa=", token);
  
    // get Data
    useEffect(() => {
      axios
        .get(`/auth/user`, user)
        .then((res) => {
          console.log("get data succes");
          console.log(res.data);
          res.data && setData(res.data.data[0]);
        })
        .catch((err) => {
          console.log("get data fail");
          console.log(err);
        });
    }, []);
  
    // Update Data Profile
    const [photo, setPhoto] = useState(null);
    const [updateData, setUpdateData] = useState({
      email: data.email,
      fullname: data.fullname,
      phone: data.phone,
      city: data.city,
      address: data.address,
      postcode: data.postcode,
    });
  
    const handlePhotoChange = (e) => {
      setPhoto(e.target.files[0]);
      console.log(e.target.files[0]);
    };
  
    const handleChange = (e) => {
      setUpdateData({
        ...updateData,
        [e.target.name]: e.target.value,
      });
      console.log(data);
    };
  
    const users = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    };
  
    const handleData = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("fullname", updateData.fullname);
      formData.append("email", updateData.email);
      formData.append("phone", updateData.phone);
      formData.append("city", updateData.city);
      formData.append("address", updateData.address);
      formData.append("postcode", updateData.postcode);
      formData.append("photo", photo);
      console.log(formData);
      axios
        .put(`${process.env.REACT_APP_MY_API_KEY}/auth/update`, formData, users, {
          "content-type": "multipart/form-data",
        })
        .then((res) => {
          console.log("Update profile succes");
          console.log(res);
          window.location.reload(false);
          Swal.fire("Success", "Update profile success", "success");
        })
        .catch((err) => {
          console.log("Update data profile failed");
          console.log(err);
          Swal.fire("Warning", "Update profile failed", "error");
        });
    };
  
    //Logout
    const handleLogout = async () => {
      await localStorage.clear();
      Swal.fire("Logout", "Logout success", "success");
      navigate("/login");
    };
  
    //Update Photo Only
    const handleEditPhoto = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("photo", photo);
      console.log(formData, "data dari handle photo update");
      axios
        .put(
          `${process.env.REACT_APP_MY_API_KEY}/auth/edit-photo`,
          formData,
          users,
          {
            "content-type": "multipart/form-data",
          }
        )
        .then((res) => {
          console.log("update photo succes");
          console.log(res);
          window.location.reload(false);
          Swal.fire("Success", "Update photo profile success", "success");
        })
        .catch((err) => {
          console.log("update photo fail");
          console.log(err);
          Swal.fire("Warning", "Update photo profile failed", "error");
        });
    };
  return (
    <div>
      <div>
        ini nama 
      </div>
        <div>
            ini gambar
        </div>
        <div>
            keterangan lainnya
        </div>
    </div>
  )
}

export default profile
