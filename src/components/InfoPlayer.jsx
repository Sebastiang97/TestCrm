import React from 'react'
import { useParams } from 'react-router-dom'
import { usePlayer } from '../hooks/usePlayer'

export const InfoPlayer = () => {
  const { accountId } = useParams()
  console.log(accountId)

  const { player, loading } = usePlayer(accountId)
  console.log(player)
  return (
    <div className='home'>
      <div className='row'>
        <div className='col-lg-12'>
          {loading ? (
            <p>cargando....</p>
          ) : (
            <div className='card mb-3' style={{ maxWidth: '540px' }}>
              <div className='row g-0'>
                <div className='col-md-4 d-flex justify-content-center align-middle'>
                  <img
                    src={player.profile.avatarmedium}
                    className='img-fluid rounded-start'
                    alt={player.profile.avatarmedium}
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h5 className='card-title'>{player.profile.name}</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>
                      {player.leaderboard_rank}
                    </h6>
                    <p className='card-text'>
                      {' '}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur autem rem dolorum ut doloremque dolorem nisi
                      iste, accusantium ea, placeat inventore natus suscipit
                      esse modi perferendis eaque reiciendis voluptatem
                      temporibus.
                    </p>
                    <p className='card-text'>
                      <small className='text-muted'>
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
