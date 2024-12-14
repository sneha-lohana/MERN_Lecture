import React from 'react';
import './Card.css';

export default function Card(props) {
  // console.log(props);
  // loading 1st data
  // const profile = props.profile;
  const profile = props;
  return (
    <div className='profile-info'>
      <img src={profile.avatar_url} alt={profile.login} style={ {width:'150px', borderRadius: '50%'} }/>
      <div>
        <div>{profile.login}</div>
        <a href={profile.html_url} target='_blank' rel="noreferrer">Github Link</a>
      </div>
    </div>
  )
}
