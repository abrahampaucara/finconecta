// This file defines TypeScript types and interfaces used throughout the application.

export interface Item {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}

export interface UserSettings {
    theme: string;
    notificationsEnabled: boolean;
}