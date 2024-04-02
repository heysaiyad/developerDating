import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Spinners from "./Spinners";
export const Main = () => {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({ email: "", gender: "", theme: "", bug: "", conflicts: "",
   music: "", language: "" , motivated:"", naming:"", legacy:"", Emoji:"", Celebration:""});
  // console.log(formData);
  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value
        [name]: type === "checkbox" ? checked : value
      }
    });
  }



  function submitHandler(event) {
    event.preventDefault();
    setIsSubmitting(true);
    //print
    setTimeout(() => {
      // Hide loading state here...
  
      setIsSubmitting(false);
      navigate('/videos');
    }, 5000); // Delay of 10 seconds
    console.log("Finally printing the entireform ka data...........");
    console.log(formData);
  }

  return (
    <div className="App">
    {/* <Spinners/> */}
     {isSubmitting ? <Spinners /> : null}
      <h1>Developer Dating</h1>
      <p>
        God makes pairs in heaven, and we help match them through browsers 💛
      </p>
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <div className="input-field">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g. yourname@gmail.com"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="gender">Looking for:</label>
            <select
            onChange={changeHandler}
              id="gender"
              name="gender"
              required
            >
              <option value="" disabled selected>
                Choose the gender you're interested in
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="any">Any</option>
            </select>
          </div>
        </div>

        <h2>Your Developer Preferences</h2>

        <div className="input-container">
          <div className="input-field">
            <label htmlFor="theme">Theme preference:</label>
            <select onChange={changeHandler}  id="theme" name="theme" required>
              <option value="" disabled selected>
                Select your preference
              </option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div className="input-field">
            <label htmlFor="bug">Bug reaction:</label>
            <select onChange={changeHandler} id="bug" name="bug" required>
              <option value="" disabled selected>
                Select your reaction
              </option>
              <option value="panic">Keep Calm and read the docs</option>
              <option value="debug">Panic mode: call stack overflow!</option>
              <option value="ignore">Ignore</option>
            </select>
          </div>
        </div>

        <div className="input-container">
          <div className="input-field">
            <label htmlFor="conflicts">How do you handle merge conflicts?</label>
            <select onChange={changeHandler} id="conflicts" name="conflicts" required>
              <option value="" disabled selected>
                Select your method
              </option>
              <option value="light">
                Peacefully resolve conflicts like a diplomat
              </option>
              <option value="dark">
                Git push --force and hope for the best
              </option>
            </select>
          </div>

          <div className="input-field">
            <label htmlFor="music">
              When coding, do you prefer listening to music?
            </label>
            <select onChange={changeHandler} id="music" name="music" required>
              <option value="" disabled selected>
                Select your preference
              </option>
              <option value="panic">Yes, I have a coding playlist ready</option>
              <option value="debug">
                No, silence is golden for deep focus
              </option>
            </select>
          </div>
        </div>

        <div className="input-container">
          <div className="input-field">
            <label htmlFor="language">
              What's ur favorite coding language for a first date project?
            </label>
            <select onChange={changeHandler} id="language" name="language" required>
              <option value="" disabled selected>
                Select your language
              </option>
              <option value="light">Python - versatile and charming</option>
              <option value="dark">JavaScript - spontaneous and dynamic</option>
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="bug">
              How do you stay motivated during long coding sessions?
            </label>
            <select onChange={changeHandler} id="motivated" name="motivated" required>
              <option value="" disabled selected>
                Select your technique
              </option>
              <option value="panic">Frequent breaks and coffee refills</option>
              <option value="debug">
                Promise of pizza at the end of the tunnel
              </option>
            </select>
          </div>
        </div>

        <div className="input-container">
          <div className="input-field">
            <label htmlFor="theme">
              What's your preferred method for naming variables?
            </label>
            <select onChange={changeHandler} id="naming" name="naming" required>
              <option value="" disabled selected>
                Select your preference
              </option>
              <option value="light">Descriptive and meaningful names</option>
              <option value="dark">
                Random characters because naming is hard
              </option>
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="legacy">
              What's your reaction when encountering legacy code?
            </label>
            <select onChange={changeHandler} id="legacy" name="legacy" required>
              <option value="" disabled selected>
                Select your reaction
              </option>
              <option value="panic">
                Embrace the challenge like an archeologist
              </option>
              <option value="debug">Cry silently and hope for a rewrite</option>
            </select>
          </div>
        </div>

        <div className="input-container">
          <div className="input-field">
            <label htmlFor="Emoji">Favorite Emoji for Code Reviews:</label>
            <select onChange={changeHandler} id="Emoji" name="Emoji" required>
              <option value="" disabled selected>
                Select your emoji
              </option>
              <option value="light">The "👍" - positive vibes only.</option>
              <option value="dark">
                The "🤔" - politely expressing confusion.
              </option>
              <option value="dark">
                The "🔥" emoji - for those truly epic code contributions (or
                hilarious bugs).
              </option>
            </select>
          </div>

          <div className="input-field">
            <label htmlFor="Celebration">Ideal Bug Squashing Celebration:</label>
            <select onChange={changeHandler} id="Celebration" name="Celebration" required> 
              <option value="" disabled selected>
                Select your celebration
              </option>
              <option value="panic">
                Fixing the bug is celebration enough, back to work!
              </option>
              <option value="debug">
                Treat themselves to a victory dance (air guitar optional).
              </option>
              <option value="debug">
                Mandatory team nap after the stressful debugging session.
              </option>
            </select>
          </div>
        </div>

        {/* <Link to="/videos"> */}
          {/* <button className="match-button">Find My Match ❤</button> */}
          <input type="submit" className="match-button" value="Find My Match ❤" />
        
      </form>
    </div>
  );
};

export default Main;
