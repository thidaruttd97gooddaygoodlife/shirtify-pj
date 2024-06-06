import React from 'react';
import Link from 'next/link';

const SignupLink: React.FC = () => {
  return (
    <p>
      Don't have an account?{' '}
      <Link href="/signup">Sign up here</Link>
    </p>
  );
};

export default SignupLink;
