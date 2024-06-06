// components/login/SignupLink.tsx
import React from 'react';
import Link from 'next/link';

const SignupLink: React.FC = () => {
  return (
    <p>
      Don't have an account?{' '}
      <Link href="/signup">
        <a>Sign up here</a>
      </Link>
    </p>
  );
};

export default SignupLink;
