
import React from "react";
import { IJob } from "../types";

const JobCard = ({ job }: { job: IJob }) => {
    return (
        <div className="">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
        </div>
    )
}

export default JobCard