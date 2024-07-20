import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import { editBook, getBook } from "../../services/books.service";

const bookTemplate = {
    title: "",
    price: "",
    author: "",
    desc: ""
}
function Edit() {
    const [book, setBook] = useState(bookTemplate);

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getBook(id).then(res => setBook(res.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        editBook(id, book);
        setBook(bookTemplate);      //reset the book state for this component
        navigate("/");              // redirect to the table for the current view
    }
    return ( <>
            <form onSubmit={handleSubmit} className="container-sm">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" onChange={e => setBook({...book, title : e.target.value})} value={book.title}/>
                    <div className="form-text"> Make Book&apos;s title as descriptive as possible</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="text" className="form-control" id="priceInput" onChange={e => setBook({...book, price : Number(e.target.value)})} value={book.price}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input type="text" className="form-control" id="authorInput" onChange={e => setBook({...book, author : e.target.value})} value={book.author}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" id="descriptionInput" rows="3" onChange={e => setBook({...book, desc : e.target.value})} value={book.desc}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
    </> );
}

export default Edit;