import { writable } from 'svelte/store';
import type { Package } from '$lib/types/Package';
import mockPackages from '$lib/data/mockPackages.json';

console.log("Mock Packages from JSON:", mockPackages);

export const packages = writable<Package[]>(mockPackages);

packages.subscribe(value => console.log("Svelte Store Packages:", value));
