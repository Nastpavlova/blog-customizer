import { CSSProperties, useState } from 'react';

import { Article } from '../../components/article/Article';
import { ArticleParamsForm } from '../../components/article-params-form/ArticleParamsForm';
import { defaultArticleState, ArticleStateType } from '../../constants/articleProps';

import styles from '../../styles/index.module.scss';

export const App = () => {

	const [styleArticle, setStyleArticle] = useState(defaultArticleState);

	const handleApplyArticleOptions = (options: ArticleStateType) => {
		setStyleArticle(options);
	};

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': styleArticle.fontFamilyOption.value,
					'--font-size': styleArticle.fontSizeOption.value,
					'--font-color': styleArticle.fontColor.value,
					'--container-width': styleArticle.contentWidth.value,
					'--bg-color': styleArticle.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onApply={handleApplyArticleOptions}/>
			<Article />
		</main>
	);
};