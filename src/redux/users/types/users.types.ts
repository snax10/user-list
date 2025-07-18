export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website?: string; 
    address?: Address;
    company?: Company; 
}

export interface UsersState {
    users: User[];
    loading: boolean;
    error: string | null;
}
