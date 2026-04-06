import { Injectable } from '@nestjs/common';
import { jobsData } from './data/jobs.data';
import { GetJobsDto } from './dto/get-jobs.dto';

@Injectable()
export class JobsService {
  getJobs(query: GetJobsDto) {
    const { page, limit, category, type } = query;

    let filtered = jobsData;

    if (category) {
      filtered = filtered.filter(job => job.category === category);
    }

    if (type) {
      filtered = filtered.filter(job => job.type === type);
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / limit);

    const start = (page - 1) * limit;
    const data = filtered.slice(start, start + limit);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages,
      },
    };
  }
}