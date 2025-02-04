<script lang="ts">
    export let itinerary: string[];
</script>

<div class="space-y-4">
    {#each itinerary as day, index}
        <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex gap-4">
                <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                </div>
                <div>
                    <p class="text-gray-800 leading-relaxed">{day}</p>
                </div>
            </div>
        </div>
    {/each}
</div>