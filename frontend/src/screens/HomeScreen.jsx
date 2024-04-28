import { Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useGetProductsQuery, useGetProductsByPriceQuery} from '../slices/productsApiSlice';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const location = useLocation();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  let products = data?.products || [];

  if (location.pathname === '/sortprice') {
    products = [...products].sort((a, b) => b.price - a.price); // Creating a new sorted array
  }

  if (location.pathname === '/sortcategory') {
    products = [...products].sort((a, b) => a.category.localeCompare(b.category)); // Creating a new sorted array
  } 

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ?? ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;