'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      alert("Thank you for your message, you'll hear from us soon");
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  function validateForm() {
    let isValid = true;

    if (name.length < 3) {
      setNameError('Name must be at least 3 characters');
      isValid = false;
    }

    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    if (message.length < 10) {
      setMessageError('Message must be at least 10 characters');
      isValid = false;
    }

    return isValid;
  }

  function handleBlur(event, validationFunction, setErrorMessage) {
    const value = event.target.value;
    const isValid = validationFunction(value);
    setErrorMessage(isValid ? '' : 'Invalid input');
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function myPopupFunction() {}

  return (
    <div className="container mx-auto p-8 border border-gray-300 rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-8 md:space-y-0">
        <div className="flex flex-col space-y-8 p-4">
          <div>
            <h2 className="font-bold text-2xl">Share your thought</h2>
            <p className="pt-4 pb-4 text-gray-600 text-sm">
            write something beautiful,
              <br />
              something ugly
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="text-sm">
                Your name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={(e) =>
                  handleBlur(e, (value) => value.length >= 3, setNameError)
                }
                placeholder="Your name"
                className={`border border-gray-300 rounded-md px-4 py-2 mt-2 outline-none focus:border-teal-300 ${
                  nameError ? 'border-red-500' : ''
                }`}
              />
              {nameError && <div className="text-red-500">{nameError}</div>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Your E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => handleBlur(e, isValidEmail, setEmailError)}
                placeholder="Your E-mail"
                className={`border border-gray-300 rounded-md px-4 py-2 mt-2 outline-none focus:border-teal-300 ${
                  emailError ? 'border-red-500' : ''
                }`}
              />
              {emailError && <div className="text-red-500">{emailError}</div>}
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Your message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={(e) =>
                  handleBlur(e, (value) => value.length >= 10, setMessageError)
                }
                placeholder="Your message"
                rows="4"
                className={`border border-gray-300 rounded-md px-4 py-2 mt-2 outline-none focus:border-teal-300 ${
                  messageError ? 'border-red-500' : ''
                }`}
              />
              {messageError && (
                <div className="text-red-500">{messageError}</div>
              )}
            </div>
            <button
              type="submit"
              className="bg-teal-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
