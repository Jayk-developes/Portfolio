document.addEventListener("DOMContentLoaded", () => {
    let nav_home = document.getElementById("nav_home") as HTMLElement
    let nav_personal = document.getElementById("nav_personal_data") as HTMLElement
    let nav_CV = document.getElementById("nav_CV") as HTMLElement
    let nav_skills = document.getElementById("nav_skills") as HTMLElement
    let nav_contact = document.getElementById("nav_contact") as HTMLElement

    let wallpaper = document.getElementById("veryTop") as HTMLElement
    let personal_data = document.getElementById("personalData") as HTMLElement
    let cv = document.getElementById("cv") as HTMLElement
    let skills = document.getElementById("skills") as HTMLElement
    let contact = document.getElementById("contact_header") as HTMLElement

    nav_home.addEventListener("click", () => {
        wallpaper.scrollIntoView({behavior: "smooth"})
    })
    nav_personal.addEventListener("click", () => {
        personal_data.scrollIntoView({behavior: "smooth"})
        setTimeout(() => {
            personal_data.scrollIntoView({behavior: "smooth"})
        }, 300)
    })
    nav_CV.addEventListener("click", () => {
        cv.scrollIntoView({behavior: "smooth"})
        setTimeout(() => {
            cv.scrollIntoView({behavior: "smooth"})
        }, 300)
    })
    nav_skills.addEventListener("click", () => {
        skills.scrollIntoView({behavior: "smooth"})
        setTimeout(() => {
            skills.scrollIntoView({behavior: "smooth"})
        }, 300)
    })
    nav_contact.addEventListener("click", () => {
        contact.scrollIntoView({behavior: "smooth"})
        setTimeout(() => {
            contact.scrollIntoView({behavior: "smooth"})
        }, 500)
    })

});