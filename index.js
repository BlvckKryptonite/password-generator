const characters = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ..."abcdefghijklmnopqrstuvwxyz",
  ..."0123456789",
  ..."~`!@#$%^&*()_-+=[]{},|:;<>.?/"
]

const passwordLength = 12

function getRandomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length)
  return characters[randomChar]
}

function generateRandomPassword() {
  let randomPassword = ""
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getRandomCharacter()
  }
  return randomPassword
}

// Helper: set password inside a given div
function setPassword(divId) {
  document.getElementById(divId).textContent = generateRandomPassword()
}

// Add click event to generate button
let generateBtn = document.getElementById("generate-btn")
generateBtn.addEventListener("click", function () {
  setPassword("div-one")
  setPassword("div-two")
})

// Optional: allow clicking a password to copy it
function enableCopy(divId) {
  const el = document.getElementById(divId)
  el.addEventListener("click", () => {
    navigator.clipboard.writeText(el.textContent)
    alert("Copied to clipboard: " + el.textContent)
  })
}

enableCopy("div-one")
enableCopy("div-two")
