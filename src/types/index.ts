export interface IJob {
  title: string;
  slug: string;
  location: string;
  description: string;
  jobType: string;
  salary: string;
  publishedDate: string;
  category: string;
  companyLogo: string;
  applyLink: string;
}
export interface IFrontmatter {
  frontmatter: IJob;
}
export interface IJobsPageProps {
  data: {
    allMarkdownRemark: {
      nodes: IFrontmatter[];
    };
  };
}
