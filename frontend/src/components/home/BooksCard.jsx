
import BookSingleCard from "./BookSingleCard"
const BooksCard = ({ books }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((item) => (
                <BookSingleCard book={item} key={item._id} />

            ))}
        </div>
    )
}

export default BooksCard