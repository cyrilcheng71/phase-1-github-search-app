const form =document.getElementById("githun-form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let userId = e.target[0].value
    fetchData(userId)
    fetchUserRepo(userId)
})



function fetchData(userId){
    fetch(`https://api.github.com/search/users?q=${userId}`)
    .then (resp => resp.json)
    .then(data => data.item.forEach(userData))
}


function fetchUserRepo(userId){
    fetch(`https://api.github.com/users/${userId}/repos`)
    .then(resp => resp.json())
    .then (data => data.forEach(userRepos))
}


function userData (user){
    let userContainer = document.createElement("div")
    let userId = document.createElement("h1")
    let userAvatar = document.createElement("img")
    let userUrl = document.createElement("a")



    userAvatar.className = "userAvatar"

    userId.textContent = user.login
    userAvatar = user.avatar_url
    userUrl.href = user.html_url
userUrl.textContent = "Click Here For Profile"


userContainer.append(userId, userAvatar, userAvatar)

document.querySelector("#githun-form").append(userContainer)

}



function userRepos(userRepo){
    document.querySelector("userAvatar").addEventListener("click", ()=> {
        let repoList =document.createElement("li")
        repoList.textContent = ""
        repoList.textContent = userRepo.full_name


        letgrabList =document.querySelector("#repos-list")

        grabList.append(repoList)
    })
}
