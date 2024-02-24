import { AxiosRequestConfig } from 'axios'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import ProfileHeader from './ProfileHeader'
import { champions } from '@renderer/data/mock-champ-data'

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

export const profileMockData: SummonerProfile = {
  gameName: 'Samira',
  tagLine: 'Combo',
  accountId: 'llYn_nYTXzLr9xiPEkUmeOi6Qqiwi61Zw2YV9WKh2vkjQQ',
  profileIconId: 6100,
  revisionDate: 1708376750000,
  name: 'Gun Goddess',
  id: 'sUHRWIknlEJ3trbOkFY8LeSyglPttgEvOC2IyaU4iapMdBo',
  puuid: 'vKLzr7B3wUcZZ2pmfryojxczOpK77AfL0N2AU6UrHkYbJjw_znTw6moG6WKm_H00zjdKxKZivsKFcw',
  summonerLevel: 655
}

const Profile: React.FC<IProfile> = ({ className, debug }) => {
  const [gameNameInput, setGameNameInput] = useState('Samira')
  const [tagLineInput, setTagLineInput] = useState('Combo')
  const [puuid, setPuuid] = useState('')
  const [summoner, setSummoner] = useState<SummonerDTO | null>()

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
    <div className={twMerge('', className)}>
      {/* <div className="fixed top-0 left-0 w-full h-full bg-blend-overlay bg-gradient-to-r from-neutral from-10% via-neutral/20 to-neutral to-90%"></div> */}

      <section
        style={{
          backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champions[Math.floor(Math.random() * champions.length)]}_${0}.jpg)`
          // backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champions[120]}_${0}.jpg)`
        }}
        className="flex flex-col h-full overflow-auto bg-[center_top_8rem] 2xl:bg-[top_8rem_left_320px] bg-fixed bg-no-repeat bg-contain rounded-3xl bg-blend-overlay"
      >
        <div className="fixed inset-0 h-screen bg-gradient-radial from-30% from-base-100/50 to-base-100 to-70%"></div>
        <ProfileHeader className="z-40 " />

        <div className="z-40 flex w-full min-h-full gap-4 h-fit bg-base-100">
          <div className="flex-auto border border-green-500 min-w-[680px] rounded-3xl">
            Match History
          </div>
          <div className="border border-blue-500 min-w-80 rounded-3xl">Stats</div>
        </div>
      </section>
    </div>
  )
}

export default Profile
