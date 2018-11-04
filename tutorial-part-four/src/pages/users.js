import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
  const users = data.allRandomUser.edges;

  return (
    <div>
      {users.map((user, i) => {
        const userData = user.node;
        return (
          <div key={i}>
            <p>Name: {userData.name.first}</p>
            <img src={userData.picture.medium} />
          </div>
        );
      })}
    </div>
  );
};
export const query = graphql`
  query RandomUserQuery {
    allRandomUser {
      edges {
        node {
          gender
          name {
            title
            first
            last
          }
          picture {
            large
            medium
            thumbnail
          }
        }
      }
    }
  }
`;
