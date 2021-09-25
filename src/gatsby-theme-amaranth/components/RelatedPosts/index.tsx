import React from "react";
import styled from "styled-components";

import { Types } from "gatsby-theme-advanced";

import { H2 } from "../../theme";
import FeedListing from "../../../../themes/amaranth/src/components/FeedListing";

const Wrapper = styled.aside`
  display: grid;
  grid-gap: 40px;

  justify-items: center;
`;

const Label = styled(H2)`
  text-transform: uppercase;
  color: var(--color-grey-700);
`;

type RelatedPostsProps = {
  list: Types.PostList;
};

const RelatedPosts = ({ list }: RelatedPostsProps): JSX.Element => (
  <Wrapper>
    <Label>RELACIONADOS</Label>
    <FeedListing noHero listing={list} />
  </Wrapper>
);

export default RelatedPosts;


//import { RelatedPostsProps } from "../../../../themes/amaranth/src/components/RelatedPosts";





// export default RelatedPosts;
//teste

// suggestion
//  export default function Button(props) {
//   return (
//      <Button {...props}>
//        {translatedString}
//      </Button>
//    )
// }

// gatsby docs
//import { NewsletterCTA } from "gatsby-theme-blog/src/components/newsletter"
//
//export default function CallToAction(props) {
//  return <NewsletterCTA {...props} variant="link" />
//}


// original, parte
//const RelatedPosts = ({ list }: RelatedPostsProps): JSX.Element => (
//   <Wrapper>
//      <Label>RELATED POSTS</Label>
//      <FeedListing noHero listing={list} />
//    </Wrapper>
//  );