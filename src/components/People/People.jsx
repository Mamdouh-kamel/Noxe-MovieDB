import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { getSearchData, getTrending } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function People() {

  let { searchValue } = useSelector((state) =>{
    return state.Search
  })

  const [People, setPeople] = useState([]);
  const [Search, setSearch] = useState('');
  const [CurrentPage, setCurrentPage] = useState(1);

  let handlePageClick = async (data) => {
    // console.log(data.selected);
    let number = await data.selected;
    setCurrentPage(number + 1);
  }


  async function getData(){
    
    let  people = await getTrending('person', CurrentPage)
    setPeople(people.results)
    // console.log(people)
    let search = await getSearchData('person', searchValue);
    setSearch(search.results);
    console.log(search);
  }
 useEffect(()=>{
   getData();
   handlePageClick();
 }, [searchValue, CurrentPage + 1])
  
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          {Search.length > 0? Search.map((value, index) => (<Item data={value} key={index}/>)):
          People.length > 0? People.map((value, index) => (<Item data={value} key={index} />)):
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
  )
}
