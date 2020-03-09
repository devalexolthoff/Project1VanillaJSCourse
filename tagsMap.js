const tagsMap = new Map()
document.querySelectorAll("input").forEach(input => {
    tagsMap.set(input.id, input);
    if (input.type !== 'submit') {
        tagsMap.set(`${input.id}small`, document.querySelector(`#${input.id}warning`))
    }  
})