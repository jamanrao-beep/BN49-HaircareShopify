import { shopifyAdminGraphql } from "@/lib/shopify/admin";

type TagsMutationData<TName extends "tagsAdd" | "tagsRemove"> = {
  [K in TName]: {
    node: {
      id: string;
    } | null;
    userErrors: Array<{
      field: string[] | null;
      message: string;
    }>;
  };
};

const TAGS_ADD_MUTATION = `#graphql
  mutation AddTags($id: ID!, $tags: [String!]!) {
    tagsAdd(id: $id, tags: $tags) {
      node {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const TAGS_REMOVE_MUTATION = `#graphql
  mutation RemoveTags($id: ID!, $tags: [String!]!) {
    tagsRemove(id: $id, tags: $tags) {
      node {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

function throwUserErrors(errors: Array<{ message: string }>, fallback: string) {
  if (errors.length > 0) {
    throw new Error(errors.map((error) => error.message).join(", "));
  }

  if (!errors) {
    throw new Error(fallback);
  }
}

export async function addTags(id: string, tags: string[]) {
  const data = await shopifyAdminGraphql<TagsMutationData<"tagsAdd">>(
    TAGS_ADD_MUTATION,
    { id, tags },
  );

  throwUserErrors(data.tagsAdd.userErrors, "Failed to add tags");

  return data.tagsAdd.node;
}

export async function removeTags(id: string, tags: string[]) {
  const data = await shopifyAdminGraphql<TagsMutationData<"tagsRemove">>(
    TAGS_REMOVE_MUTATION,
    { id, tags },
  );

  throwUserErrors(data.tagsRemove.userErrors, "Failed to remove tags");

  return data.tagsRemove.node;
}
