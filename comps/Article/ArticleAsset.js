const ArticleAsset = ({ imageUrl, title }) => {
    return ( 
        <div className="image">
            <img width="100%" src={ imageUrl } alt={ title } />
        </div>
     );
}
 
export default ArticleAsset;