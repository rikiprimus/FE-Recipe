import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ImageProfile, ImageDetail } from '../../assets'
import { Navbar, Footer, ButtonCard, CardUser } from '../../components'
import { fetchRecipesById } from '../../api/api'

const Detail = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const { id } = useParams()
  const [data, setData] = useState([]);
  const [dataI, setDataI] = useState([])

  useEffect(() => {
    const fetchDataBE = async () => {
      try {
        const result = await fetchRecipesById(id)
        const base = result.data.ingredient
        setDataI(base.split([', ']))
        setData(result.data)
        console.log(result.data)
        console.log(base.split([', ']))
      } catch (error) {
        console.error ('Error fetching data: ', error)
      }
    }
    fetchDataBE()
    
  }, [id])

  return (
    <>
      <div className='container-fluid custom-container'>
        <Navbar isLoggedIn={isLoggedIn} />
        <div className='mb-5'>
          <CardUser 
            image={data.photo_profile}
            name={data.name}
            totalRecipes='10 (static)'
            dateCreated='10 November 2020 (static)'
            likes='20 (static)'
            comments='2 (static)'
          />
        </div>
        {/* {data && (
          
          )} */}
        <div className="container-fluid d-flex flex-column">
          <div className="d-flex flex-column align-items-center">
            <h1 className="mb-5" style={{ color: "#2E266F", fontSize: 72 }}>
              {data.title}
            </h1>
            <img src={data.photo} alt="" className="img-detail mb-5" />
          </div>
          <div>
            <h1 className="mb-3">Ingredients</h1>
            <div className='my-5'>
              {dataI.map((dataI, index) => (
                <div key={index}>
                  <p className='text-start fs-3'>- {dataI}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            
          </div>

          <div style={{ width: "100%" }}>
            <div className="line-full mb-5" />
            <div>static</div>
            <div className="d-flex flex-row align-items-center mb-5">
              <img src={ImageProfile} className="img-profile" alt="..." />
              <div className="d-flex flex-column justify-content-center">
                <p className="row-1 name-profile pt-3">Karen</p>
                <p className="row-1 logout">10 Recipe</p>
              </div>
              <div
                className="border-left"
                style={{ marginLeft: 20, marginRight: 20 }}
              />
              <p className=" mt-3 fs-5">
                Wow, I just made this and it was delicious! Thanks for sharing!
              </p>
            </div>
            <div className="d-flex flex-row align-items-center mb-5">
              <img src={ImageProfile} className="img-profile" alt="..." />
              <div className="d-flex flex-column justify-content-center">
                <p className="row-1 name-profile poppins-medium pt-3">Ariel</p>
                <p className="row-1 logout">20 Recipe</p>
              </div>
              <div
                className="border-left"
                style={{ marginLeft: 20, marginRight: 20 }}
              />
              <p className=" mt-3 fs-5">So simple and delicious!</p>
            </div>
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
