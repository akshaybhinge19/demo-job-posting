import * as path from "path";

interface CreatePagesContext {
  graphql: any;
  actions: any;
}

export const createPages = async ({ graphql, actions }: CreatePagesContext) => {
  async function getAllJobs() {
    const jobs = await graphql(`
      query jobs {
        allMarkdownRemark(filter: { frontmatter: { slug: { ne: null } } }) {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `);
    return jobs.data.allMarkdownRemark.nodes;
  }

  const { createPage } = actions;

  const jobs = await getAllJobs();

  jobs.forEach((job: any) => {
    createPage({
      path: `/jobs/${job.frontmatter.slug}`,
      component: path.resolve("./src/template/jobs-details.tsx"),
      context: {
        slug: job.frontmatter.slug,
      },
    });
  });
};
