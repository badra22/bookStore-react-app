import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../../services/books.service"

function Details() {

    const {id} = useParams();
    const [book, setBook] = useState({
        title: '###########',
        price: "########", 
        author: "#######",
        desc: "########"
    });
    useEffect(() => {
        getBook(id).then(res => setBook(res.data));
    }, [book]);
    return ( 
        <>
            <h2>{book.title}</h2>
            <h2>{book.price}</h2>
            <h2>{book.author}</h2>
            <h2>{book.desc}</h2>
        </>
     );
}

export default Details;