import React from 'react';
import { useQuery, useMutation } from 'react-query';
import api from '../../api/axios';

const SubmissionApproval = () => {
  const { data, isLoading, error } = useQuery('submissions', () =>
    api.get('/submissions').then((res) => res.data),
  );

  const mutation = useMutation((submissionId: string) =>
    api.patch(`/submissions/${submissionId}`, { status: 'approved' }),
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading submissions</div>;

  return (
    <div>
      <h1>Submissions</h1>
      <ul>
        {data.map((submission: any) => (
          <li key={submission.id}>
            {submission.contentUrl} - {submission.status}
            <button
              onClick={() => mutation.mutate(submission.id)}
            >
              Approve
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmissionApproval;
