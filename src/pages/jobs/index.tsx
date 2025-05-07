import React from "react";
import { graphql } from "gatsby";
import JobCard from "../../components/job-card";
import { IJobsPageProps, IFrontmatter, IJob } from "../../types";

const JobsPage = ({ data }: IJobsPageProps) => {
  console.log("data ->>> jobs page", data);
  const jobs = data.allMarkdownRemark.nodes;
  return (
    <div>
      {jobs.map((job: IFrontmatter) => {
        return <JobCard job={job.frontmatter} />;
      })}
    </div>
  );
};

export const jobsQuery = graphql`
  query jobsQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          slug
          location
          description
          jobType
          salary
          publishedDate
          category
          companyLogo
          applyLink
        }
      }
    }
  }
`;

export default JobsPage;
