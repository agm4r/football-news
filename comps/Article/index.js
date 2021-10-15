import ArticleHeader from "./ArticleHeader";
import ArticleContent from "./ArticleContent";
import ArticleAsset from "./ArticleAsset";
import { Fragment } from "react";

const Article = ({title, imageUrl, content}) => {
    return ( 
        <div>
            <ArticleHeader title={title} />
            <ArticleAsset imageUrl={imageUrl} title={""} />
            <ArticleContent content={content} />
        </div>
     );
}
 
export default Article;