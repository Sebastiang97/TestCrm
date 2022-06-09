import { useEffect, useState } from 'react'
import { get } from '../api'

export const usePlayer = (accountId) => {
  const [state, setState] = useState({
    players: {},
    loading: true,
  })

  useEffect(() => {
    get('/players/' + accountId).then((player) => {
      setState({
        player: player,
        loading: false,
      })
    })
  }, [accountId])

  return state
}
