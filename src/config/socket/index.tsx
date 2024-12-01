import store from '@app/redux/store';
import io from 'socket.io-client';
// import { ipSocket, portBE } from '..';

export const socket = io(`http://localhost:8000`,{
    auth: {
        user: store.getState().user.user?.email
    }
});
// export const socket = io(`http://192.168.0.101:8000`);