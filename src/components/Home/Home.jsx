import React, { useEffect, useState } from "react";
import { getTrending } from "../../Api";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";
import {Offline} from 'react-detect-offline'
import Styles from "./Home.module.css"
import Disconnected from "../Disconnected/Disconnected";

export default function Home() {
  const [Movies, setMovies] = useState([]);
  const [Tv, setTv] = useState([]);

  async function getData() {
    let movies = await getTrending('movie' , 1)
    setMovies(movies.results)
    let tv = await getTrending('tv' , 1)
    setTv(tv.results)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
     <>
     <Offline><Disconnected /> </Offline>
      {Movies.length && Tv.length > 0 ? <>
        <div className="container">
          <div className="row mt-3">
            <div className={`col-md-12 m-auto d-flex flex-column align-items-center justify-content-center ${Styles.img1}`}>
              <h2 className="fw-bold mt-5">Trending Movies to watch</h2>
              <p className={`text-uppercase ${Styles.parag}`}>most watched movies by day</p>

            </div>
            {Movies.map((value, index) => <Item data={value} key={index} />)}
          </div>
        </div>
        <div className="container">
          <div className="row mt-3">
            <div className={`col-md-12 m-auto d-flex flex-column align-items-center justify-content-center ${Styles.img2}`}>
              <h2 className="fw-bold mt-5">Trending Tv to watch</h2>
              <p className={`text-uppercase ${Styles.parag}`}>most watched Tv by day</p>

            </div>
            {Tv.map((value, index) => <Item data={value} key={index} />)}
          </div>
        </div></>:<Loading />}
        </>
        )
}
