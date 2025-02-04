import { writable } from 'svelte/store';
import type { Booking } from '$lib/types/Booking';

function createBookingStore() {
  const { subscribe, set, update } = writable<Booking[]>([]);

  return {
    subscribe,
    addBooking: (booking: Booking) => {
      update(bookings => [...bookings, {
        ...booking,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        status: 'pending'
      }]);
    },
    updateStatus: (bookingId: string, status: Booking['status']) => {
      update(bookings => 
        bookings.map(booking => 
          booking.id === bookingId 
            ? { ...booking, status } 
            : booking
        )
      );
    },
    removeBooking: (bookingId: string) => {
      update(bookings => bookings.filter(booking => booking.id !== bookingId));
    },
    clearBookings: () => set([])
  };
}

export const bookings = createBookingStore();