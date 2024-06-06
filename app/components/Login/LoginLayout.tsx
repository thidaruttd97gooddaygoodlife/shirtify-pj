// components/login/LoginLayout.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import LoginForm from './LoginForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import SignupLink from './SignupLink'

const LoginLayout: React.FC = () => {
  return (
    <div className="flex items-center justify-center max-w-screen-ml min-h-screen bg-[#7BA0FF]">
      <Head>
        <title>Sign in</title>
      </Head>
      <div className="w-[1100px] h-[800px] bg-[#FFD4E9] rounded-[38px] mt-[62px] p-[20px]">
        <div className="absolute top-4 left-4">
          <div className="ml-[513.5px] mt-[250px]">
            <Image 
              src="/violet_Model.png"
              alt="ld-block-3d-model"
              width={800} // Adjust width as needed
              height={600} // Adjust height as needed
            />
            <div className=" -mt-[460px] ml-[551px] ">
              <Image 
                src="/white-hoop.svg"
                alt="bk-box"
                width={168} // Adjust width as needed
                height={168} // Adjust height as needed
              />
            </div>
            <div className="ml-[665px] -mt-[125px]">
              <Image 
                src="/orange circle.svg"
                alt="box1"
                width={70} // Adjust width as needed
                height={70} // Adjust height as needed
              />
            </div>
            <div className="ml-[525px] -mt-[20px] ">
              <Image 
                src="/yellow-cube-sq.svg"
                alt="box2"
                width={170} // Adjust width as needed
                height={119} // Adjust height as needed
              />
            </div>
            <div className="ml-[540px] -mt-[180px]">
              <Image 
                src="/white circle.svg"
                alt="box3"
                width={62} // Adjust width as needed
                height={63} // Adjust height as needed
              />
            </div>
            <div className="ml-[580px] -mt-[460px]">
              <Image 
                src="/painter-.svg"
                alt="box3"
                width={280} // Adjust width as needed
                height={430} // Adjust height as needed
              />
            </div>
            <div className=" ml-[250px] -mt-[50px]">
              <Image
                src="/Hoodie.svg"
                alt="hoodie-3D-model"
                width={300} // Adjust width as needed
                height={640}
              />
            </div>
          </div>
        </div>
        <div className="relative w-[350px] max-w-md p-7 bg-white bg-opacity-20 rounded-3xl shadow-md backdrop-blur-md  ml-[60px] mt-[80px]">
          <Image className='-ml-[30px]'
            src="/Web_Logo.svg"
            alt="Image description"
            width={200} // Adjust width as needed
            height={61} // Adjust height as needed
          />
          <LoginForm />
          <div className="space-y-6">
            <div className='-mt-[65px] ml-[50px]'>
              <h1 className='ml-[165px] text-[#3f7bf0] text-[13px] mt-[30px]'>No account? <Link href="/signup"><a className="text-blue-500 hover:underline text-loginco font-normal underline text-[13px] ">Sign Up</a></Link></h1>
            </div>
            <div className="text-2xl mb-10 text-center font-inter font-semibold text-[55px] mt-[50px] mr-[100px] font-Alata ">Sign in</div>
            <div>
              <div className="mt-[45px] mr-[90px] mb-8 w-[285px] py-1.5 bg-[#3F7BF0] text-white rounded-lg hover:bg-pink-500  ">
                <div className="flex ml-[20px]">
                  <button type="submit" className='flex'>
                    <h1 className='font-bold text-[25px] ml-[30px] '> G</h1>
                    <h1 className='ml-[15px] mt-[8px] font-normal '> Sign in with Google</h1>
                  </button>
                </div>
              </div>
            </div>
            <ForgotPasswordForm />
            <SignupLink />
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <div className="w-3/4 h-3/4 bg-pink-300 rounded-tl-full rounded-tr-full shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
