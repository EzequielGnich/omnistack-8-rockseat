import React from 'react'

import './Main.css'
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

export default function Main ({ match }) {
  return (
    <div className='main-container'>
      <img src={logo} alt='Tindev' />
      <ul>
        <li>
          <img src='https://avatars1.githubusercontent.com/u/31198390?v=4' alt='' />
          <footer>
            <strong>Ezequiel Gnich</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Duc</p>
          </footer>
          <div className='buttons'>
            <button type='button'>
              <img src={like} alt='Like' />
            </button>
            <button type='button'>
              <img src={dislike} alt='Dislike' />
            </button>
          </div>
        </li>

        <li>
          <img src='https://avatars1.githubusercontent.com/u/31198390?v=4' alt='' />
          <footer>
            <strong>Ezequiel Gnich</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Duc</p>
          </footer>
          <div className='buttons'>
            <button type='button'>
              <img src={like} alt='Like' />
            </button>
            <button type='button'>
              <img src={dislike} alt='Dislike' />
            </button>
          </div>
        </li>

        <li>
          <img src='https://avatars1.githubusercontent.com/u/31198390?v=4' alt='' />
          <footer>
            <strong>Ezequiel Gnich</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Duc</p>
          </footer>
          <div className="buttons">
            <button type='button'>
              <img src={like} alt='Like' />
            </button>
            <button type='button'>
              <img src={dislike} alt='Dislike' />
            </button>
          </div>
        </li>

        <li>
          <img src='https://avatars1.githubusercontent.com/u/31198390?v=4' alt='' />
          <footer>
            <strong>Ezequiel Gnich</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Duc</p>
          </footer>
          <div className="buttons">
            <button type='button'>
              <img src={like} alt='Like' />
            </button>
            <button type='button'>
              <img src={dislike} alt='Dislike' />
            </button>
          </div>
        </li>

        <li>
          <img src='https://avatars1.githubusercontent.com/u/31198390?v=4' alt='' />
          <footer>
            <strong>Ezequiel Gnich</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Duc</p>
          </footer>
          <div className="buttons">
            <button type='button'>
              <img src={like} alt='Like' />
            </button>
            <button type='button'>
              <img src={dislike} alt='Dislike' />
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}
