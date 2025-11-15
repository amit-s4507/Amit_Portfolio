window.onload = () => {
    // Use the first 3 projects from all_project_data for the main page
    // No need to override all_project_data, just use makeProjects() which already limits to 3
    makeProjects()
}

function filter_by_input(inp) {
    // console.log("Move to all projects for this to work");
    window.location = `/all-project.html?search_by_tag=${inp}`
}