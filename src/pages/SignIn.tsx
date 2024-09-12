import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({ userName: '', password: '' });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const auth = useAuth();

  const handleSignIn: React.MouseEventHandler<HTMLButtonElement> = async () => {
    setLoading(true); // Set loading to true when sign-in starts
    setErrorMessage(null); // Clear previous errors

    try {
      await auth?.signin(
        { name: formData.userName, password: formData.password, profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BFEPHRDIQwZbqU-KElpgSmB2ey8f0wGsig&s" },
        () => {
          // Redirect to the home page
          navigate('/');
          console.log('User signed in');
        }
      );
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false); // Set loading to false when sign-in completes (success or failure)
    }
  };

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
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-full bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:ring-inset text-sm focus:outline-none"
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
                className="w-full px-4 py-3 rounded-full bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:ring-inset text-sm focus:outline-none"
                required
              />
            </div>
            <div>
              <button
                onClick={handleSignIn}
                type="submit"
                className="w-full bg-blue-500 text-white rounded-full px-4 py-3 font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300"
                disabled={loading} // Disable button when loading
              >
                {loading ? 'Giris Yapılıyor...' : 'Giris Yap'}
              </button>
            </div>
            {errorMessage && (
              <div className="text-red-500 text-sm text-center">
                {errorMessage}
              </div>
            )}
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
