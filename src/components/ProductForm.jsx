import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  return (
    <form className="post-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              setImg(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button
          onClick={(event) => {
            event.preventDefault();
            alert(`{
              name: ${name},
              price: ${price},
              image: ${img},
              description:
                ${description},
            }`);
          }}
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
