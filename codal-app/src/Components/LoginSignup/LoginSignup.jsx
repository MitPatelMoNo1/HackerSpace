import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./LoginSignup.css"
const LoginSignup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  
  const [isModalOpenIn, setIsModalOpenIn] = useState(false);

  const handleOpenModalIn = () => setIsModalOpenIn(true);
  const handleCloseModalIn = () => setIsModalOpenIn(false);
  return (
    <div className="container">
      <div className="signup-container">
        <button onClick={handleOpenModal} className="signUp">
          Create Account
        </button>
      </div>
      <span>
        <h4>Already have an account?</h4>
      </span>
      <div className="signin-container">
        <button onClick={handleOpenModalIn} className="signIn">
          Sign In
        </button>
      </div>

      <div>
        <Modal show={isModalOpen} onClose={handleCloseModal}>
          <h1>CODAL</h1>
          <h2>Create Your Account</h2>
          <form>
            <div>
              <label>
                <input type="text" name="fname" placeholder="First Name" />
              </label>
            </div>
            <div>
              <label>
                <input type="text" name="lname" placeholder="Last Name" />
              </label>
            </div>
            <div>
              <label>
                <input type="email" name="email" placeholder="E-Mail" />
              </label>
            </div>
            <div>
              <label>
                <input type="password" name="password" placeholder="Password" />
              </label>
            </div>
            <div>
              <h4>Date Of Birth</h4>
              <p>
                This will not be shown publicly. Confirm your own age, even if{" "}
                <br />
                this account is for a business, a pet, or something else.
              </p>
              <input type="date" name="date" placeholder="Date" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </Modal>

        <Modal show={isModalOpenIn} onClose={handleCloseModalIn}>
          <h1>CODAL</h1>
          <h4>Sign In To Codal</h4>
          <form>
            <div>
              <label>
                <input type="email" name="email" placeholder="E-Mail" />
              </label>
            </div>
            <div>
              <label>
                <input type="password" name="password" placeholder="Password" />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default LoginSignup;
