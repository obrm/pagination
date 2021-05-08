import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import User from './User'

const App = () => {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (loading) return
    setUsers(data[page])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, page])

  const handlePage = (index) => setPage(index)

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? `loading...` : `pagination`}</h1>
        <div className='underline'></div>
      </div>
      <section className='users'>
        <div className='container'>
          {users.map((item) => (
            <User key={item.id} {...item} />
          ))}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {data.map((_, i) => {
              return (
                <button
                  key={i}
                  className={`page-btn ${i === page && `active-btn`}`}
                  onClick={() => handlePage(i)}
                >
                  {i + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
