
import './App.css'
import Header from './components/Header';
import CardList from './components/CardList';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetchBooks from './hooks/useFetchBooks';
import ReactPaginate from 'react-paginate';
import { Spinner } from 'react-bootstrap'

function App() {


  // axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResult}&startIndex=${startIndex}`)
  // axios.get(`https://www.googleapis.com/books/v1/volumes/JGH0DwAAQBAJ`)

  const { setQuery, setStartIndex, data, loading, error } = useFetchBooks()

  const handleChangePage = pageData => {
    setStartIndex(pageData.selected + 1)
  }

  return (
    <div className="App">
      <Header setQuery={setQuery} />
      <div className="body container d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center">
          {loading && <Spinner animation="border" className=' d-flex justify-content-center m-4' />}
        </div>

        {error && <h2>{error}</h2>}
        {data && (
          <div>
            <CardList data={data.items} />
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={Math.ceil(data.totalItems / 10)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handleChangePage}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
