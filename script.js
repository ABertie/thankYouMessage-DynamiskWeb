const searchString = new URLSearchParams(window.location.search)

function appendTheStingToHTML(HTMLElement, stringName) {
    document.querySelector(HTMLElement).innerHTML += searchString.get(stringName)
}

appendTheStingToHTML("title", "name")
appendTheStingToHTML(".name", "name")
appendTheStingToHTML(".email", "email")
appendTheStingToHTML(".massage", "massage")