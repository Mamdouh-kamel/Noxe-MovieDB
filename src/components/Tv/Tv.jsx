import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { getSearchData, getTrending } from '../../Api';
import Item from '../Item/Item';
import ItemSearch from '../ItemSearch/ItemSearch';
import Loading from '../Loading/Loading';

export default function Tv() {
  let { searchValue } = useSelector((state) => {
    return state.Search
  })

  const [Tv, setTv] = useState([]);
  const [Search, setSearch] = useState('');
  const [CurrentPage, setCurrentPage] = useState(1);

  let handlePageClick = async (data) => {
    let number = await data.selected;
    setCurrentPage(number + 1);
  }

  async function getData() {

    let tv = await getTrending('tv', CurrentPage)
    setTv(tv.results)
    let search = await getSearchData('tv', searchValue);
    setSearch(search.results);
    // console.log(search);
  }
  useEffect(() => {
    getData();
    handlePageClick();
  }, [searchValue, CurrentPage + 1])

  return (
    <>
      <div className="container">
        <div className="row mt-3">

          {Search.length> 0 ? Search.map((value, index) =>(<ItemSearch data={value} key={index} />)):
           Tv.length > 0 ? Tv.map((value, index) => <Item data={value} key={index} tvs={true} />):
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
        pageRangeDisplayed={2}
        renderOnZeroPageCount={null}
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

  )
}
