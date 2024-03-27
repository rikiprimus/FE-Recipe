import React, { useState, useEffect } from 'react'
import './index.css'
import { ImageEdit } from '../../assets'
import { Navbar, Footer, Button } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchRecipesById, postData } from '../../api/api'

const Edit = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const { id } = useParams()
  const navigate = useNavigate()
  const [photo, setPhoto] = useState()
  // const [showData, setShowData] = useState([])
  const [data, setData] = useState({
    title: "",
    ingredient: "",
    photo: "",
    video: "http://videorecipeku.com",
    category_id: "",
    users_id:"545f6b80-a0aa-4f24-9f82-f71dca1ca2eb"
  });

  useEffect(() => {
    const fetchDataBE = async () => {
      try {
        const result = await fetchRecipesById(id)
        setData(result.data)
        console.log(result.data)
      } catch (error) {
        console.error ('Error fetching data: ', error)
      }
    }
    fetchDataBE()
  }, [id])

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataInput = {
        title: data.title,
        ingredient: data.ingredient,
        photo: photo,
        video: data.video,
        category_id: data.category_id,
        users_id: data.users_id
      };

      // Panggil fungsi postData dengan parameter yang diperlukan
      const response = await postData(dataInput);
      console.log('Success:', response);
      navigate("/recipes/search")
      // Lakukan penanganan setelah permintaan berhasil disampaikan
    } catch (error) {
      console.error('Error:', error);
      // Lakukan penanganan kesalahan jika permintaan gagal
    }
  };
  const onChange = (e) => {
		setData({...data,[e.target.name]:e.target.value})
    
	}
	const onChangePhoto = (e) => {
		setPhoto(e.target.files[0])
		e.target.files[0] && setData({...data, photo: URL.createObjectURL(e.target.files[0])})
		console.log(e.target.files)
	}


  return (
    <>
    <div className='container-fluid custom-container'>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="d-flex flex-column align-items-center my-5 " >
        <form className="form d-flex flex-column" onSubmit={handleFormSubmit}>
          <div className="form-group">
            {data.photo ? (
              <div>
                <img src={data.photo} width={1200} height={700} />
                <label
                  htmlFor="fileInput"
                  className="file-edit"
                  style={{ position: "absolute", top: 520, left: 800, zIndex: 1 }}
                >
                  Change Photo
                </label>
                <input type="file" id="fileInput" className='invisible' onChange={onChangePhoto}/>
              </div>
            ):(
              <label htmlFor="fileInput" className="custom-file-upload">Add Photo</label>
            )}
            <input type="file" id="fileInput" name='filePhoto' className='invisible' onChange={onChangePhoto}/>
          </div>
          <input type="text" id='title' name='title' placeholder='Title' className="input-box-recipe my-3" value={data.title} required onChange={onChange}/>
          <textarea rows="4" cols="50" name='ingredient' className="input-box-recipe my-3" placeholder="Ingredients" value={data.ingredient} required onChange={onChange}></textarea>
          <select name="category_id" id="category_id" className="category-box my-3" value={data.category_id} onChange={onChange}>
            <option className="selected" value="">Category</option>
            <option className="select" value="3ef5ca5d-1b01-49c2-840f-a204502fb63d">Appetizer</option>
            <option className="select" value="ad3c939f-6976-4f7f-a477-619ee546c6fb">Main Course</option>
            <option className="select" value="f9f39283-a5c7-4d13-938e-5506b6fb2d8e">Dessert</option>
          </select>
          <div className='button-file mt-4 d-flex justify-content-center'>
            <div style={{width: '720px'}}>
              <Button text='Update' />
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Edit
