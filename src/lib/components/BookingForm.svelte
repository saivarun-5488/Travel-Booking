<script lang="ts">
    import { bookings } from '$lib/stores/bookingStore';
    import type { Package } from '$lib/types/Package';
    import type { Booking } from '$lib/types/Booking';

    export let package1: Package;

    let formData = {
        customerName: '',
        email: '',
        phone: '',
        travelers: 1,
        date: '',
        specialRequests: ''
    };

    let submitting = false;
    let success = false;
    let error = '';

    async function handleSubmit() {
        submitting = true;
        error = '';

        try {
            const booking: Booking = {
                id: crypto.randomUUID(),
                packageId: package1.id,
                customerName: formData.customerName,
                email: formData.email,
                phone: formData.phone,
                travelers: formData.travelers,
                date: formData.date,
                specialRequests: formData.specialRequests,
                totalPrice: package1.price * formData.travelers,
                paymentStatus: 'pending',
                status: 'pending',
                createdAt: new Date().toISOString()
            };

            await new Promise(resolve => setTimeout(resolve, 1000));
            
            bookings.addBooking(booking);

            success = true;
            formData = {
                customerName: '',
                email: '',
                phone: '',
                travelers: 1,
                date: '',
                specialRequests: ''
            };
        } catch (err) {
            error = 'Failed to submit booking. Please try again.';
        } finally {
            submitting = false;
        }
    }
</script>
