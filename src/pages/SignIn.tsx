import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {useNavigate} from "react-router-dom";
const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
    console.log('Name:', formData.name);

  };

  const auth = useAuth();

  const handleSignIn: React.MouseEventHandler<HTMLButtonElement> = () => {
    auth?.signin(
      { name: formData.name, email: formData.email, password: formData.password, profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BFEPHRDIQwZbqU-KElpgSmB2ey8f0wGsig&s" },
      () => {
        // Redirect to the home page
        navigate('/');
        console.log('User signed in');
      }
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-2xl rounded-3xl p-12 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-800">Sign In</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:ring-inset text-sm focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:ring-inset text-sm focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:ring-inset text-sm focus:outline-none"
                required
              />
            </div>
            <div>
              <button
                onClick={handleSignIn}
                type="submit"
                className="w-full bg-blue-500 text-white rounded-lg px-4 py-3 font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;