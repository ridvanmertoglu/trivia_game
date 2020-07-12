import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCategories} from '../api';
import Navigator from '../pages/Navigator';

import {
  categoriesRequest,
  categoriesSuccess,
  categoriesFail,
} from '../store/actions/categories';

const Init = (props) => {
  const initCategories = async () => {
    props.categoriesRequest();

    try {
      const result = await getCategories();
      props.categoriesSuccess(result.data.trivia_categories);
      console.log(result.data.trivia_categories);
    } catch (error) {
      props.categoriesFail();
    }
  };
  useEffect(() => {
    initCategories();
  }, []);
  return <Navigator />;
};

const mapStateToProps = ({categoriesReducer}) => {
  const {categories} = categoriesReducer;
  return {categories};
};

const mapDispatchToProps = {
  categoriesRequest,
  categoriesSuccess,
  categoriesFail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Init);
