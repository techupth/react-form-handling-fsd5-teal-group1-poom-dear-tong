import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    let saveData = {
      name: name,
      url: url,
      price: price,
      description: description,
    };
    let dataAlert = JSON.stringify(saveData);
    alert(dataAlert);
  };
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={name}
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
            value={url}
            placeholder="Enter image url here"
            onChange={(event) => {
              setUrl(event.target.value);
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
            value={price}
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
            value={description}
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
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
