import React from 'react';
import { useQuery } from 'react-query';
import api from '../../api/axios';

const CampaignList = () => {
  const { data, isLoading, error } = useQuery('campaigns', () =>
    api.get('/campaigns').then((res) => res.data),
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading campaigns</div>;

  return (
    <div>
      <h1>Campaigns</h1>
      <ul>
        {data.map((campaign: any) => (
          <li key={campaign.id}>
            {campaign.title} - {campaign.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
