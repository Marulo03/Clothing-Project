import { CATEGORIES_ACTION_TYPES } from './CategoryTypes';
import { createAction } from '../../utils/reducer/reducer';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';

export const fetchCategoriesStart = () => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

