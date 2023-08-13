import { useEffect, useState } from 'react'
import style from '../assets/scss/pages/_home.module.scss'
import { Link } from 'react-router-dom'

export const Home = ({ arts }: any) => {
  const [txt, setTxt] = useState('')

  const getArtsToShow = (arts: any[]) => {
    const regex = new RegExp(txt, 'i')
    return arts?.filter((art) => regex.test(art.name))
  }

  useEffect(() => {}, [txt])

  return (
    <section className={style.home}>
      <header>
        <h1>Art talks</h1>
      </header>
      <div className={style.input}>
        <input
          value={txt}
          onChange={(ev) => setTxt(ev.target.value)}
          type="text"
        />
      </div>

      {/* LIST: */}
      <div className={style.list}>
        {getArtsToShow(arts).map((art) => (
          // PREVIEW:
          <Link key={art.id} to={`/details/${art.id}`}>
            <div className={style.preview}>
              <div>
                <img src={art.image} alt="" />
              </div>
              <div className={style.bottom}>
                <h2> {`${art.name}`} </h2>
                <h3>{art.name} </h3>
                <p>{art.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
