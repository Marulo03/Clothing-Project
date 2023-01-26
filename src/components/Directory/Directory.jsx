import './DirectoryStyle.scss'
import CategoryItem from '../categoryItem/categoryItem';

const Directory = ({categories}) => {
    return(
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Directory;