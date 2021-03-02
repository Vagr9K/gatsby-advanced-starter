import React from "react";
import { render } from "@testing-library/react";
import { Link } from "gatsby";
import PostListing from "./PostListing";

jest.mock("gatsby");

const postEdges = [
  {
    node: {
      fields: {
        slug: "/the-fallen-time",
        datePublished: "2017-01-31T20:00:00.000Z",
      },
      excerpt:
        "Autolyci eminus retenta Hoc domum solitos veteremque nostrum Lorem markdownum huc suo ara, dubites celeri mihi bicolor. Secuti non? Suo opus…",
      timeToRead: 2,
      frontmatter: {
        title: "The Fallen Time",
        tags: ["test", "something", "tagging"],
        cover: "7.jpg",
        datePublished: "2017-02-01",
      },
    },
  },
  {
    node: {
      fields: {
        slug: "/bold-mage",
        datePublished: "2016-12-31T20:00:00.000Z",
      },
      excerpt:
        "Quanto et ius coniunctis urbes Sedisti civiliter Lorem markdownum Ixione palus semper peritura barbaque in aureus\nobliquum erigitur gemmae…",
      timeToRead: 2,
      frontmatter: {
        title: "Bold Mage",
        tags: ["programming", "stuff", "other"],
        cover: "8.jpg",
        datePublished: "2017-01-01",
      },
    },
  },
];

describe("component PostListing", () => {
  it("renders post links correctly", () => {
    expect.assertions(3); // 2 href checks and one Link invocation amount check

    const { getByText } = render(<PostListing postEdges={postEdges} />);

    postEdges.forEach((edge) => {
      const postLink = getByText(edge.node.frontmatter.title).closest("a");

      expect(postLink).toHaveAttribute("href", edge.node.fields.slug);
    });

    expect(Link.mock.calls).toHaveLength(postEdges.length);
  });
});
