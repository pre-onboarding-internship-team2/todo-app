import { useContext } from 'react';
import TokenContext from '../../context/token/TokenContext';

const Header = () => {
  const { clearToken } = useContext(TokenContext);

  const handleLogout = () => {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
      clearToken();
    }
  };
  return (
    <div className='relative flex items-center bg-gray-600 p-2 text-gray-50'>
      <h3 className='flex-1 text-center text-2xl font-bold'>To Do List</h3>
      <button className='absolute right-4 flex items-center text-lg' onClick={handleLogout}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='m-auto h-6 w-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
          />
        </svg>

        <span className='ml-1 text-base font-bold'>로그아웃</span>
      </button>
    </div>
  );
};

export default Header;
