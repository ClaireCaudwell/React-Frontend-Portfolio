import React, { useState } from "react";

import articledata from "../data/articledata";

import { 
    ArticleContainer,
    InnerArticleContainer,
    ArticleCard,
    ArticleImage,
    ArticleDate,
    ArticleTitle,
    ArticleText
} from "../styled-components/Articles";
import { MainTitle } from "../styled-components/TechSkills";
import { Arrow, LoadMoreButton } from "../styled-components/ProjectList";

export const Articles = () => {
    const [ visibleArticles, setVisibleArticles ] = useState(2);

    const handleClick = () => {
        setVisibleArticles(preVisibleArticles => preVisibleArticles + 2);
    };

    return (
        <ArticleContainer>
            <MainTitle>CODING THOUGHTS</MainTitle>
            <InnerArticleContainer>
                {articledata.slice(0, visibleArticles).map(article => (
                    <ArticleCard 
                        target="_blank" 
                        key={article.id} 
                        href={article.link} 
                        alt={article.alt}>
                        <ArticleImage
                            src={require("../assets" + article.img)}
                        />
                        <ArticleTitle>
                            <ArticleDate>{article.date}:  </ArticleDate>
                            {article.title}
                        </ArticleTitle>
                        <ArticleText>
                            {article.text}
                            <Arrow>READ MORE &#707;&#707;</Arrow>
                        </ArticleText>                        
                    </ArticleCard>
                ))}
            </InnerArticleContainer>
            <LoadMoreButton onClick={handleClick}>
                {visibleArticles === 4 ? "All articles loaded" : "Load more articles"}
                </LoadMoreButton>
        </ArticleContainer>
    );
};