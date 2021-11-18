import React from 'react'
import './style.scss';
import { Link } from 'react-router-dom'


const AlbumType2 = (props) => {
        const dataPlaylists = [
          {
            id: 101,
            category_id: 3,
            name: 'Home playlist 1',
            img:
              'https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 102,
            category_id: 3,
            name: 'Home playlist 2',
            img:
              'https://images.unsplash.com/photo-1587151711096-23c51f92c920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3',
            img:
              'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3',
            img:
              'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3',
            img:
              'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3',
            img:
              'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3',
            img:
              'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3',
            img:
              'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3',
            img:
              'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3',
            img:
              'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3',
            img:
              'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3',
            img:
              'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3',
            img:
              'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 104,
            category_id: 1,
            name: 'Focus playlist 1',
            img:
              'https://images.unsplash.com/photo-1587165282385-fe9bbf5eb1a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 105,
            category_id: 4,
            name: 'Sunday playist',
            img:
              'https://images.unsplash.com/photo-1587143602695-c980e283be9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 106,
            category_id: 2,
            name: 'Mood playist 1 ',
            img:
              'https://images.unsplash.com/photo-1587220111918-7a5c0f0c46f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            desc: 'Lorem ipsum',
          },
          {
            id: 107,
            category_id: 2,
            name: 'Mood playist 2',
            img:
              'https://images.unsplash.com/photo-1587169544748-d21bd810f57e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            desc: 'Lorem ipsum',
          },
        ]

        let matchedPlaylists = dataPlaylists
          .filter(playlist => playlist.category_id === props.category_id)
          .slice(0, props.limiter)
    return (
        <div className="cardsWrapInner">
        {matchedPlaylists.map((playlist, id) => (
        <Link to={`/playlist/` + playlist.id} key={id}>
          <div className="card" key={id}>
            <div className="cardImage">
              <img src={playlist.img} alt="Pic 1" />
            </div>
            <div className="cardContent">
              <h3>{playlist.name}</h3>
              <span>{playlist.desc}</span>
            </div>
            <span className="playIcon">
                <svg className="icon-play" viewBox="0 0 85 100"><path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"><title>PLAY</title></path></svg>

            </span>
          </div>
        </Link>
      ))}
    </div>
    )
}

export default AlbumType2
