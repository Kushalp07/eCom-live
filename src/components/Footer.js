import React from 'react'
import "../css/Footer.css"
import {logowhite,} from "../assets/index"
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from "react-icons/fa"
import {MdLocationOn} from "react-icons/md"
import {BsPersonFill,BsPaypal} from "react-icons/bs"
import {ImGithub} from "react-icons/im"

function Footer() {
  return (
    <div className='footer'>
        <div className='foot_con'>
            <div className="container">
                <div className="row">
            {/*============ LogoIcon ==========*/}
            <div className='col-md-3'>
                <img className='logo' src={logowhite} alt="" />
                <p>	&#169;eCom.com</p>
                <div className='icon'>
                <ImGithub className='icons_img'/>
                <FaFacebookF className='icons_img'/>
                <FaInstagram className='icons_img'/>
                <FaTwitter className='icons_img'/>
                <FaYoutube className='icons_img'/>
                <FaHome className='icons_img'/>
                </div>
            </div>
            {/*============ Locate start ==========*/}
            <div className='col-md-3
            '>
                <h2>Locate Us</h2>
                <div>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repudiandae soluta possimus </p>
                </div>
            </div>
            {/*============ Locate end ==========*/}
            {/*============ Profile start ==========*/}
            <div className='col-md-3'>
                <h2>Profile</h2>
                <div className='d-flex pointer'>
                <p className='profile_i'> <span className='pointer'>
                        <BsPersonFill />
                    </span>{" "}
                </p> my account
                </div>

                <div className='d-flex pointer'>
                <p className='profile_i'> <span className='pointer'>
                        <BsPaypal />
                    </span>{" "}
                </p> Paypal
                </div>

                <div className='d-flex pointer'>
                <p className='profile_i'> <span className='pointer'>
                        <MdLocationOn />
                    </span>{" "}
                </p> location
                </div>

                <div className='d-flex pointer'>
                <p className='profile_i'> <span className='pointer'>
                        <FaHome />
                    </span>{" "}
                </p> Home
                </div>
            </div>
            {/*============ Profile end ==========*/}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
