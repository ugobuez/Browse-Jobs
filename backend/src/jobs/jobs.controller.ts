import { Controller, Get, Query } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { GetJobsDto } from './dto/get-jobs.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getJobs(@Query() query: GetJobsDto) {
    return this.jobsService.getJobs(query);
  }
}