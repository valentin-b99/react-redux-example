import { useSelector } from 'react-redux';


export const useUser = () => useSelector(redux => redux.user);

export const useUserJwt = () => useSelector(redux => redux.user.jwt);
