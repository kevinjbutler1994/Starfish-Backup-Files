const teamBtnContainer = document.querySelector(".teamButton-container")
const url = 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeams?rosters=true&schedules=false&topPerformers=true&teamStats=true';

const options = {
  method: 'GET',
	headers: {
    'X-RapidAPI-Key': 'b4d4ac6e39msh5f28d1b8eece646p1ba0d6jsn2d570fbb5e8d',
		'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
	}
};

// const fs = require("fs")
// function fetchDataAndWriteToFile(){
//   try {
//     fetch(url, options)
//     .then(res => res.json())
//     .then(res => {
//       fs.writeFile('data.js', JSON.stringify(res.body), function(err){
//         return console.log(err)
//       })
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

// fetchDataAndWriteToFile()


// try {
//   fetch(url, options)
//   .then((res) => {
//     return res.json()
//   })
//   .then((res)=>{
//     console.log(res.body[0].wins)
//   })

// } catch (error) {
// 	console.error(error);
// }
function mockFetch() {
  displayButtons(data)
}

mockFetch()

function displayButtons(teamData) {
  teamData.forEach(team => {
    let mockHtml = `
      <button class="team-buttons" id="${team.teamName}"> 
        <img src='${team.nflComLogo1}' data-teamname="${team.teamName}"/>
      </button>
    `

    teamBtnContainer.insertAdjacentHTML("beforeend", mockHtml)
  })

  const teamButtons = document.querySelectorAll(".team-buttons")

  teamButtons.forEach((teamButton)=>{
    teamButton.addEventListener('click', function (e) {

      const teamFound = data.find((searchedTeam) => {
        return searchedTeam.teamName === e.target.dataset.teamname
      })

      console.log(teamFound)
      setModal(teamFound)
      toggleModel(e)
    })
  })
}


// const buttonCardinals = document.getElementById('Cardinals')

// buttonCardinals.addEventListener('click', function () {
//   fetch(url)
//       .then(function (result) {
//           console.log(result.body[0].wins)
//       })
//       .catch(function (err) {
//           console.error(err);
//       });
// });


// Toggle dropdown open/close when dropdown button is clicked

  ////////////////////////////////
  const modal = document.querySelector(".modal")
  const imgModal = document.querySelector(".img-modal")
  const descTitle = document.querySelector(".desc-title")
  const desc2Title = document.querySelector(".desc2-title")
  const descTitle2 = document.querySelector(".desc-title2")
  const descDate = document.querySelector(".desc-date")
  const descText = document.querySelector(".desc-text")
  const descText2 = document.querySelector(".desc-text2")
  const descText3 = document.querySelector(".desc-text3")
  const descText4 = document.querySelector(".desc-text4")
  const descText5 = document.querySelector(".desc-text5")
  const descText6 = document.querySelector(".desc-text6")
  const descText7 = document.querySelector(".desc-text7")
  const descText8 = document.querySelector(".desc-text8")
  const descText9 = document.querySelector(".desc-text9")
  const descText10 = document.querySelector(".desc-text10")
  const descText11 = document.querySelector(".desc-text11")
  const descText12 = document.querySelector(".desc-text12")
  const descText13 = document.querySelector(".desc-text13")
  const descText14 = document.querySelector(".desc-text14")
  const teamInfo = document.querySelector("Team Info")
  const Roster = document.querySelector("Roster")
  
  const closeX = document.querySelector(".close")
  const btnDivs = document.querySelectorAll("button")
  


btnDivs.forEach(button => {
  button.addEventListener("click", e => {
    setModal()
    toggleModel(e)
  })
})

function toggleModel(e) {
  modal.classList.toggle("hidden")
}


function setModal(teamData) {
  // imgModal.style.backgroundImage = `url(${obj.hdurl})`
  descTitle.innerText = (teamData.teamCity)
  descTitle2.innerText = (teamData.teamName)
  // desc2Title.innerText = ('Roster')
  descText.innerText = ('Offensive Star of the Week')
  descText2.innerText = (teamData.Roster[teamData.topPerformers.Receiving.recYds.playerID].espnName)
  descText3.innerText = ('Defensive Star of the Week')
  descText4.innerText = (teamData.Roster[teamData.topPerformers.Defense.totalTackles.playerID].espnName)


  descText5.innerText = ('Wins')
  descText6.innerText = (teamData.wins)
  descText7.innerText = ('Losses')
  descText8.innerText = (teamData.loss)
  descText9.innerText = ('Rushing Yards')
   descText10.innerText = (teamData.teamStats.Rushing.rushYds)
  descText11.innerText = ('Passing Yards')
  descText12.innerText = (teamData.teamStats.Passing.passYds)
  descText13.innerText = ('Current Win Streak')  
  descText14.innerText = (teamData.currentStreak.length)
  
  


console.log()

  // teamInfo.innerText = ('Team Info')
  // Roster.innerText = ('Roster')



closeX.addEventListener("click", toggleModel)
closeX.addEventListener("mouseover", e => {
  closeX.src = "https://i.imgur.com/YOmkd11.png"
})
closeX.addEventListener("mouseout", e => {
  closeX.src = "https://i.imgur.com/YOmkd11.png"
})


}

/////////////////////////////////
