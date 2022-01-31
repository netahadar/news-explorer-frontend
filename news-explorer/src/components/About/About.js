import React from "react";
import './About.css';
import mePath from "../../images/me.jpg";

export default function About() {
  return (
    <>
      <img className="about__image" src={mePath} alt="Neta Hadar Itzhak"></img>
      <div className="about__container">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          Hi! My name is Neta-Hadar Itzhak, A Yandex Full Stack Boot Camp
          student (at the final project stage) from Jerusalem.
        </p>
        <p className="about__text">
          Graduated from Offensive Cyber Security and Python programming course.
        </p>
        <p className="about__text">
          Volunteering as deputy director of the Cyber Department at “HEMA”-
          Emergency Organization for saving Children and Youth at Risk.
        </p>
        <p className="about__text">
          I am a great believer in independent learning and self-enrichment, and
          looking for a Junior Full Stack Developer position.
        </p>
      </div>
    </>
  );
}
