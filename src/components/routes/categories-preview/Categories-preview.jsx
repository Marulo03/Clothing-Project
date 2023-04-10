import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../../store/categories/CategorySelector";
import CategoryPreview from "../../category-preview/CategoryPreview";
import Spinner from '../../spinner/Spinner';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return(
        <Fragment>
        
        { isLoading ? 
        (
            <Spinner />
        )
        :
        (
            Object.keys(categoriesMap).map(title => {
            const products = categoriesMap[title];
            return <CategoryPreview key={title} title={title} products={products}/> 
        })
        )
        }
        </Fragment>
    )   
}

export default CategoriesPreview;