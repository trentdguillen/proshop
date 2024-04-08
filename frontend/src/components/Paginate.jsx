import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ pages, page, isAdmin, keyword }) => {

  let link;
  if (!isAdmin) {
    if (keyword) {
      link = `/search/${keyword}/page/${x + 1}`;
    } else {
      link = `/page/${x + 1}`;
    }
  } else {
    link = `/admin/productlist/${x + 1}`;
  }

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => {
          let link;
          if (!isAdmin) {
            if (keyword) {
              link = `/search/${keyword}/page/${x + 1}`;
            } else {
              link = `/page/${x + 1}`;
            }
          } else {
            link = `/admin/productlist/${x + 1}`;
          }
          return (
            <LinkContainer key={x + 1} to={link}>
              <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
            </LinkContainer>
          );
        })}
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
