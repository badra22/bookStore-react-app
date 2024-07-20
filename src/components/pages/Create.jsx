import { useState } from "react";
import { addBook } from "../../services/books.service"
import { useNavigate } from "react-router-dom";

const bookTemplate = {
    title: '',
    price: "", 
    author: "",
    desc: ""
};
function Create() {

    const [book , setBook] = useState()

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(book);              // add the book to the json server
        setBook(bookTemplate);      //reset the book state for this component
        navigate("/");              // redirect to the table for the current view
    }
    return ( 
        <>
            <form onSubmit={handleSubmit} className="container-sm">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" onChange={e => setBook({...book, title : e.target.value})}/>
                    <div className="form-text"> Make Book&apos;s title as descriptive as possible</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="text" className="form-control" id="priceInput" onChange={e => setBook({...book, price : Number(e.target.value)})}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input type="text" className="form-control" id="authorInput" onChange={e => setBook({...book, author : e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" id="descriptionInput" rows="3" onChange={e => setBook({...book, desc : e.target.value})}></textarea>
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </>
     );
}

export default Create;