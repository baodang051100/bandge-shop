import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/slice/authSlice';

const ShowOnLogout = ({ children }) => {
    const isLogin = useSelector(selectIsLogin);

    if (isLogin) {
        return children
    }
    return null
}

export const ShowOnLogin = ({ children }) => {
    const isLogin = useSelector(selectIsLogin);

    if (!isLogin) {
        return children
    }
    return null
}

export default ShowOnLogout