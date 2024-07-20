import axios from "axios";

const base_url = "http://localhost:3000/";
const books_url = `${base_url}books`;
const stats_url = `${base_url}stats`;

let lastStats;

(async () => {
    lastStats = await getStats();
})();
 
async function getStats() {
    const res = await axios.get(stats_url);
    return res.data;
}

async function updateStats() {
    await axios.put(stats_url, lastStats);
}

// Get All Books
export async function getBooks() {
    return await axios.get(books_url);
}

// Get Single Book
export async function getBook(id) {
    return await axios.get(`${books_url}/${id}`);
}

// Add New Book
export async function addBook(book) {
    lastStats = {...lastStats, total_count: lastStats.total_count + 1};
    await axios.post(books_url , {...book, id: String(lastStats.total_count)});
    updateStats();
    return true;
}

// Update Book
export async function editBook(id , book) {
    await axios.put(`${books_url}/${id}` , book);
    return true;
}

// Delete Book
export async function deleteBook(id) {
    lastStats = {...lastStats, total_count: lastStats.total_count - 1};
    updateStats();
    await axios.delete(`${books_url}/${id}`);
    return true;
}