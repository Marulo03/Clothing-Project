import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../../store/categories/CategorySelector';

import ProductCard from '../../product-card/ProductCard';
import Spinner from '../../spinner/Spinner';
import {CategoryContainer, CategoryTitle} from './CategoryStyle.jsx';


function Category() { 
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return(
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? 
                ( 
                    <Spinner /> 
                ) :
                (
                    <CategoryContainer>
                        {products && 
                            products.map((product) => 
                            <ProductCard key={product.id} product={product} />)
                        }
                    </CategoryContainer>
                )

            }
        </Fragment>
    )
}

export default Category;
