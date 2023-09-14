import React, { useState } from "react";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { MdOutlineCall } from "react-icons/md";

const tg_token = "6605130768:AAGle1sKwIopN3xq04Mci4Cv0YvL5MQoX2M";
const tg_id = "2023424372";

function Contacts() {
  const [messages, setMessages] = useState({
    name: "",
    email: "",
    subject: "",
    area: "",
  });

  const handleChange = (e) => {
    setMessages((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let message = `Ism: ${messages.name} %0AEmail: ${messages.email} %0AProductName: ${messages.subject} %0AXabar: ${messages.area}`;
    fetch(
      `https://api.telegram.org/bot${tg_token}/sendMessage?chat_id=${tg_id}&text=${message}`
    );
    setMessages({ name: "", email: "", subject: "", area: "" });
  };

  return (
    <div className="contact">
      <h3 className="contact__title">Get In Touch With Us</h3>
      <p className="contact__text">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>
      <div className="contact__block">
        <div className="contact__left">
          <div className="contact__info">
            <div className="contact__info_box">
              <h5 className="contact__info_title">
                <CiLocationOn /> <span>Address</span>
              </h5>
              <p className="contact__info_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="contact__info">
            <div className="contact__info_box">
              <h5 className="contact__info_title">
                <MdOutlineCall /> <span>Phone</span>
              </h5>
              <p className="contact__info_number">Mobile: +(90) 000 00 00</p>
              <p className="contact__info_number">Hotline: +(90) 000 00 09</p>
            </div>
          </div>
          <div className="contact__info">
            <div className="contact__info_box">
              <h5 className="contact__info_title">
                <CiClock2 /> <span>Working Time</span>
              </h5>
              <p className="contact__info_time">Monday-Friday: 9:00 - 22:00</p>
              <p className="contact__info_time">
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact__form">
          <div className="contact__message">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={messages.name}
              onChange={handleChange}
              className="contact__input"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={messages.email}
              onChange={handleChange}
              className="contact__input"
              required
            />
            <input
              type="text"
              placeholder="Product's name"
              name="subject"
              value={messages.subject}
              onChange={handleChange}
              className="contact__input"
              required
            />
            <textarea
              type="text"
              placeholder="Message"
              name="area"
              value={messages.area}
              onChange={handleChange}
              className="contact__area"
              required
            />
            <button type="submit" className="contact__btn">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
