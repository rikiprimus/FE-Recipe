import React, { useEffect, useState, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Navbar, Footer, Button, ButtonCard, CardTitle, CardRecipes, Pagination } from '../../components'
// import { fetchRecipes } from '../../api/api'
import { getRecipes } from '../../redux/action/recipes'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {
  const dispatch = useDispatch()
  const base = useSelector((state) => state.recipes_get.data)
  // const recipes = useSelector((state) => state.recipes)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [pagination, setPagination] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1);
  const searchInput = useRef(null);

  useEffect(() => {
    dispatch(getRecipes(page, search))
  }, [page, search])
  useEffect(() => {
    setData(base.data);
    setPagination(base.pagination);
  }, [])

  const handleSearch = () => {
    const inputSearch = searchInput.current.value;
    setSearch(inputSearch)
    setPage(1)
  }

  const handlePrevious = () => {
    setPage(page - 1)
    window.scrollTo({ top: 550, behavior: 'smooth' });
    console.log(page)
  }
  const handleNext = () => {
    setPage(page + 1)
    window.scrollTo({ top: 550, behavior: 'smooth' });
    console.log(page)
  }
  console.log("cek")
  console.log(page )

  // console.log(data)
  // console.log(pagination)
  return (
    <>
      <div className='container-fluid custom-container'>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="mt-5 mb-5" >
        <div className="search-box d-flex flex-column mb-5" >
          {/* <div className='d-flex flex-column gap-2 flex-md-row align-items-end'>
            <CardTitle placeholder='Search by title' ref={searchInput} />
            <Button text='Search' onClick={handleSearch} />
          </div> */}
          <div className="d-flex flex-column gap-3">
            <h1 className="title-text">Discover Recipe <br/> & Delicious Food</h1>
            <div className='position-relative d-flex flex-column gap-2 flex-md-row align-items-center'>
              <BsSearch className="search-icon" />
              <input type="text" name='search' className="input-box" 
                placeholder='Search by title' 
                ref={searchInput}
              />
              <Button text='Search' onClick={handleSearch} />
            </div>
          </div>
          <div className="d-flex flex-row gap-2 align-items-center my-4">
            <ButtonCard text='New' className='button-y2' />
            <ButtonCard text='Popular' className='button-y2' />
            <ButtonCard text='Vegetarian' className='button-g' />
            <ButtonCard text='Breakfast' className='button-g' />
          </div>
        </div>
        
        <div className="d-flex flex-column gap-5 ">
          {data.map((data, index) => (
            <div key={index}>
              <CardRecipes
                to={`/recipes/detail/${data.id}`}
                image={data.photo}
                title={data.title}
                ingredient={data.ingredient}
                label='10 Likes - 12 Comment - 3 Bookmark'
                createdphoto={data.photo_profile}
                createdby={data.name}
              />
            </div>
          ))}
          
        </div>
        {/* <Pagination pagination={pagination} handleNext={handleNext} handlePrevious={handlePrevious} /> */}
        {pagination.total_data <= 5 ? (
          <div className="d-flex flex-row gap-5 justify-content-center align-items-center mt-5">
            <h3 className="pagination mb-0">
              Show 1-5 from {pagination.total_data}
            </h3>
          </div>
        ) : pagination.page_prev === 0 ? (
          <div className="d-flex flex-row gap-5 justify-content-center align-items-center mt-5">
            <h3 className="pagination mb-0">
              Show 1-5 from {pagination.total_data}
            </h3>
            <Button text="Next" onClick={handleNext} />
          </div>
        ) : pagination.page_next === 0 ? (
          <div className="d-flex flex-row gap-5 justify-content-center align-items-center mt-5">
            <Button text="Previous" onClick={handlePrevious} />
            <h3 className="pagination mb-0">
              Show 1-5 from {pagination.total_data}
            </h3>
          </div>
        ) : (
          <div className="d-flex flex-row gap-5 justify-content-center align-items-center mt-5">
            <Button text="Previous" onClick={handlePrevious} />
            <h3 className="pagination mb-0">
              Show 1-5 from {pagination.total_data}
            </h3>
            <Button text="Next" onClick={handleNext} />
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Search
