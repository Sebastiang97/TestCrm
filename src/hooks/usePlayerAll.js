import { useEffect, useState } from 'react'
import { get } from '../api'

export const usePlayerAll = () => {
  const [state, setState] = useState({
    players: [],
    loading: true,
  })

  useEffect(() => {
    get('proPlayers').then((players) => {
      setState({
        players: players.slice(0, 5),
        loading: false,
      })
    })
  }, [])

  return state
}
