import { signIn } from 'next-auth/client';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => signIn('github')}
        className="p-4 bg-gray-800 rounded text-white"
      >
        Sign in with GitHub
      </button>
    </div>
  );
};

export default Login;
