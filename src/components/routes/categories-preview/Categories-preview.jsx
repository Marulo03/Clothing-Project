import { useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import CategoryPreview from "../../category-preview/CategoryPreview";
import { Fragment } from "react";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return(
        <Fragment>
        {Object.keys(categoriesMap).map(title => {
            const products = categoriesMap[title];
            return <CategoryPreview key={title} title={title} products={products}/> 
        })}
        </Fragment>
    )   
}

export default CategoriesPreview;