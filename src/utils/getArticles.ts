import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export const articles: CollectionEntry<'articles'>[] = (
  await getCollection('articles')
).sort(
  (a: CollectionEntry<'articles'>, b: CollectionEntry<'articles'>) =>
    b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);

export const recentArticle: CollectionEntry<'articles'> = articles[0];
export const otherArticles: CollectionEntry<'articles'>[] = articles.slice(1);
