import axios, { AxiosRequestConfig } from 'axios'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProfile {
  className?: string
  debug?: boolean
}
type SummonerProfile = {
  gameName: string
  tagLine: string
} & SummonerDTO

type RegionPrefix = 'europe' | 'euw1'

type AccountDTO = { puuid: string; gameName?: string; tagLine?: string }

type SummonerDTO = {
  accountId: string
  profileIconId: number
  revisionDate: number
  name: string
  id: string
  puuid: string
  summonerLevel: number
}

const Profile: React.FC<IProfile> = ({ className, debug }) => {
  const [gameNameInput, setGameNameInput] = useState('Samira')
  const [tagLineInput, setTagLineInput] = useState('Combo')
  const [puuid, setPuuid] = useState('')
  const [summoner, setSummoner] = useState<SummonerDTO | null>()
  const [profile, setProfile] = useState<SummonerProfile>({
    gameName: 'Samira',
    tagLine: 'Combo',
    accountId: 'llYn_nYTXzLr9xiPEkUmeOi6Qqiwi61Zw2YV9WKh2vkjQQ',
    profileIconId: 6100,
    revisionDate: 1708376750000,
    name: 'Gun Goddess',
    id: 'sUHRWIknlEJ3trbOkFY8LeSyglPttgEvOC2IyaU4iapMdBo',
    puuid: 'vKLzr7B3wUcZZ2pmfryojxczOpK77AfL0N2AU6UrHkYbJjw_znTw6moG6WKm_H00zjdKxKZivsKFcw',
    summonerLevel: 655
  })

  const getUrl = (regionPrefix: RegionPrefix, path: string) => {
    const base = 'api.riotgames.com'
    return `https://${regionPrefix}.${base}.${path}`
  }

  const fetchPuuid = async () => {
    try {
      const config: AxiosRequestConfig = {
        url: getUrl(
          'europe',
          `/riot/account/v1/accounts/by-riot-id/${gameNameInput}/${tagLineInput}`
        ),
        method: 'get'
      }
      const response = await window.api.makeFetch(config)
      const { status, statusText, data } = response

      if (status === 200) {
        setPuuid((data as AccountDTO).puuid)
      } else {
        throw Error(statusText)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchSummoner = async () => {
    if (!puuid) return

    try {
      const config: AxiosRequestConfig = {
        url: getUrl('euw1', `/lol/summoner/v4/summoners/by-puuid/${puuid}`),
        method: 'get'
      }

      const response = await window.api.makeFetch(config)
      const { status, statusText, data } = response

      if (status === 200) {
        setSummoner(data as SummonerDTO)
      } else {
        throw Error(statusText)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {}, [])

  return (
    <div className={twMerge('w-full h-full px-24 relative overflow-auto', className)}>
      <div className="absolute top-0 right-0 p-10 join">
        <input
          type="text"
          className="text-center input input-bordered join-item"
          placeholder="Name"
          minLength={3}
          maxLength={16}
          pattern="[A-Za-z0-9]+"
          value={gameNameInput}
          onChange={(ev) => setGameNameInput(ev.target.value)}
        />
        <div className="text-xl text-white btn btn-disabled join-item">#</div>

        <input
          type="text"
          className="text-center input input-bordered max-w-32 join-item"
          placeholder="Tag Line"
          minLength={2}
          maxLength={5}
          pattern="[A-Za-z0-9]+"
          value={tagLineInput}
          onChange={(ev) => setTagLineInput(ev.target.value)}
        />
      </div>

      <div className="flex items-center gap-4 mx-20 my-10 ">
        {/* Icon and Level*/}
        <div className="select-none avatar indicator">
          <span className="h-8 text-xl font-bold indicator-item indicator-bottom indicator-center badge badge-primary">
            {profile.summonerLevel}
          </span>
          <div className="w-40 rounded-full ring-4 ring-primary ring-offset-base-100 ring-offset-4">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.4.1/img/profileicon/${profile.profileIconId}.png`}
              alt="summoner icon"
            />
          </div>
        </div>
        {/* Gamename and Tagline */}
        <h1 className="my-4 text-6xl font-bold text-center">
          {profile.gameName}
          <span className="px-4 font-medium text text-secondary/40">#{profile.tagLine}</span>
        </h1>
      </div>

      <div className="flex h-full border-2 border-red-600">
        <div>Stats</div>
        <div>Match History</div>
      </div>
    </div>
  )
}

export default Profile
