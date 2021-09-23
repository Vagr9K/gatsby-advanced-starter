import RelatedPosts from "../../../../themes/amaranth/src/components/RelatedPosts";

console.log(RelatedPosts);

export default RelatedPosts;

//teste
//export default function RelatedPosts ({ list }: RelatedPostsProps){
//    return (
//      <RelatedPosts>
//          {Relacionados}
//      </RelatedPosts>
//    )
//  }
  

// suggestion
//  export default function Button(props) {
//   return (
//      <Button {...props}>
//        {translatedString}
//      </Button>
//    )
// }

// original, parte
//const RelatedPosts = ({ list }: RelatedPostsProps): JSX.Element => (
//   <Wrapper>
//      <Label>RELATED POSTS</Label>
//      <FeedListing noHero listing={list} />
//    </Wrapper>
//  );