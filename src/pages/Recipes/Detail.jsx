import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import { ImageProfile, ImageDetail } from '../../assets'
import { Navbar, Footer, ButtonCard, CardUser } from '../../components'
// import { fetchRecipesAndCommentsById } from '../../api/api'
import { BsBookmark } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { getRecipesAndCommentsById } from "../../redux/action/recipes";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const dispatch = useDispatch();
  const recipeData  = useSelector((state) => state.recipesandcomments_getbyid.data);
  const commentsData  = useSelector((state) => state.recipesandcomments_getbyid.comments);
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false)
  const { id } = useParams()
  const [data, setData] = useState([]);

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  }
  const date = formatDate(recipeData?.createdat)

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };
  const toggleLiked = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    dispatch(getRecipesAndCommentsById(id))
    setData(recipeData?.ingredient.split(', '))
  }, [id])
  
  window.scrollTo(0, 0);
  return (
    <>
      <div className='container-fluid custom-container'>
        <Navbar />
        <div className='mb-5'>
          <CardUser 
            image={recipeData?.photo_profile}
            name={recipeData?.name}
            totalRecipes='10 (static)'
            dateCreated={date}
            likes='20 (static)'
            comments={!commentsData? "0" : commentsData.length}
          />
        </div>
        <div className="container-fluid d-flex flex-column">
          <div className="d-flex flex-column align-items-center">
            <h1 className="mb-5" style={{ color: "#2E266F", fontSize: 72 }}>
              {recipeData?.title}
            </h1>
            <img src={recipeData?.photo} alt="" className="img-detail mb-5" />
          </div>
          <div>
            <h1 className="mb-3">Ingredients</h1>
            <div className='my-5'>
              {data.map((data, index) => (
                <div key={index}>
                  <p className='text-start fs-3'>- {data}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='d-flex flex-row gap-3 mb-4'>
            {bookmarked? (
              <BsBookmark size={55} className='icon-button' onClick={toggleBookmark} />
              ) : (
                <BsBookmark size={55} className='icon-button-active' onClick={toggleBookmark} />
              )}
            {liked? (
              <AiOutlineLike size={55} className='icon-button' onClick={toggleLiked} />
              ) : (
                <AiOutlineLike size={55} className='icon-button-active' onClick={toggleLiked} />
              )}
          </div>

          <div style={{ width: "100%" }}>
            <div className="line-full mb-5" />

            {commentsData?.map((comments, index) => (
              <div key={index} className="d-flex flex-row align-items-center mb-5">
                <img src={comments.photo_profile} className="img-profile rounded-circle" alt="..." />
                <div className="d-flex flex-column justify-content-center">
                  <p className="row-1 name-profile pt-3">{comments.name}</p>
                  <p className="row-1 logout">10 Recipe</p>
                </div>
                <div
                  className="border-left"
                  style={{ marginLeft: 20, marginRight: 20 }}
                />
                <p className=" mt-3 fs-5">
                  {comments.fill_comment}
                </p>
              </div>
            ))}


            
            <div className="line-full mb-5" />
            <div className="d-flex flex-column mb-5" style={{width: '50%'}}>
              <textarea
                className="input-box-comment mb-5"
                placeholder="Your Comment Here"
                rows="4" cols="50"
              />
              <ButtonCard text='Send a Comment'  className='button-o' />
            </div>
          </div>
        </div>

        
      </div>
      <Footer />
    </>
  )
}

export default Detail
