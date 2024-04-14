'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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

  function handleBlur(
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    validationFunction: (value: string) => boolean,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  ) {
    const value = event.target.value;
    const isValid = validationFunction(value);
    setErrorMessage(isValid ? '' : 'Invalid input');
  }

  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


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
        <div className="w-full max-h-96 object-cover mb-4 rounded-lg">
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
                className={`w-full border border-gray-300 p-4 rounded-b-lg${
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
                className={`w-full border border-gray-300 p-4 rounded-b-lg ${
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
                rows={parseInt("4")}
                className={`w-full border border-gray-300 p-4 rounded-b-lg ${
                  messageError ? 'border-red-500' : ''
                }`}
              />
              {messageError && (
                <div className="text-red-500">{messageError}</div>
              )}
            </div>
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md mt-4">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
