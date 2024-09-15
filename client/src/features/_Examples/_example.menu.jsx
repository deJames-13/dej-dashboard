import { FaPlus, FaTable, FaUsers } from 'react-icons/fa';

const mainUrl = '/dashboard/_examples';

export const _exampleMenus = [
  {
    label: 'Manage _Examples',
    type: 'dropdown',
    to: mainUrl,
    icon: <FaTable />,
    subLinks: [
      { to: `${mainUrl}/table`, label: '_Examples Table', icon: <FaTable /> },
      { to: `${mainUrl}/create`, label: 'Create _Examples', icon: <FaPlus /> },
      { to: `${mainUrl}/list`, label: '_Examples List', icon: <FaUsers /> },
    ],
  },
];

