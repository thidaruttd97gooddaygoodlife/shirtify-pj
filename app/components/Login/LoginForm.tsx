import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface User {
  username: string;
  password: string;
}

const database: User[] = []; // Your user database array

const errors = {
  uname: 'Invalid username',
  pass: 'Invalid password',
};

const LoginForm: React.FC = () => {
  const [errorMessages, setErrorMessages] = useState<{ name?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { uname, pass } = event.target as typeof event.target & {
      uname: { value: string };
      pass: { value: string };
    };

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  };

  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && <div className="text-red-500 text-sm">{errorMessages.message}</div>;

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="text-2xl mb-10 text-center font-inter font-semibold text-[55px] mt-[50px] mr-[100px] font-Alata">
        Sign in
      </div>
      <div className="mb-[40px]">
        <label className="block text-sm font-medium mb-1 text-[#A8A6A6]">Username or Email Address</label>
        <input
          type="text"
          name="uname"
          required
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        {renderErrorMessage('uname')}
      </div>
      <div className="flex justify-end mb-7">
        <Link href="/ForgetPass">
          <a className="text-blue-500 hover:underline text-loginco font-normal text-[13px]">Forget Password?</a>
        </Link>
      </div>
      <div className="mb-6 -mt-[50px]">
        <label className="block text-sm font-medium mb-1 text-[#A8A6A6]">Password</label>
        <input
          type="password"
          name="pass"
          required
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        {renderErrorMessage('pass')}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-[119px] py-3 bg-black text-white rounded-lg hover:bg-pink-500 font-semibold"
        >
          Sign in
        </button>
      </div>
      {isSubmitted && (
        <div className="text-center text-green-500">User is successfully logged in</div>
      )}
    </form>
  );
};

export default LoginForm;
