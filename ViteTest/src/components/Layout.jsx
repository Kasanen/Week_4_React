import React, {useEffect} from 'react';
import {Link, Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';

const Layout = () => {
  const {handleAutoLogin, user} = useUserContext();

  useEffect(() => {
    handleAutoLogin?.();
  }, [handleAutoLogin]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      <div className="p-8">
        <nav className="max-w-6xl mx-auto">
          <ul className="flex justify-end bg-gray-800 list-none m-0 p-0">
            <li>
              <Link
                to="/"
                className="block px-4 py-3 text-white text-center no-underline hover:bg-gray-900"
              >
                Home
              </Link>
            </li>

            {user ? (
              <>
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-3 text-white text-center no-underline hover:bg-gray-900"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/upload"
                    className="block px-4 py-3 text-white text-center no-underline hover:bg-gray-900"
                  >
                    Upload
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="block px-4 py-3 text-white text-center no-underline hover:bg-gray-900"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="block px-4 py-3 text-white text-center no-underline hover:bg-gray-900"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <main className="mt-6 max-w-6xl mx-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
