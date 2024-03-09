import React from 'react'
import TeamSection from './TeamSection'
import MessageIcon from '@mui/icons-material/Message';
import MmsIcon from '@mui/icons-material/Mms';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import TermsOfServices from './TermsOfServices';
const AboutSection = () => {
    let Features=[
    {name:"Instant messaging",icon:<MessageIcon/>,description:"Engage in real-time conversations with anyone, anywhere."},
    {name:"Multimedia sharing",icon:<MmsIcon/>,description:"Share photos, videos, and documents effortlessly."},
    {name:"End-to-end encryption",icon:<EnhancedEncryptionIcon/>,description:"Protect your privacy and data with end-to-end encryption."}
    ]
  return (
    <div>
      {/* Mission */}
        <div className=" pt-16 pb-5 sm:py-20 sm:mx-5 sm:flex sm:justify-around">
          <div className="overflow-hidden mx-6 flex justify-center sm:mx-0">
          <img src="https://www.callbell.eu/wp-content/uploads/2023/10/Slice-7-10.png" alt="Image for Chat App"  className="border rounded-3xl transition-scale duration-500 hover:scale-110"/>
          </div>
          <div className='sm:w-96 flex flex-col justify-center items-center pt-4'>
          <h1 className='text-pink-500 font-bold text-2xl pb-2'>Chat App</h1>
          <p className="ml-5 text-center text-lg">Chat App aims to provide a seamless and secure communication platform for users to connect, share, and collaborate with friends, family, and colleagues.</p>
          </div>
        </div>
      {/* Features */}
      <div className='flex flex-col items-center justify-center p-5'>
      <h1 className='text-pink-500 text-2xl font-bold'>Why use Chat App?</h1>
        <ul className='flex flex-col lg:flex-row gap-7 p-5 sm:my-5'>
        {
          Features.map((feature,index)=>{
            return(
              <li key={index} className="p-10 sm:p-16 bg-pink-200 rounded-lg shadow-lg transition-scale duration-500 hover:scale-110">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-center font-bold text-lg text-pink-500 p-3">{feature.name}</h3>
                <p className='text-center'>{feature.description}</p>
              </li>
            )
          })
        }
        </ul>
        </div>
      {/*Team Member*/}
      <TeamSection />
      {/* User Guidelines and Terms of serivices and privacy policy */}
      <div>
        <TermsOfServices />
      </div>
    </div>
  )
}

export default AboutSection