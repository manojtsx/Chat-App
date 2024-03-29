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
              src="https://scontent.fktm14-1.fna.fbcdn.net/v/t39.30808-6/431475681_973636147724203_7081139114866378544_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_Qkk1mLLw_UAX90WF6K&_nc_oc=AQkXtMXOoa_RiAUPRpucpAA8vr38UgtGduAKw-bCE_4eVguyuM4BXoiFPve0DbMxLTI&_nc_ht=scontent.fktm14-1.fna&oh=00_AfArE_dETtv_RPsa2FgtBfuw4UKk6D6Dur7vHBK4YBto0Q&oe=65F6F6BB"
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
                src="https://scontent.fktm14-1.fna.fbcdn.net/v/t39.30808-1/347096561_285611003799941_5143806039165241926_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANz9X714Y-EAX_Lt9nk&_nc_ht=scontent.fktm14-1.fna&oh=00_AfBj8sU2kKp4wtLpvCLjbFnM8Yrf12DbedDWOMrMcQEC4A&oe=65F6C072"
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
