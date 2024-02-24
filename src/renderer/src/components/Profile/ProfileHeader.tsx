import React from 'react'
import { twMerge } from 'tailwind-merge'
import { profileMockData as profile } from '.'
interface IProfileHeader {
  className?: string
}

const ProfileHeader: React.FC<IProfileHeader> = ({ className }) => {
  return (
    <div className={twMerge('', className)}>
      {/* Rank History */}
      <ul className="flex gap-2 mx-6 my-6 overflow-x-auto text-sm font-bold ">
        <li className="px-2 text-center rounded-md bg-base-300 text-nowrap">
          S13-2 <span className="font-normal text-yellow-600 ">Challenger</span>
        </li>
        <li className="px-2 text-center rounded-md bg-base-300 text-nowrap">
          S13-1 <span className="font-normal text-red-800 ">Grandmaster</span>
        </li>
        <li className="px-2 text-center rounded-md bg-base-300 text-nowrap">
          S12 <span className="font-normal text-purple-600 ">Master</span>
        </li>
        <li className="px-2 text-center rounded-md bg-base-300 text-nowrap">
          S11 <span className="font-normal text-blue-500 ">Diamond</span>
        </li>
        <li className="px-2 text-center rounded-md bg-base-300 text-nowrap">
          S10 <span className="font-normal text-emerald-500 ">Emerald</span>
        </li>
        <li className="px-2 text-center rounded-md bg-base-300 text-nowrap">
          S9 <span className="font-normal text-teal-600 ">Platinum</span>
        </li>
        <li className="px-2 text-center rounded-md bg-base-300 text-nowrap">
          S8 <span className="font-normal text-yellow-300 ">Gold</span>
        </li>
        <li className="px-2 text-center rounded-md bg-base-300 text-nowrap">
          S7 <span className="font-normal text-slate-500 ">Silver</span>
        </li>
        <li className="px-2 text-center rounded-md bg-base-300 text-nowrap">
          S6 <span className="font-normal text-slate-500 ">Silver</span>
        </li>
        <li className="px-2 text-center rounded-md bg-base-300 text-nowrap">
          S5 <span className="font-normal text-slate-500 ">Silver</span>
        </li>
        <li className="px-2 text-center rounded-md bg-base-300 text-nowrap">
          S4 <span className="font-normal text-amber-800 ">Bronze</span>
        </li>
        <li className="px-2 text-center rounded-md bg-base-300 text-nowrap">
          S3 <span className="font-normal text-amber-800 ">Bronze</span>
        </li>
        <li className="px-2 text-center rounded-md bg-base-300 text-nowrap">
          S2 <span className="font-normal text-stone-600 ">Iron</span>
        </li>
        <li className="px-2 text-center rounded-md bg-base-300 text-nowrap">
          S1 <span className="font-normal text-stone-600 ">Iron</span>
        </li>
      </ul>

      {/* Avatar */}
      <div className="flex items-center gap-4 mx-20 my-5 ">
        {/* Icon and Level*/}
        <div className="select-none avatar indicator">
          <span className="h-8 text-xl font-bold indicator-item indicator-bottom indicator-center badge badge-primary">
            {profile.summonerLevel}
          </span>
          <div className="rounded-full w-36 ring-4 ring-primary ring-offset-base-100 ring-offset-4">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.4.1/img/profileicon/${profile.profileIconId}.png`}
              alt="summoner icon"
            />
          </div>
        </div>
        {/* Gamename, Tagline and Ladder Rank */}
        <div className="flex flex-col mx-4">
          <div className="text-5xl font-bold text-center">
            {profile.gameName}
            <span className="px-4 font-medium text text-secondary/40">#{profile.tagLine}</span>
          </div>
          <div className="text-sm text-center">Ladder Rank 64,563 (top 3%)</div>
        </div>
      </div>

      <div className="flex items-center justify-around m-8">
        <div role="tablist" className="self-end gap-4 tabs tabs-lg tabs-bordered">
          <a role="tab" className="w-40 tab tab-active">
            Overview
          </a>
          <a role="tab" className="w-40 tab">
            Champs
          </a>
          <a role="tab" className="w-40 tab">
            Live
          </a>
        </div>

        {/* Archievement Tags */}
        <ul className="flex-wrap rounded-2xl content-center justify-center flex-auto hidden gap-1   xl:flex place-items-start max-h-[180px] max-w-[680px] overflow-auto">
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Karma.png"
            />
            <span className="font-extrabold text-zinc-800">Iconic</span>
          </li>
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Samira.png"
            />
            <span className="font-extrabold text-zinc-800">OTP</span>
          </li>
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Ornn.png"
            />
            <span className="font-extrabold text-zinc-800">Prodigy</span>
          </li>
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Hwei.png"
            />
            <span className="font-extrabold text-zinc-800">Washed</span>
          </li>
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Hwei.png"
            />
            <span className="font-extrabold text-zinc-800">Washed</span>
          </li>
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Hwei.png"
            />
            <span className="font-extrabold text-zinc-800">Washed</span>
          </li>
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Hwei.png"
            />
            <span className="font-extrabold text-zinc-800">Washed</span>
          </li>
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Hwei.png"
            />
            <span className="font-extrabold text-zinc-800">Washed</span>
          </li>
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Hwei.png"
            />
            <span className="font-extrabold text-zinc-800">Washed</span>
          </li>
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Hwei.png"
            />
            <span className="font-extrabold text-zinc-800">Washed</span>
          </li>
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Hwei.png"
            />
            <span className="font-extrabold text-zinc-800">Washed</span>
          </li>
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Hwei.png"
            />
            <span className="font-extrabold text-zinc-800">Washed</span>
          </li>
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Hwei.png"
            />
            <span className="font-extrabold text-zinc-800">Washed</span>
          </li>
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Hwei.png"
            />
            <span className="font-extrabold text-zinc-800">Washed</span>
          </li>
          <li className="flex items-center justify-center gap-2 px-2 py-1 bg-yellow-500 rounded-lg">
            <img
              className="w-6 rounded-lg "
              src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Hwei.png"
            />
            <span className="font-extrabold text-zinc-800">Washed</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileHeader
