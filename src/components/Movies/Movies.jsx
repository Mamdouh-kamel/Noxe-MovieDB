import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { getSearchData, getTrending } from "../../Api";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

export default function Movies() {
  let { searchValue } = useSelector((state) => {
    return state.Search
  })


  const [Movies, setMovies] = useState([]);
  const [Search, setSearch] = useState('');
  const [CurrentPage, setCurrentPage] = useState(1);

  let handlePageClick = async (data) => {
    // console.log(data.selected);
    let number = await data.selected;
    setCurrentPage(number + 1);
  }
  async function getData() {

    let movies = await getTrending("movie", CurrentPage);
    setMovies(movies.results);
    // console.log(movies)
    let search = await getSearchData('movie', searchValue);
    setSearch(search.results);
    // console.log(search);

  }
  useEffect(() => {
    getData();
    handlePageClick();
  }, [searchValue, CurrentPage + 1]);

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          {
            Search.length > 0 ? Search.map((value, index) => (<Item data={value} key={index} />)) : ''
          }
          {
            Movies.length > 0 ? Movies.map((value, index) => (<Item data={value} key={index} />)) :
              <Loading />}

        </div>
      </div>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={100}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item "}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}
