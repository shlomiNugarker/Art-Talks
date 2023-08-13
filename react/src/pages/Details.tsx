import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import style from '../assets/scss/pages/_details.module.scss'

const msgsData = [
  {
    msgs: ['hey'],
  },
]

export function Details({ arts }: any) {
  const params = useParams()
  const [art, setArt] = useState<any>()

  useEffect(() => {
    const artToShow = arts.find(
      (art: { id: string | undefined }) => art.id?.toString() === params.id
    )

    setArt(artToShow)
  }, [arts, params.id])

  return (
    <section className={style.details}>
      <div className={style.container}>
        <h1>{art?.name}</h1>
        <span>{art?.description}</span>

        <div>
          <div className={style?.img}>
            <img src={art?.image} alt="" />
          </div>
          <div className={style.chat}>
            <p>Chat</p>
            <div className={style.listmsg}>msgs list</div>
            <div className={style.send}>
              <input type="text" />
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
