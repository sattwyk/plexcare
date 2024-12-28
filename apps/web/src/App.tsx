import { signIn, signUp, signOut, useSession } from './lib/auth-client';
import './App.css';

function AuthContent() {
  const { data, isPending, error } = useSession();

  const handleSignIn = () => {
    signIn.email({
      email: "user@example.com",
      password: "password",
    });
  };

  const handleSignUp = () => {
    signUp.email({
      email: "user@example.com",
      password: "password",
      name: 'username'
    });
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data ? (
        <div>
          <p>Welcome, {data.user.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={handleSignIn}>Sign In</button>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <AuthContent />
    </div>
  );
}

export default App;
