import React from "react";

function About(props) {
  const bio = props.bio;
  if ( bio === ""  || typeof bio === "undefined") return null;
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href = {props.github}>https://github.com/liza</a>
      <a href = {props.linkedin}>https://www.linkedin.com/in/liza/</a>
      
  
    </div>
  );
}

export default About;
