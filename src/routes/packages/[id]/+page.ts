import type { PageLoad } from './$types';
import { packages } from '$lib/stores/packagesStore';
import { get } from 'svelte/store';

export const load: PageLoad = ({ params }) => {
    console.log("Received params:", params);

    const packageId = parseInt(params.id);
    console.log("Parsed packageId:", packageId);

    if (isNaN(packageId)) {
        console.error("Invalid package ID:", params.id);
        return { package: null };
    }

    const packageList = get(packages);
    console.log("Available packages:", packageList);

    const selectedPackage = packageList.find(p => p.id === packageId);
    console.log("Selected package:", selectedPackage);

    if (!selectedPackage) {
        console.warn("Package not found:", packageId);
        return { package: null };
    }

    return {
        package: selectedPackage
    };
};
