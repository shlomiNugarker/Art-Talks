/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { socketService } from '../services/socketService'

import style from '../assets/scss/pages/_details.module.scss'

export function Details({ arts }: any) {
  const params = useParams()
  const [art, setArt] = useState<any>()
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const artToShow = arts.find(
      (art: { id: string | undefined }) => art.id?.toString() === params.id
    )

    setArt(artToShow)
  }, [arts, params.id])

  useEffect(() => {
    socketService.on('get-msg', (msgs: string[]) => {
      console.log(msgs)
    })
    return () => {
      socketService.off('get-msg')
    }
  }, [])

  const send = () => {
    console.log(msg)
    const artToSave = { ...art }
    console.log({ artToSave })

    artToSave?.msgs.push(msg)
    socketService.emit('send-msg', artToSave)
    setMsg('')
  }

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
            <div className={style.listmsg}>
              {art?.msgs?.map((msg: any) => (
                <p key={Math.random()}>{msg}</p>
              ))}
            </div>
            <div className={style.send}>
              <input
                type="text"
                value={msg}
                onChange={(ev) => setMsg(ev.target.value)}
              />
              <button onClick={send}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
