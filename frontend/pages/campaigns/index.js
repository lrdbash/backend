import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useQuery } from 'react-query';
import api from '../../api/axios';
const CampaignList = () => {
    const { data, isLoading, error } = useQuery('campaigns', () => api.get('/campaigns').then((res) => res.data));
    if (isLoading)
        return _jsx("div", { children: "Loading..." });
    if (error)
        return _jsx("div", { children: "Error loading campaigns" });
    return (_jsxs("div", { children: [_jsx("h1", { children: "Campaigns" }), _jsx("ul", { children: data.map((campaign) => (_jsxs("li", { children: [campaign.title, " - ", campaign.deadline] }, campaign.id))) })] }));
};
export default CampaignList;
