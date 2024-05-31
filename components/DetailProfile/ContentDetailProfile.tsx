/* eslint-disable @next/next/no-img-element */
import React from "react";

interface User {
  name: string;
  email: string;
  phone_number: string;

  avatar: string;
  created_at: string;
}

interface ContentDetailProfileProps {
  user: User;
}

const ContentDetailProfile: React.FC<ContentDetailProfileProps> = ({
  user,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <div className="container mx-auto mt-5 p-5">
      <div className="md:flex no-wrap md:-mx-2">
        <div className="w-full md:w-3/12 md:mx-2">
          <div className="bg-white p-3  h-full flex flex-col items-center justify-between">
            <div className="image overflow-hidden w-full">
              <img
                className="h-64 w-full object-cover"
                src={`${baseUrl}/storage/${user.avatar}`}
                alt="User avatar"
              />
            </div>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm w-full">
              <li className="flex items-center justify-between py-3">
                <span>Name</span>
                <span>{user.name}</span>
              </li>
              <li className="flex items-center justify-between py-3">
                <span>Status</span>
                <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                  Active
                </span>
              </li>
              <li className="flex items-center justify-between py-3">
                <span>Member since</span>
                <span>{new Date(user.created_at).toLocaleDateString()}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-9/12 mx-2 h-full">
          <div className="bg-white p-3 shadow-sm rounded-sm h-full">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
              <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-lg">
                <div className="grid grid-cols-2 mb-2">
                  <div className="px-4 py-2 font-semibold">Full Name</div>
                  <div className="px-4 py-2">{user.name}</div>
                </div>
                <div className="grid grid-cols-2 mb-2">
                  <div className="px-4 py-2 font-semibold">Email</div>
                  <div className="px-4 py-2">
                    <a className="text-blue-800" href={`mailto:${user.email}`}>
                      {user.email}
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2 mb-2">
                  <div className="px-4 py-2 font-semibold">Phone</div>
                  <div className="px-4 py-2">{user.phone_number}</div>
                </div>
              </div>
            </div>
          </div>
          {/* End of about section */}
        </div>
      </div>
    </div>
  );
};

export default ContentDetailProfile;
