import photoBatches from "$lib/assets/photoData.json"

export const userState = $state({
    archiveToggle: false,
    introDuration: 600,
    animationBaseLength: 700,
    firstLoadCounter: 1,
    pickedDate: photoBatches[0].date, // Ensure that the default state at first load is latest date 
}) 