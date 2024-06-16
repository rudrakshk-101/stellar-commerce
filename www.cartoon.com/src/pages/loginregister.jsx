import React, { useState } from "react";
import "../styles/loginregister.css";
import SignIn from "../components/login";
import SignUp from "../components/register";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import ProductCard from "../components/productCard";
import image from '../assets/Screenshot 2024-02-17 155454.png';
import image1 from '../assets/Screenshot 2024-02-17 155612.png';
import image2 from '../assets/Screenshot 2024-02-17 155819.png';
// import Card3d from './3dcard';

const LoginRegister = ({setLoader}) => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  // colored button mui
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return (
    <div className="loginregisterouter">
      <div className="backgroundUltra">
        <div className="circle1l"></div>
        <div className="circle2l"></div>
      </div>

      <div className="threePhoto">
        <div className="photo1">
        <img src={image1} alt="" srcset="" />
        </div>
        <div className="photo2">
        <img src={image} alt="" srcset="" />
            
        </div>
        <div className="photo3">
            <img src={image2} alt="" srcset="" />
        </div>
      </div>

      <div className="section over-hide">
        <div
          className={`container ${
            isLoginMode ? "show-login" : "show-register"
          }`}
        >
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section text-center py-5 py-md-0">
                <div className="buttonContainer">
                  <p className="butt">Already have an account? </p>
                  {/* <ColorButton onclick={toggleMode} className='toggle-button' variant="contained">
                                    {isLoginMode ? 'Register' : 'Login'}
                                    </ColorButton> */}
                  <button onClick={toggleMode} className="toggle-button">
                    {isLoginMode ? "Register" : "Login"}
                  </button>
                </div>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="pricing-wrap">
                        <SignIn setLoader={setLoader} />
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="pricing-wrap">
                        <SignUp setLoader={setLoader}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;