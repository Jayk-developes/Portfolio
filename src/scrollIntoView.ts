document.addEventListener("DOMContentLoaded", () => {

    console.log("UWU");
    
    
    let nav_home = document.getElementById("nav_Home") as HTMLElement
    let nav_personal = document.getElementById("nav_Ich") as HTMLElement
    let nav_CV = document.getElementById("nav_Lebenslauf") as HTMLElement
    let nav_skills = document.getElementById("nav_Skills") as HTMLElement
    let nav_contact = document.getElementById("nav_Contact") as HTMLElement
    let nav_project = document.getElementById("nav_Projekte") as HTMLElement
    let arrowDown = document.getElementById("arrowDown") as HTMLElement
    let date_contact = document.getElementById("contactButton")

        let
    personal_data = document.getElementById("personalData") as HTMLElement
    let cv = document.getElementById("cv") as HTMLElement
    let skills = document.getElementById("skills") as HTMLElement
    let contact = document.getElementById("contact_header") as HTMLElement
    let project = document.getElementById("projectData")

    nav_home.addEventListener("click", () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    })
    nav_personal.addEventListener("click", () => {
        personal_data.scrollIntoView({behavior: "smooth"})
    })
    arrowDown.addEventListener("click", () => {
        console.log("EXEC");
        
        personal_data.scrollIntoView({behavior: "smooth"})

    })
    nav_CV.addEventListener("click", () => {
        cv.scrollIntoView({behavior: "smooth"})
    })
    nav_skills.addEventListener("click", () => {
        skills.scrollIntoView({behavior: "smooth"})
    })
    nav_project.addEventListener("click", () => {
        project.scrollIntoView({behavior: "smooth"})
    })
    nav_contact.addEventListener("click", () => {
        window.scrollTo({top: document.body.scrollHeight, left: 0, behavior: "smooth"})
    })
    date_contact.addEventListener("click", () => {
        window.scrollTo({top: document.body.scrollHeight, left: 0, behavior: "smooth"})
    })
});