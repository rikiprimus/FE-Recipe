import React, { useEffect, useState, useRef } from 'react'
import { ImageRecipe, ImageProfile } from '../../assets'
import { Navbar, Footer, Button, ButtonCard, CardTitle, CardRecipes, Pagination } from '../../components'
import { fetchRecipes } from '../../api/api'
import { BsSearch } from 'react-icons/bs'

const Search = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [pagination, setPagination] = useState([]);
  const [search, setSearch] = useState('')
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const searchInput = useRef(null);

  useEffect(() => {
    const fetchDataBE = async () => {
      try {
        const params = {
          search: search, //ini
          searchBy: 'title',
          sort: 'ASC',
          sortBy: 'createdAt',
          limit: 5,
          page: page//ini
        }
        const result = await fetchRecipes(params)
        console.log(page)
        setData(result.data)
        setPagination(result.pagination)
        console.log(result.data)
        console.log(result.pagination)
      } catch (error) {
        console.error ('Error fetching data: ', error)
      }
    }
    fetchDataBE()
  }, [page, search])
  const handleSearch = (e) => {
    const inputSearch = searchInput.current.value;
    setSearch(inputSearch)
    setPage(1)
  }

  const handlePrevious = () => {
    setPage(page - 1)
    window.scrollTo({ top: 550, behavior: 'smooth' });
  }
  const handleNext = () => {
    setPage(page + 1)
    window.scrollTo({ top: 550, behavior: 'smooth' });
  }

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
        <Pagination pagination={pagination} handleNext={handleNext} handlePrevious={handlePrevious} />
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Search
