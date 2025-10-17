const makeProjects = () => {
    // console.log(all_project_data);
    let project_div = document.getElementById("project-div")
    let res = ""
    // Show only top 3 projects on main page
    let projectsToShow = all_project_data.slice(0, 3)
    for (let i = 0; i < projectsToShow.length; ++i) {
        let elem = projectsToShow[i]
        // console.log(elem);
        res += `
            <div class="project-card">
                <div class="project-name">
                ${elem["name"]}
                </div>

                <div class="description">
                ${elem["description"]}
                </div>

                <div class="links">

                    <a href=${elem["github-link"]} target="blank">
                        <img src="./images/logos/github.png" alt="github-link">
                    </a>

                    <a href=${elem["project-link"]} target="blank">
                        <img src="./images/logos/share.png" alt="project">
                    </a>

                </div>

                <div class="tags">
        `
        for (let j = 0; j < elem["tags"].length; ++j) {
            res += `<div class="tag" onclick="filter_by_input('${elem["tags"][j]}')">
            ${elem["tags"][j]}
            </div>`
        }
        res += `
        </div>
        <div class="project-image">
            <a href=${elem["github-link"]} target="_blank" >
                <img src=${elem["image-link"]} alt = "project image" />
            </a >
        </div ></div > `
    }
    project_div.innerHTML = res
}

// Function for all-projects page - shows all projects
const makeAllProjects = () => {
    // console.log(all_project_data);
    let project_div = document.getElementById("project-div")
    let res = ""
    // Show all projects on all-projects page
    for (let i = 0; i < all_project_data.length; ++i) {
        let elem = all_project_data[i]
        // console.log(elem);
        res += `
            <div class="project-card">
                <div class="project-name">
                ${elem["name"]}
                </div>

                <div class="description">
                ${elem["description"]}
                </div>

                <div class="links">

                    <a href=${elem["github-link"]} target="blank">
                        <img src="./images/logos/github.png" alt="github-link">
                    </a>

                    <a href=${elem["project-link"]} target="blank">
                        <img src="./images/logos/share.png" alt="project">
                    </a>

                </div>

                <div class="tags">
        `
        for (let j = 0; j < elem["tags"].length; ++j) {
            res += `<div class="tag" onclick="filter_by_input('${elem["tags"][j]}')">
            ${elem["tags"][j]}
            </div>`
        }
        res += `
        </div>
        <div class="project-image">
            <a href=${elem["github-link"]} target="_blank" >
                <img src=${elem["image-link"]} alt = "project image" />
            </a >
        </div ></div > `
    }
    project_div.innerHTML = res
}