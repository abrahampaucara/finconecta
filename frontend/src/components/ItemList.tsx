import React, { useEffect, useState } from 'react';
import { fetchItems } from '../services/api';
import useSocket from '../hooks/useSocket';
import Spinner from './Spinner';

const ItemList: React.FC<{ items?: any[] }> = ({ items: propsItems }) => {
    const [items, setItems] = useState<any[]>(propsItems || []);
    const [loading, setLoading] = useState(!propsItems);
    const socket = useSocket();

    useEffect(() => {
        const loadItems = async () => {
            try {
                const fetchedItems = await fetchItems();
                setItems(fetchedItems);
            } catch (error) {
                console.error('Error fetching items:', error);
            } finally {
                setLoading(false);
            }
        };

        loadItems();

        socket.on('itemAdded', (newItem: any) => {
            setItems((prevItems: any[]) => [...prevItems, newItem]);
        });

        return () => {
            socket.off('itemAdded');
        };
    }, [socket]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="item-list">
            <h2>Item List</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;