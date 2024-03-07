import React from 'react'
import TeamSection from './TeamSection'
import MessageIcon from '@mui/icons-material/Message';
import MmsIcon from '@mui/icons-material/Mms';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
const AboutSection = () => {
    let Features=[
    {name:"Instant messaging",icon:<MessageIcon/>,description:"Engage in real-time conversations with anyone, anywhere."},
    {name:"Multimedia sharing",icon:<MmsIcon/>,description:"Share photos, videos, and documents effortlessly."},
    {name:"End-to-end encryption",icon:<EnhancedEncryptionIcon/>,description:"Protect your privacy and data with end-to-end encryption."}
    ]
  return (
    <div>
      {/* Mission */}
        <div className=" pt-16 pb-5">
          <div className="overflow-hidden mx-6 flex justify-center">
          <img src="https://www.callbell.eu/wp-content/uploads/2023/10/Slice-7-10.png" alt="Image for Chat App"  className="border rounded-3xl transition-scale duration-500 hover:scale-110"/>
          </div>
          <p className="m-5 text-center">Chat App aims to provide a seamless and secure communication platform for users to connect, share, and collaborate with friends, family, and colleagues.</p>
        </div>
      {/* Features */}
        <ul className='flex flex-col px-5'>
        {
          Features.map((feature)=>{
            return(
              <li className="m-5 mx-10 p-10 bg-pink-200 rounded-lg shadow-lg">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-center font-bold text-pink-500">{feature.name}</h3>
                <p className='text-center'>{feature.description}</p>
              </li>
            )
          })
        }
        </ul>
      {/*Team Member*/}
      <div>
      <TeamSection />
      </div>
      {/* Contact Information */}
      <div>
        <h3>Contact</h3>
        <p>For any inquiries, please contact us at: <a href="mailto:seezanshrestha8@gmail.com"></a></p>
      </div>
      {/* User Guidelines and Terms of serivices and privacy policy */}
      <div>
        <h1>User Guideline</h1>
        <p>Please adhere to our community guidelines when using our chat app. Respect other users, avoid spam, and help maintain a positive and inclusive environment for everyone.</p>
        <h1>Terms of Service</h1>
        <p>By using our chat app, you agree to our terms of service. Please review our terms of service before using our chat app.</p>
      </div>
    </div>
  )
}

export default AboutSection