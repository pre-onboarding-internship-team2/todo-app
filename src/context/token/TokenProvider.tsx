import { ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../storage';
import TokenContext from './TokenContext';

const TokenProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const token = storage.get('access_token');

  const saveToken = useCallback(
    (token: string) => {
      storage.set('access_token', token);
      navigate('/todo');
    },
    [navigate]
  );

  const clearToken = useCallback(() => {
    storage.remove('access_token');
    navigate('/signin');
  }, [navigate]);

  return (
    <TokenContext.Provider value={{ token, saveToken, clearToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
