import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useQuery, useMutation } from 'react-query';
import api from '../../api/axios';
const SubmissionApproval = () => {
    const { data, isLoading, error } = useQuery('submissions', () => api.get('/submissions').then((res) => res.data));
    const mutation = useMutation((submissionId) => api.patch(`/submissions/${submissionId}`, { status: 'approved' }));
    if (isLoading)
        return _jsx("div", { children: "Loading..." });
    if (error)
        return _jsx("div", { children: "Error loading submissions" });
    return (_jsxs("div", { children: [_jsx("h1", { children: "Submissions" }), _jsx("ul", { children: data.map((submission) => (_jsxs("li", { children: [submission.contentUrl, " - ", submission.status, _jsx("button", { onClick: () => mutation.mutate(submission.id), children: "Approve" })] }, submission.id))) })] }));
};
export default SubmissionApproval;
