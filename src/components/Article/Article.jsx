import React from 'react'
import './Article.css'

export default function Article({imgURL, title, date}) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-image">
        <img src={imgURL} alt="blogImage" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full article</p>
      </div>
    </div>
  )
}
