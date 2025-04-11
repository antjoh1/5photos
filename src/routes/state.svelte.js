
export const userState = $state({
    archiveToggle: false,
    introDuration: 600,
    animationBaseLength: 700,
    firstLoadCounter: 1,
    pickedDate: 'Morso', // Ensure that the default state at first load is latest date 
    batches: /** @type{string[]} */ ([]),

}) 