import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ pages, page, isAdmin, keyword }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

// Define propTypes for the component
Paginate.propTypes = {
  pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool,
  keyword: PropTypes.string
};

// Set default values for optional props
Paginate.defaultProps = {
  isAdmin: false,
  keyword: ''
};

export default Paginate;
