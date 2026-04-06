export type Job = {
  id: number;
  title: string;
  category: string;
  type: string;
};

export type JobsResponse = {
  data: Job[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};