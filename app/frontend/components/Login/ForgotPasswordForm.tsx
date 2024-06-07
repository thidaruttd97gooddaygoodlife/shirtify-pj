// components/Login/ForgotPasswordForm.tsx

import React, { useState } from 'react';

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Your API call to reset password
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to reset password');
      }

      // Reset form state
      setEmail('');
      setErrorMessage('');
      setIsSubmitting(false);

      // Handle success, show a success message, redirect, or any other action
      console.log('Password reset link sent to your email.');
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage(error.message || 'Failed to reset password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
      <button
        type="submit"
        className={`w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Reset Password'}
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
