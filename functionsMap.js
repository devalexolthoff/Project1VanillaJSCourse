const functionsMap = new Map()

const textCheck = (tag) =>  {
    handleErrorText(
                    testLength(tag, 3,15),
                    tag,
                    "Username must be between 3 and 15 characters")
}
const emailCheck = (tag) => { 
    handleErrorText(
                    testRegex(tag),
                    tag,
                    "Please enter a valid email")
}

const passwordCheck = (tag) => {
    handleErrorText(
                    testLength(tag, 6,20),
                    tag,
                    "Passwords must be between 6-12 characters")
}

const confirmCheck = (tag) => {
    handleErrorText(
                    makeValidOrInvalid(tag.classList, tag.value === tagsMap.get("password").value),
                    tag,
                    "Passwords do not match")
}

functionsMap.set("username", textCheck)
.set("email", emailCheck)
.set("password", passwordCheck)
.set("confirm", confirmCheck)
