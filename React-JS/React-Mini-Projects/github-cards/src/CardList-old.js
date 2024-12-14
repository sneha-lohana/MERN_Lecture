import React, { useRef, useState } from 'react';
import Card from './Card';
import testData from './test-data.json';

export default function CardList() {
  const pageSize = 3;
  // let pageNumber = 0; 
  // const [pageNumber, setPageNumber] = useState(0);
  const pageNumber = useRef(0);
  let [profiles, setProfile] = useState(testData.slice(0, pageSize));
  
  const onPrev = () => {
    // setPageNumber(pageNumber-1);
    pageNumber.current -=1;
    console.log(pageNumber);
    changeProfiles();
  };
  const onNext = () => {
    // pageNumber +=1;
    // setPageNumber(pageNumber+1);
    pageNumber.current +=1;
    console.log(pageNumber);
    changeProfiles();  
  };

  const changeProfiles = () => {
    const start = pageNumber.current * pageSize; 
    const end = start + pageSize;
    setProfile(testData.slice(start, end));
  }

  console.log("rendering", pageNumber);
  
  return (
    <>
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
      
      {profiles.map(profile => {
          return <Card {...profile} key={profile.id} />
        })}
    </>
  )
}
