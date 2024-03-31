import React, { useState, useEffect } from 'react'
import './index.css'
import { Navbar, Footer, Button } from '../../components'
import { useNavigate } from 'react-router-dom'
import { postData } from '../../api/api'

const Create = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const navigate = useNavigate()
  const [photo, setPhoto] = useState()
  const [inputData, setInputData] = useState({
    title: "",
    ingredient: "",
    photo: "",
    video: "http://videorecipeku.com",
    category_id: "",
    users_id:"545f6b80-a0aa-4f24-9f82-f71dca1ca2eb"
});

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title: inputData.title,
        ingredient: inputData.ingredient,
        photo: photo,
        video: inputData.video,
        category_id: inputData.category_id,
        users_id: inputData.users_id
      };

      // Panggil fungsi postData dengan parameter yang diperlukan
      const response = await postData(data);
      console.log('Success:', response);
      navigate("/recipes/search")
      // Lakukan penanganan setelah permintaan berhasil disampaikan
    } catch (error) {
      console.error('Error:', error);
      // Lakukan penanganan kesalahan jika permintaan gagal
    }
  };
  const onChange = (e) => {
		setInputData({...inputData,[e.target.name]:e.target.value})
    
	}
	const onChangePhoto = (e) => {
		setPhoto(e.target.files[0])
		e.target.files[0] && setInputData({...inputData, photo: URL.createObjectURL(e.target.files[0])})
		console.log(e.target.files)
	}
  console.log(inputData)
  
  window.scrollTo(0, 0);
  return (
    <>
    <div className='container-fluid custom-container'>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="d-flex flex-column align-items-center my-5 " >
        <form className="form d-flex flex-column" onSubmit={handleFormSubmit}>
          <div className="form-group">
            {inputData.photo ? (
              <div>
                <img src={inputData.photo} width={1200} height={700} />
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
          <input type="text" id='title' name='title' placeholder='Title' className="input-box-recipe my-3" required onChange={onChange}/>
          <textarea rows="4" cols="50" name='ingredient' className="input-box-recipe my-3" placeholder="Ingredients" required onChange={onChange}></textarea>
          <select name="category_id" id="category_id" className="category-box my-3" onChange={onChange}>
            <option className="selected" value="">Category</option>
            <option className="select" value="3ef5ca5d-1b01-49c2-840f-a204502fb63d">Appetizer</option>
            <option className="select" value="ad3c939f-6976-4f7f-a477-619ee546c6fb">Main Course</option>
            <option className="select" value="f9f39283-a5c7-4d13-938e-5506b6fb2d8e">Dessert</option>
          </select>
          <div className='button-file mt-4 d-flex justify-content-center'>
            <div style={{width: '720px'}}>
              <Button text='Post' />
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Create
