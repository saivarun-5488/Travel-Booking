<script lang="ts">
    import { packages } from '$lib/stores/packagesStore';
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Travel Packages</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each $packages as pkg}
            <a href={`/packages/${pkg.id}`} class="block bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={pkg.image} alt={pkg.name} class="w-full h-48 object-cover" />
                <div class="p-4">
                    <h2 class="text-xl font-bold">{pkg.name}</h2>
                    <p class="text-gray-700">{pkg.destination}</p>
                    <span class="text-green-600 font-bold">${pkg.price}</span>
                </div>
            </a>
        {/each}
    </div>
</div>
