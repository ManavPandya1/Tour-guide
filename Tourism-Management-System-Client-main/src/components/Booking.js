/*import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../styles/Booking.css';
import { useLocation } from "react-router-dom";


function Booking() {
  const [packages, setPackages] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const selectedDate = location.state.selectedDate;
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState({
    book_date: "",
    book_adult: 0,
    book_child: 0,
    book_cost: 0,
    book_user: "",
    book_pack: "",
    book_travellers: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/packages/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPackages(data);
        } else {
          console.error("Error fetching packages:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchData();
    pricegenerator();
  }, [bookingData.book_child, bookingData.book_adult]);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    const newValue = value < 0 ? 0 : value;
    setBookingData({
      ...bookingData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    console.log(selectedDate);
    e.preventDefault();

    const adults = parseInt(bookingData.book_adult, 10);
    const children = parseInt(bookingData.book_child, 10);
    const total = adults + children;
    console.log(total);

    if (total > selectedDate.rem_book) {
      window.alert(`No More Slots Are Available, Slots Available = ${selectedDate.rem_book}`);
    }
    else {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      bookingData.book_date = formattedDate;
      bookingData.book_pack = selectedDate._id;
      console.log(bookingData);

      navigate("/traveler", { state: { bookingData } });
    }

  };

  function pricegenerator() {
    bookingData.book_cost = 0;
    let cost = bookingData.book_adult * packages.package_price;
    cost = cost + bookingData.book_child * packages.package_price;
    bookingData.book_cost = cost;
  }

  return (
    <>
      <section className="vh-100">

          <div style={{backgroundColor:"white",width:"fit-content",padding:"20px",borderRadius:"10px",marginLeft:"37%",height:"100vh"}}>
                    <div>
                      <p style={{fontSize:"35px",textAlign:"center"}}>
                        Book
                      </p>

                      <form onSubmit={handleSubmit}>
                        <div style={{display:"flex",paddingTop:"50px",paddingBottom:"100px"}}>
                          <label htmlFor="book_adult" style={{fontSize:"25px",paddingRight:"50px"}}>
                            Adult
                          </label>
                          <input
                            type="number"
                            id="book_adult"
                            className="form-control"
                            name="book_adult"
                            value={bookingData.book_adult}
                            onChange={handleInputs}
                            required
                          />
                        </div>

                        <div style={{display:"flex",paddingBottom:"100px"}}>
                          <label htmlFor="book_child" style={{fontSize:"25px",paddingRight:"20px"}}>
                            Children
                          </label>
                          <input
                            type="number"
                            id="book_child"
                            className="form-control"
                            name="book_child"
                            value={bookingData.book_child}
                            onChange={handleInputs}
                            required
                          />
                        </div>

                        <div style={{display:"flex",paddingBottom:"20px"}}>
                          <label htmlFor="book_cost" style={{fontSize:"25px",paddingRight:"10px"}}>
                            Booking Cost
                          </label>
                          <input
                            type="number"
                            id="book_cost"
                            disabled
                            className="form-control"
                            name="book_cost"
                            value={
                              bookingData.book_cost ? bookingData.book_cost : 0
                            }
                            onChange={handleInputs}
                            required
                          />
                        </div>


                        <div style={{justifyContent:"center",marginLeft:"125px",marginTop:"50px"}} id="bookit">
                          <button className="btn-final"
                            type="submit"
                            style={{
                              backgroundColor: "rgb(0, 123, 255)",
                              textDecorationColor:"black",
                              fontSize: "1.25rem",
                              borderRadius: "5px",
                              borderWidth: "2px",
                              borderColor: "blue",
                              cursor: "pointer",
                              width:"100px",
                              height:"40px",
                              border:"none",
                              color:"white"
                            }}
                            data-content={
                              bookingData.book_cost ? bookingData.book_cost : 0
                            }
                          >Book</button>
                        </div>
                      </form>
            </div>
        </div>
      </section>
    </>
  );
}

export default Booking;*/

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../styles/Booking.css';
import { useLocation } from "react-router-dom";


function Booking() {
  const [packages, setPackages] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const selectedDate = location.state.selectedDate;
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState({
    book_date: "",
    book_adult: 0,
    book_child: 0,
    book_cost: 0,
    book_user: "",
    book_pack: "",
    book_travellers: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/packages/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPackages(data);
        } else {
          console.error("Error fetching packages:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchData();
    pricegenerator();
  }, [bookingData.book_child, bookingData.book_adult]);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    const newValue = value < 0 ? 0 : value;
    setBookingData({
      ...bookingData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    console.log(selectedDate);
    e.preventDefault();

    const adults = parseInt(bookingData.book_adult, 10);
    const children = parseInt(bookingData.book_child, 10);
    const total = adults + children;
    console.log(total);

    if (total > selectedDate.rem_book) {
      window.alert(`No More Slots Are Available, Slots Available = ${selectedDate.rem_book}`);
    }
    else {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      bookingData.book_date = formattedDate;
      bookingData.book_pack = selectedDate._id;
      console.log(bookingData);

      navigate("/traveler", { state: { bookingData } });
    }

  };

  function pricegenerator() {
    bookingData.book_cost = 0;
    let cost = bookingData.book_adult * packages.package_price;
    cost = cost + bookingData.book_child * packages.package_price;
    bookingData.book_cost = cost;
  }

  return (
      <>
        <section className="vh-100" >
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" id="bg" style={{ marginLeft:"400px",width:"400px",backgroundColor:"#cfe7e5"}}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" >
                          Book
                        </p>

                        <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                          <div className="mb-4">
                            <label htmlFor="book_adult" className="form-label">
                              Adult
                            </label>
                            <input
                                type="number"
                                id="book_adult"
                                className="form-control"
                                name="book_adult"
                                value={bookingData.book_adult}
                                onChange={handleInputs}
                                required
                            />
                          </div>

                          <div className="mb-4">
                            <label htmlFor="book_child" className="form-label">
                              Children
                            </label>
                            <input
                                type="number"
                                id="book_child"
                                className="form-control"
                                name="book_child"
                                value={bookingData.book_child}
                                onChange={handleInputs}
                                required
                            />
                          </div>

                          <div className="mb-4"  style={{width:"fit-content"}}>
                            <label htmlFor="book_cost" className="form-label">
                              Booking Cost
                            </label>
                            <input
                                type="number"
                                id="book_cost"
                                disabled
                                className="form-control"
                                name="book_cost"
                                value={
                                  bookingData.book_cost ? bookingData.book_cost : 0
                                }
                                onChange={handleInputs}
                                required
                            />
                          </div>


                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4" id="bookit">
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                                data-content={
                                  bookingData.book_cost ? bookingData.book_cost : 0
                                }
                            ></button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );

}

export default Booking;