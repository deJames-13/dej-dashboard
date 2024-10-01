import { FaPlus, FaTable, FaUsers } from 'react-icons/fa';
import { dashUrl as mainUrl } from './image.api';

export const imageMenus = [
  {
    label: 'Manage Images',
    type: 'dropdown',
    to: mainUrl,
    icon: <FaTable />,
    subLinks: [
      { to: `${mainUrl}/table`, label: 'Images Table', icon: <FaTable /> },
      { to: `${mainUrl}/create`, label: 'Create Images', icon: <FaPlus /> },
      { to: `${mainUrl}/list`, label: 'Images List', icon: <FaUsers /> },
    ],
  },
];

