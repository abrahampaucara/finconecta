import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';
import ItemList from '../components/ItemList';
import ItemForm from '../components/ItemForm';
import Spinner from '../components/Spinner';

const Dashboard: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchData();
                setData(result);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <ItemForm />
            <ItemList items={data} />
        </div>
    );
};

export default Dashboard;