import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import HorizontalComponent2 from "./Horizontal-Component-2";
import "./css/Home.css";
import CardComponent from "./Card-Component";

const Home = () => {
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result.user.displayName);
      localStorage.setItem("userId", result.user);
      navigate("/home");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="body">
      <div className="header">
        <div className="title-1">
          Proctored exams: Secure your online assessments using Proctorise{" "}
        </div>
        <button
          className="button-1"
          id="tryforfree"
          onClick={handleGoogleSignIn}
        >
          TRY FOR FREE
        </button>
      </div>
      <div className="horizontal-div-1">
        <img
          src="https://assetsprelogin.mettl.com/_next/image/?url=%2Fassets%2Fonline-remote-proctoring%2FRemote-Proctoring-Solution.svg&w=384&q=75"
          className="graphics-1"
        />
        <div className="vertical-div-1">
          <div className="title-1">What is a Proctored Exam?</div>
          <div className="content-1">
            Proctor exam test is a term used to define an online assessment that
            employs a tech-enabled AI based proctoring software that
            automatically supervises a test taker. An online proctored test uses
            a combination of video and audio to prevent cheating. A proctor
            exam/test provides utmost strictness to an examination drive and
            eliminates any unwanted incident.
          </div>
          <button className="button-1" id="tryforfree">
            REQUEST A DEMO
          </button>
        </div>
      </div>
      <div className="title-2">
        Proctorise: Secure online exam proctoring with an AI-powered tool
      </div>
      <div className="subtitle-1">
        Our Suite of Online Proctoring Services Ensures Cheating-Free Online
        Exams
      </div>
      <div className="card-row">
        <CardComponent
          imgSrc={
            "https://assetsprelogin.mettl.com/_next/image/?url=%2Fassets%2Fstrategic-partnerships%2FStudent-authentication.svg&w=64&q=75"
          }
          title={"Student Authentication"}
          content={
            "Multi-factor authentication technology to eliminate the risk of student impersonation."
          }
        />
        <CardComponent
          imgSrc={
            "https://assetsprelogin.mettl.com/_next/image/?url=%2Fassets%2Fstrategic-partnerships%2FRemote-proctoring.svg&w=64&q=75"
          }
          title={"Proctoring Technology"}
          content={
            "Comprehensive AI-based Proctoring Technology supporting auto proctoring."
          }
        />
        <CardComponent
          imgSrc={
            "https://assetsprelogin.mettl.com/_next/image/?url=%2Fassets%2Fstrategic-partnerships%2FMettl-Secure-Browser.svg&w=64&q=75"
          }
          title={"Proctorise Secure Exam Browser"}
          content={
            "Secure Browser Lockdown Technology that sanitizes students' computers by disabling additional tabs, browsers, external ports,"
          }
        />
      </div>
      <div className="title-2">
        Our AI based proctoring features ensure total cheating prevention.
      </div>
      <div className="horizontal-div-1">
        <img
          src="https://assetsprelogin.mettl.com/_next/image/?url=%2Fassets%2Fonline-remote-proctoring%2FAI-based-Flag.gif&w=640&q=75"
          className="graphics-2"
        />
        <div className="vertical-div-1">
          <HorizontalComponent2
            imgSrc="https://assetsprelogin.mettl.com/_next/image/?url=%2Fassets%2Fonline-remote-proctoring%2FVideo-Proctoring.svg&w=48&q=75"
            title="Attention Proctoring"
            content="It checks students' video feeds to raises flags in case of any
            suspicious activity visible in the video"
          />
          <HorizontalComponent2
            imgSrc="https://assetsprelogin.mettl.com/_next/image/?url=%2Fassets%2Fonline-remote-proctoring%2FImage-Proctoring.svg&w=48&q=75"
            title="Image Proctoring"
            content="It assesses students' pictures taken at regular intervals with the authenticated image"
          />
          <HorizontalComponent2
            imgSrc="https://assetsprelogin.mettl.com/_next/image/?url=%2Fassets%2Fonline-remote-proctoring%2FImage-Proctoring.svg&w=48&q=75"
            title="Object Proctoring"
            content="It checks students' video feeds to raises flags in case of any suspicious objects visible in the video"
          />
        </div>
      </div>
      <div className="horizontal-div-3">
        <button className="button-2">SPEAK TO OUR EXPERTS</button>
        <button
          className="button-2"
          style={{ backgroundColor: "rgba(0, 31, 255, 0.8407738095238095)" }}
        >
          FAQS
        </button>
      </div>
    </div>
  );
};

export default Home;
