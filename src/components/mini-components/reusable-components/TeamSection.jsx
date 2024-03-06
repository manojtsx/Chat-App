import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";

const TeamSection = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white py-5">
      <h2 className="text-3xl mx-4 sm:border-b-4 sm:inline-block">Team Members</h2>
      <div className="flex flex-col justify-center gap-10 p-5 sm:flex-row sm:justify-center">
        <div className="flex flex-col items-center">
          <div className="w-full grid place-items-center overflow-hidden mb-4 sm:w-72">
            <img
              src="https://scontent.fktm14-1.fna.fbcdn.net/v/t39.30808-6/431004073_972462914508193_8592377437422702547_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dNQ34Q6wODkAX9jRvQl&_nc_ht=scontent.fktm14-1.fna&oh=00_AfBlZ2Fd0JIa7v4LCTA0Gkxhva2xemx88Lkx3rIaCYdE7A&oe=65ECA5B9"
              alt=""
              className="border rounded-lg transition-scale duration-500 hover:scale-110"
            />
          </div>
          <h3 className="text-2xl">Manoj Shrestha</h3>
          <p>Tanahun, Nepal</p>
          <p>+977-9816683613</p>
          <div>
            <a
              href="https://github.com/remon343"
              target="_blank"
              className="hover:text-black"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/manoj-shrestha-newar/"
              target="_blank"
              className="hover:text-blue-500"
            >
              <LinkedIn />
            </a>
            <a
              href="https://www.facebook.com/manoj.jsx"
              target="_blank"
              className="hover:text-blue-800"
            >
              <Facebook />
            </a>
          </div>
        </div>
          <div className="flex flex-col items-center">
            <div className="w-full grid place-items-center overflow-hidden mb-4 sm:w-72">
              <img
                src="https://scontent.fktm14-1.fna.fbcdn.net/v/t39.30808-1/347096561_285611003799941_5143806039165241926_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rwRfGOlN7FYAX8O9-Px&_nc_ht=scontent.fktm14-1.fna&oh=00_AfDXuCNHjKqkXDa59u2lO4fphmY7O0JVU-gEEgoUWsHiHA&oe=65ECDD32"
                alt=""
                className="border rounded-lg transition-scale duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl">Seezan Shrestha</h3>
            <p>Tanahun, Nepal</p>
            <p>+977-9800000000</p>
            <div>
              <a
                href="https://github.com/seezan25"
                target="_blank"
                className="hover:text-black"
              >
                <GitHub />
              </a>
              <a
                href="https://www.linkedin.com/in/seezan-shrestha-479133226/"
                target="_blank"
                className="hover:text-blue-500"
              >
                <LinkedIn />
              </a>
              <a
                href="https://www.facebook.com/seezon.stha.5"
                target="_blank"
                className="hover:text-blue-800"
              >
                <Facebook />
              </a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default TeamSection;
