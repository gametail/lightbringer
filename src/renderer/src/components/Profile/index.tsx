import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProfile {
  className?: string
}

const Profile: React.FC<IProfile> = ({ className }) => {
  return <div className={twMerge('', className)}>Profile</div>
}

export default Profile
