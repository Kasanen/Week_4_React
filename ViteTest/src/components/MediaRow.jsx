import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useUserContext} from '../hooks/contextHooks';

const MediaRow = ({item, onModify, onDelete}) => {
  const {handleAutoLogin, user} = useUserContext();

  useEffect(() => {
    handleAutoLogin?.();
  }, []);

  const isOwner =
    !!user &&
    (user.user_id === item.user_id ||
      user.id === item.user_id ||
      user.username === item.username);

  const isAdmin =
    !!user &&
    (user.is_admin === true ||
      user.role === 'admin' ||
      (Array.isArray(user.roles) && user.roles.includes('admin')));

  return (
    <tr className="border-b border-gray-700">
      <td className="p-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-40 h-40 object-cover rounded"
        />
      </td>

      <td className="p-4 align-middle max-w-30">{item.title}</td>
      <td className="p-4 align-middle text-sm max-w-50">{item.description}</td>
      <td className="p-4 align-middle text-sm">
        {new Date(item.created_at).toLocaleString('fi-FI')}
      </td>
      <td className="p-4 align-middle text-sm">{item.filesize}</td>
      <td className="p-4 align-middle text-sm">{item.media_type}</td>

      <td className="p-4 align-middle">
        <Link
          to="/single"
          state={item}
          className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded"
        >
          Show
        </Link>
      </td>

      {isAdmin || isOwner ? (
        <td className="p-4 align-middle">
          <div className="flex items-center gap-2 justify-center">
            <Link
              to="/modify"
              state={item}
              onClick={() => onModify?.(item)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded"
            >
              Modify
            </Link>

            <button
              type="button"
              onClick={() => onDelete?.(item)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </td>
      ) : null}
    </tr>
  );
};

export default MediaRow;
