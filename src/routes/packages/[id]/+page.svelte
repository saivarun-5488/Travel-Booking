<script lang="ts">
  export let data;
  let packageData = data?.package ?? null;

  let name = "";
  let email = "";
  let checkInDate = "";
  let checkOutDate = "";
  let guests = 1;

  function handleBooking() {
    alert(`Booking confirmed for ${name} at ${packageData?.name}`);
  }
</script>

{#if packageData}
  <div class="package-container">
    <h1 class="text-3xl font-bold mb-4">{packageData.name}</h1>
    <img src={packageData.image} alt={packageData.name} class="w-full max-h-96 object-cover rounded-lg mb-4" />

    <p class="text-gray-700 text-lg"><strong>Destination:</strong> {packageData.destination}</p>
    <p class="text-gray-700 text-lg"><strong>Duration:</strong> {packageData.duration}</p>
    <p class="text-gray-700 text-lg"><strong>Price:</strong> <span class="text-green-600 font-bold">${packageData.price}</span></p>
    
    <h2 class="text-2xl font-bold mt-6">Description</h2>
    <p class="text-gray-600 leading-relaxed">{packageData.description}</p>

    <h2 class="text-2xl font-bold mt-6">Itinerary</h2>
    <ul class="list-disc pl-5">
      {#each packageData.itinerary ?? [] as day}
        <li class="text-gray-700">{day}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-bold mt-6">Amenities</h2>
    <ul class="list-disc pl-5">
      {#each packageData.amenities ?? [] as amenity}
        <li class="text-gray-700">{amenity}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-bold mt-6">Rating & Reviews</h2>
    <p class="text-gray-700"><strong>Rating:</strong> ⭐ {packageData.rating ?? "N/A"} / 5</p>
    <p class="text-gray-700"><strong>Reviews:</strong> {packageData.reviews ?? "No reviews"} reviews</p>

    <div class="booking-form">
      <h2 class="text-2xl font-bold mt-8 mb-4">Book This Package</h2>
      <form on:submit|preventDefault={handleBooking} class="bg-white p-6 shadow-lg rounded-lg">
        <label class="block mb-2">Full Name
        <input type="text" bind:value={name} class="input" required />

        <label class="block mt-4 mb-2">Email
        <input type="email" bind:value={email} class="input" required />

        <label class="block mt-4 mb-2">Check-in Date
        <input type="date" bind:value={checkInDate} class="input" required />

        <label class="block mt-4 mb-2">Check-out Date
        <input type="date" bind:value={checkOutDate} class="input" required />

        <label class="block mt-4 mb-2">Number of Guests
        <input type="number" bind:value={guests} min="1" class="input" required />

        <button type="submit" class="btn">Confirm Booking</button>
      </form>
    </div>
  </div>
{:else}
  <p class="text-center text-red-500 text-xl font-bold">Package not found.</p>
{/if}

<style>
  .package-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .booking-form {
    margin-top: 20px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
  }

  .input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .btn {
    width: 100%;
    background: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }

  .btn:hover {
    background: #0056b3;
  }
</style>
