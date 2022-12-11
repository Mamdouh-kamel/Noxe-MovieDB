import React, { Profiler, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails, getSearchData } from "../../Api";
import Loading from "../Loading/Loading";

import img1 from '../../imgs/no-image-300x450-1.jpg'


export default function ItemDetails() {
  
  let x = useParams();
  
  const [Details, setDetails] = useState('');
  
  let { title,name, media_type, birthday, profile_path, popularity, biography, poster_path, overview, vote_average, vote_count, release_date, first_air_date, tagline, genres} = Details;

  async function getData() {
    let details = await getDetails(x.id, x.media);
    setDetails(details);
  }
  // console.log(Details)
  useEffect(() => {
    
    getData();
  
  }, []);

  //   useEffect(() => {

  //     async function getData() {
  //         let details = await getDetails(x.id, x.media);
  //         setDetails(details);
  //       }
  //     getData();

  //   }, [Details, x.id, x.media]);

  return (
    <>
      {Details ?
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              {poster_path?<img
                className="w-100"
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt=""
              />:
               poster_path === null ? <img className="img-fluid mb-2" src={img1} alt="" />:
               profile_path  === null? <img className="w-100" alt="" src={img1}/> :
              <img className="w-100"
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt=""/>}
            </div>
            <div className="col-md-8">
              {popularity && birthday? <h3>{name}</h3> :title ?<h3>{title} <span className="text-white-50">({release_date ? release_date.slice(0,4):''})</span></h3>:
              name && first_air_date ?<h3>{name} <span className="text-white-50">({first_air_date ? first_air_date.slice(0,4):''})</span></h3>:<h3>{name}</h3>}
              
              <div>
                {genres? genres.map((value, index) => (
                  <span
                    key={index}
                    className={`badge bg-info bg-opacity-75 inline-block p-2 mx-2`}
                  >
                    {value.name}
                  </span>
                )):''}
              </div>
              {tagline?<h5 className="text-white-50 mt-5 fst-italic">{tagline}</h5>:''}
              <div className="my-3">
                
                {overview?<p className="text-white-50 my-2"><span className="text-white fs-4">Overview:</span> {overview}</p>:
                biography === ''?'':
                <p className="text-white-50"><span className="text-white fs-4">Biograpgy:</span> {biography}</p>}
              </div>

              <ul className="list-unstyled my-5">
                {vote_average?<li>Vote avergae: {vote_average}</li>:<li>Popularity: {popularity}</li>}
                {vote_count?<li>Vote count: {vote_count}</li>:''}
                {release_date?<li>Release date: {release_date}{first_air_date}</li>:birthday === null? "":
                <li>Birth date: {birthday}</li>}
              </ul>
            </div>
          </div>
        </div>
      : 
        <Loading />
      }
    </>
  );
}
