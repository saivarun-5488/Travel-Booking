export type Booking = {
    id: string;
    packageId: number;
    customerName: string;
    email: string;
    phone: string;
    travelers: number;
    date: string;
    specialRequests: string;
    totalPrice: number;
    paymentStatus: 'pending' | 'paid';
    status: 'pending' | 'confirmed' | 'cancelled';
    createdAt: string;
};
