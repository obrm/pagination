import React from 'react'

const User = ({ avatar_url, html_url, login }) => {
  return (
    <article className='card'>
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a
        href={html_url}
        target='_blank'
        rel='noopener noreferrer'
        className='btn'
      >
        view profile
      </a>
    </article>
  )
}

export default User
