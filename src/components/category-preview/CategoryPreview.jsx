import { Link } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard';
import {CategoryPreviewContainer, Title, Preview} from './CategoryPreviewStyle.jsx';


function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {
            products.filter((_, i) => i < 4)
            .map((product) => 
            <ProductCard key={product.id} product={product}/>
            )
        }   
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;
