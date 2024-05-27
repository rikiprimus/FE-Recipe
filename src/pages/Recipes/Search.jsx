import React, { useEffect, useState, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import {
  Navbar,
  Footer,
  Button,
  ButtonCard,
  CardTitle,
  CardRecipes,
  Pagination,
} from "../../components";
import { getRecipes } from "../../redux/action/recipes";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";

const Search = () => {
  const dispatch = useDispatch();
  const checkData  = useSelector((state) => state.recipes_get);
  const recipesData  = useSelector((state) => state.recipes_get.data);
  const paginationData  = useSelector((state) => state.recipes_get.pagination);
  const searchInput = useRef(null);
  const [params, setParams] = useState({
    search: "",
    sort: "ASC",
    sortBy: "createdAt",
    limit: 5,
    page: 1,
  });

  useEffect(() => {
    dispatch(getRecipes(params));
  }, [dispatch, params]);

  const handleSearch = () => {
    setParams({ ...params, search: searchInput.current.value, page: 1 });
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handlePrevious = () => {
    if (paginationData.page_prev !== 0) {
      setParams({ ...params, page: params.page - 1 });
    }
    window.scrollTo({ top: 550, behavior: 'smooth' });
  };
  const handleNext = () => {
    if (paginationData.page_next !== 0) {
      setParams({ ...params, page: params.page + 1 });
    }
    window.scrollTo({ top: 550, behavior: 'smooth' });
  };
  return (
    <>
      <div className="container-fluid custom-container">
        <Navbar />
        <div className="mt-5 mb-5">
          <div className="search-box d-flex flex-column mb-5">
            <div className="d-flex flex-column gap-3">
              <h1 className="title-text">
                Discover Recipe <br /> & Delicious Food
              </h1>
              <div className="position-relative d-flex flex-column gap-2 flex-md-row align-items-center">
                <BsSearch className="search-icon" />
                <input
                  type="text"
                  name="search"
                  className="input-box"
                  placeholder="Search by title"
                  onKeyPress={handleKeyPress}
                  ref={searchInput}
                />
                <Button text="Search" onClick={handleSearch} />
              </div>
            </div>
            <div className="d-flex flex-row gap-2 align-items-center my-4">
              <ButtonCard text="New" className="button-y2" />
              <ButtonCard text="Popular" className="button-y2" />
              <ButtonCard text="Vegetarian" className="button-g" />
              <ButtonCard text="Breakfast" className="button-g" />
            </div>
          </div>

          <div className="d-flex flex-column gap-5 ">
            {checkData.isLoading ? (
              <Loading 
                type='bubbles'
                color='#EFC81A'
                height={120}
                width={100}
              />
              // <div className="alert alert-primary text-center">loading ...</div>
            ) : checkData.isError ? (
              <div className="alert alert-danger text-center">
                Loading Failed : {checkData.ErrorMessage ?? "-"}
              </div>
            ) : (
              <div className="d-flex flex-column gap-5">
                {recipesData?.map((data, index) => (
                  <div key={index}>
                    <CardRecipes
                      to={`/recipes/detail/${data.id}`}
                      image={data.photo}
                      title={data.title}
                      ingredient={data.ingredient}
                      label="10 Likes - 12 Comment - 3 Bookmark"
                      createdphoto={data.photo_profile}
                      createdby={data.name}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <Pagination 
            paginationData={paginationData} 
            handleNext={handleNext} 
            handlePrevious={handlePrevious} 
          />    
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
