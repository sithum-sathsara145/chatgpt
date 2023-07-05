import React from 'react';
import './whatGPT.css'
import { Feature } from '../../components';

export default function WhatGPT() {
  const whatgptText ='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
  const chatbots = 'We so opinion friends me message as delight. Whole front do of plate heard oh oughWe so opinion friends me message as delight. Whole front do of plate heard oh ought. '
  const knowledge = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments '
  const education = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments '
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wghp3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title='What is GPT-3' text={whatgptText}/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'> The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature  title='Chatbots' text={chatbots} />
        <Feature title='Knowledge' text={knowledge} />
        <Feature title='Education' text={education}/>
      </div>
    </div>
  )
}
