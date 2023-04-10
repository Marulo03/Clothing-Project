import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/Categories-preview';
import Category from '../category/Category';
import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase';
import { fetchCategoriesAsync } from '../../../store/categories/CategoryAction';

const Shop = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
            dispatch(fetchCategoriesAsync());
    }, []);

    return(
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop;