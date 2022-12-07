import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Item.module.css";
import img1 from '../../imgs/no-image-300x450-1.jpg'
export default function Item(props) {
  let { title, name, poster_path, overview, vote_average, profile_path, id, media_type = 'undefined' ?'person' :media_type} = props.data;
  
  return (
    <>
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mt-4 text-center">
        <Link className="text-decoration-none text-white" to={`/details/${id}/${media_type}`}>

          <div className={`${Styles.item} position-relative overflow-hidden mb-1`}>
            {poster_path?<img
              className="w-100 mb-2"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt=""/>:
              profile_path === null?
              <img className="img-fluid mb-2" src={img1} alt=""/>:
              <img className="w-100 mb-2" src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt=""/>}

              {overview?<div className={`${Styles.overlay} position-absolute end-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black opacity-75`}>
                <p>{overview.split(" ").slice(0, 13).join(" ")}....</p>
              </div>:''}
            
            {vote_average?<div className={`${Styles.rate} p-2 position-absolute text-center top-0 end-0 bg-info`}>
              {vote_average.toFixed(1)}
            </div>:''}
          </div>
        </Link>
        <div>
          <h6>{name || title}</h6>
        </div>
      </div>
    </>
  );
}
