import io from 'socket.io-client';

const socket: any = io('http://localhost:4000');

export const subscribeToItems = (callback: (items: any[]) => void) => {
    socket.on('itemsUpdate', (items: any[]) => {
        callback(items);
    });
};

export const emitItem = (item: any) => {
    socket.emit('createItem', item);
};

export const sendItem = (item: any) => {
    socket.emit("newItem", item);
};

export const disconnectSocket = () => {
    socket.disconnect();
};