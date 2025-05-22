import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export default function NavBar() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => navigate('/login'));
  };

  return (
    <div className="w-full bg-blue-950 h-[15%] p-2 flex justify-center items-center gap-4">
      <img
        className="rounded-full hover:animate-spin transition delay-700 duration-300 ease-in-out"
        src="https://www.playspots.in/wp-content/uploads/2024/02/LogoARNOLDGYMhwGZseIRNK.jpeg"
        alt="gym"
        width={60}
      />
      <h1 className="font-mono text-5xl text-violet-200">Fitness App</h1>
      {user && (
        <button
          onClick={handleLogout}
          className="ml-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-3xl"
        >
          Logout
        </button>
      )}
    </div>
  );
}
