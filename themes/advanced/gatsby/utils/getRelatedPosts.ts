import { PostList, Post } from "../../src/types";

const categoryMappingCache = new Map<string, PostList>();

// Get posts of the same category
const getCategoryPosts = (category: string, listing: PostList): Post[] => {
  const cachedCategory = categoryMappingCache.get(category);
  if (cachedCategory) return cachedCategory;

  listing.forEach((post) => {
    if (post.category === category) {
      const mappedPosts = categoryMappingCache.get(category) || [];
      mappedPosts.push(post);

      categoryMappingCache.set(category, mappedPosts);
    }
  });

  return categoryMappingCache.get(category) || [];
};

// Get post listing ranked by tag matches
const getRankedMatches = (targetPost: Post, listing: PostList): PostList => {
  // If the post doesn't have tags, just return the main listing
  if (!targetPost.tags) return listing;

  const rankList: {
    rank: number;
    post: Post;
  }[] = [];

  // Add 1 to the ranking value for each tag match
  listing.forEach((post) => {
    let rank = 0;

    if (post.tags) {
      post.tags.forEach((tag) => {
        if (targetPost.tags?.includes(tag)) {
          rank += 1;
        }
      });
    }

    rankList.push({
      rank,
      post,
    });
  });

  // Sort posts by rank
  rankList.sort((a, b) => {
    if (a.rank > b.rank) return -1;
    if (a.rank < b.rank) return 1;

    return 0;
  });

  // Map ranking to a post list
  return rankList.map((rankedPost) => rankedPost.post);
};

// Get 2 related posts to a target post
const getRelatedPosts = (targetPost: Post, listing: PostList): PostList => {
  // Exclude the target post from the listing
  const filteredListing = listing.filter(
    (post) => post.slug !== targetPost.slug
  );

  const relatedPosts: PostList = [];

  if (targetPost.category) {
    // Filter by category
    const categoryPosts = getCategoryPosts(
      targetPost.category,
      filteredListing
    );

    // Rank the matches by tags
    const rankedMatches = getRankedMatches(targetPost, categoryPosts);

    // Select top 2 posts
    relatedPosts.push(...rankedMatches.slice(0, 2));
  }

  // If we have enough posts, return them
  if (relatedPosts.length > 1) return relatedPosts;

  // If we have only one category match, add one more tag match
  if (relatedPosts.length === 1) {
    // Get the ranked tag matches
    const rankedTagMatches = getRankedMatches(targetPost, filteredListing);
    // Filter out existing related post
    const filteredTagMatches = rankedTagMatches.filter(
      (tagMatch) => tagMatch.slug !== relatedPosts[0]?.slug
    );

    // And return the highest ranked match
    const highestRankedMatch = filteredTagMatches[0];

    if (highestRankedMatch) {
      relatedPosts.push(highestRankedMatch);
      return relatedPosts;
    }
  }

  // If we don't have any category matches,
  // perform a tag ranking on the whole listing and return the top 2 posts
  return getRankedMatches(targetPost, filteredListing).slice(0, 2);
};

export default getRelatedPosts;
