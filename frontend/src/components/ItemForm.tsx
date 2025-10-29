import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitItem } from '../services/api';

const ItemForm: React.FC = () => {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const onSubmit = async (data: any) => {
        setLoading(true);
        setError(null);
        setSuccess(null);
        try {
            await submitItem(data);
            setSuccess('Item submitted successfully!');
            reset();
        } catch (err) {
            setError('Failed to submit item. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="item-form">
            <h2>Submit New Item</h2>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <div>
                <label htmlFor="name">Item Name:</label>
                <input id="name" {...register('name', { required: true })} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" {...register('description', { required: true })}></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ItemForm;