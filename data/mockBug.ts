// Mock Data
export const mockBugs = [
  {
    id: 'bug-001',
    title: 'Login button not clickable on mobile devices',
    severity: 'Critical',
    status: 'Open',
    assignedTo: 'Alice',
    timestamp: '2025-07-30T10:30:00Z',
    description:
      'The login button becomes unresponsive when viewed on smaller mobile screens (iPhone 12, Samsung S21). Users are unable to proceed with authentication.',
    tags: ['Frontend', 'Mobile', 'UI/UX'],
    priority: 'High',
    comments: [
      {
        user: 'Bob',
        text: 'Confirmed, seeing this on my iPhone 13 Pro Max as well.',
        timestamp: '2025-07-30T11:00:00Z',
      },
      {
        user: 'Alice',
        text: 'Investigating. Looks like a z-index issue or an overlay covering it.',
        timestamp: '2025-07-30T14:15:00Z',
      },
    ],
  },
  {
    id: 'bug-002',
    title: 'API endpoint for user profiles returns 500 error',
    severity: 'High',
    status: 'In Progress',
    assignedTo: 'Charlie',
    timestamp: '2025-07-29T14:45:00Z',
    description:
      'When attempting to fetch user profile data via `/api/v1/users/{id}`, the server responds with a 500 Internal Server Error. This affects user profile pages.',
    tags: ['Backend', 'API', 'Data'],
    priority: 'High',
    comments: [
      {
        user: 'Charlie',
        text: 'Found a null pointer exception in the user service. Working on a fix.',
        timestamp: '2025-07-30T09:00:00Z',
      },
    ],
  },
  {
    id: 'bug-003',
    title: 'Incorrect calculation in analytics dashboard',
    severity: 'Medium',
    status: 'Resolved',
    assignedTo: 'David',
    timestamp: '2025-07-28T09:10:00Z',
    description:
      'The "Daily Active Users" metric on the analytics dashboard is showing inflated numbers. It seems to be counting sessions instead of unique users.',
    tags: ['Analytics', 'Data', 'Reporting'],
    priority: 'Medium',
    comments: [
      {
        user: 'David',
        text: 'Fixed the aggregation logic. Deployed to staging for verification.',
        timestamp: '2025-07-28T16:30:00Z',
      },
      {
        user: 'Eve',
        text: 'Verified fix on staging. Looks good.',
        timestamp: '2025-07-29T10:00:00Z',
      },
    ],
  },
  {
    id: 'bug-004',
    title: 'Typo in "Forgot Password" email template',
    severity: 'Low',
    status: 'Open',
    assignedTo: 'Alice',
    timestamp: '2025-07-27T11:20:00Z',
    description:
      'The email template for password reset contains a typo: "Pleae reset your password" instead of "Please reset your password".',
    tags: ['Email', 'UI/UX'],
    priority: 'Low',
    comments: [],
  },
  {
    id: 'bug-005',
    title: 'Search results pagination not working correctly',
    severity: 'Medium',
    status: 'In Progress',
    assignedTo: 'Bob',
    timestamp: '2025-07-26T17:00:00Z',
    description:
      'When navigating to the second page of search results, the same results from the first page are displayed. Pagination logic is flawed.',
    tags: ['Frontend', 'Search'],
    priority: 'Medium',
    comments: [],
  },
];
