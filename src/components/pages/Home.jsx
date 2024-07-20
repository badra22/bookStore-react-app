import { useEffect, useState } from "react";
import { getBooks } from "../../services/books.service";
import { Link } from "react-router-dom";
import { deleteBook } from "../../services/books.service";
function Home() {
    const [books , setBooks] = useState([]);

    useEffect(() => {
        getBooks()
        .then(res => setBooks(res.data))
        .catch(err => console.log(err))
    } , [books])

    const onDelete = (id) => {
        deleteBook(id).then(() => {
            console.log("Book Deleted Successfully!")
        })
        setBooks(books);
    }

    return ( 
        <>
            <div className="my-5 bg-dark text-light w-50 
            container mx-auto 
             text-center shadow border rounded-2 py-3">
                Books List
            </div>

            <div className="my-5 container text-center">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Author</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.price}</td>
                                    <td>{book.author}</td>
                                    <td>{book.desc}</td>
                                    <td>
                                        <Link to={`/details/${book.id}`} className="btn btn-sm btn-show btn-success mx-1 text-capitalize">show</Link>
                                        <Link to={`/edit/${book.id}`} className="btn btn-sm btn-edit btn-primary mx-1 text-capitalize">edit</Link>
                                        <button onClick={() => {onDelete(book.id)}} className="btn btn-sm btn-delete btn-danger mx-1 text-capitalize">delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
     );
}

export default Home;