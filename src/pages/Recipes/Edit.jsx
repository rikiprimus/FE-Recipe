import React, { useState, useEffect } from "react";
import "./index.css";
import { ImageEdit } from "../../assets";
import { Navbar, Footer, Button } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
// import { fetchRecipesById, postData } from '../../api/api'
import { useDispatch, useSelector } from "react-redux";
import { getRecipesById, updateRecipes } from "../../redux/action/recipes";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipeData = useSelector((state) => state.recipes_getbyid?.data?.data);
  // console.log(recipeData)
  const { id } = useParams();
  const [photo, setPhoto] = useState();
  // const [showData, setShowData] = useState([])
  const [inputData, setInputData] = useState({
    title: "",
    ingredient: "",
    photo: "",
    video: "",
    category_id: "",
    users_id: "",
  });

  useEffect(() => {
    dispatch(getRecipesById(id));
    setInputData(recipeData);
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: inputData?.title,
      ingredient: inputData?.ingredient,
      photo: photo,
      video: inputData?.video,
      category_id: inputData?.category_id,
      users_id: inputData?.users_id,
    };

    dispatch(updateRecipes(id, data, navigate));
  };
  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };
  const onChangePhoto = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
    if (selectedPhoto) {
      setInputData({ ...inputData, photo: URL.createObjectURL(selectedPhoto) });
    }
  };

  return (
    <>
      <div className="container-fluid custom-container">
        <Navbar />
        <div className="d-flex flex-column align-items-center my-5 ">
          <form className="form d-flex flex-column" onSubmit={handleFormSubmit}>
            <div className="form-group">
              {inputData?.photo ? (
                <div>
                  <img src={inputData?.photo} className="img-edit" />
                  <label
                    htmlFor="fileInput"
                    className="file-edit"
                    style={{
                      position: "absolute",
                      top: 520,
                      left: "50%",
                      zIndex: 1,
                    }}
                  >
                    Change Photo
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    className="invisible"
                    onChange={onChangePhoto}
                  />
                </div>
              ) : (
                <label htmlFor="fileInput" className="custom-file-upload">
                  Add Photo
                </label>
              )}
              <input
                type="file"
                id="fileInput"
                name="filePhoto"
                className="invisible"
                onChange={onChangePhoto}
              />
            </div>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              className="input-box-recipe my-3"
              value={inputData?.title}
              required
              onChange={onChange}
            />
            <textarea
              rows="4"
              cols="50"
              name="ingredient"
              className="input-box-recipe my-3"
              placeholder="Ingredients"
              value={inputData?.ingredient}
              required
              onChange={onChange}
            ></textarea>
            <select
              name="category_id"
              id="category_id"
              className="category-box my-3"
              value={inputData?.category_id}
              onChange={onChange}
            >
              <option className="selected" value="">
                Category
              </option>
              <option
                className="select"
                value="3ef5ca5d-1b01-49c2-840f-a204502fb63d"
              >
                Appetizer
              </option>
              <option
                className="select"
                value="ad3c939f-6976-4f7f-a477-619ee546c6fb"
              >
                Main Course
              </option>
              <option
                className="select"
                value="f9f39283-a5c7-4d13-938e-5506b6fb2d8e"
              >
                Dessert
              </option>
            </select>
            <div className="button-file mt-4 d-flex justify-content-center">
              <div style={{ width: "720px" }}>
                <Button text="Update" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Edit;
