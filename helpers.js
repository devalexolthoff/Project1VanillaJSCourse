const makeValidOrInvalid = (classes,valid) => {
    if(valid){
        classes.add('valid')
        classes.remove('invalid')
        return true
    }
    else {
        classes.remove('valid')
        classes.add('invalid')
        return false
    }
}

const checkInput = (e) => {
    functionsMap.get(e.target.id)(e.target);
} 
const testLength = (tag,min,max) => {
    if(tag.value.length < 1) {
        tag.classList.remove('invalid')
        return true
    }  else  {
        return makeValidOrInvalid(tag.classList, (tag.value.length >= min && tag.value.length <=max))
    }
}
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const testRegex = tag => makeValidOrInvalid(tag.classList, tag.value.match(emailRegex))

const handleErrorText = (status,tag, error) => {
    const smallTag = tagsMap.get(`${tag.id}small`)
    console.log(status)
    status ? smallTag.textContent = '' : smallTag.textContent = error
}