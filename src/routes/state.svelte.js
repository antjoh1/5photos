import { photoBatches } from "$lib/assets/photoData"

export const userState = $state({
    archiveToggle: false,
    introDuration: 600,
    animationBaseLength: 800,
    firstLoadCounter: 0,
    pickedDate: photoBatches[0].date, // Ensure that the default state at first load is latest date 
}) 