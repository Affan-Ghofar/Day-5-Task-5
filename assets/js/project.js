// global array
let projects = []

// function get data from input html
function getData(event) {
  //method preventDefault
  event.preventDefault();

  //declaration variable DOM selection
  let name = document.getElementById("project-name").value
  let startDate = document.getElementById("start-date").value
  let endDate = document.getElementById("end-date").value
  let description = document.getElementById("description").value
  let php = document.getElementById("php").checked
  let java = document.getElementById("java").checked
  let python = document.getElementById("python").checked
  let javascript = document.getElementById("javascript").checked
  let image = document.getElementById("upload-image").files

  //Ternary Operator
  let iconPhp = (php == true) ? '<i class="fa-brands fa-PHP fa-2x"></i>' : '';
  let iconJava = (java == true) ? '<i class="fa-brands fa-java fa-2x"></i>' : '';
  let iconPython = (python == true) ? '<i class="fa-brands fa-python fa-2x"></i>' : '';
  let iconJavascript = (javascript == true) ? '<i class="fa-brands fa-js fa-2x"></i>' : '';

  // Conditional to Validation
  if(name == "") {
    alert("Please Input Project Name");
  } else if (startDate == "") {
    alert("Please Input Start Date");
  } else if (endDate == "") {
    alert("Please Input End Date");
  } else if (description == "") {
    alert("Please Input Description");
  } else if (iconPhp == false && iconJava == false && iconPython == false && iconJavascript == false) {
    alert("Please Input technologies");
  } else if (image.length == 0 ) {
    alert("Please Input Image");
  } else {
    // Convert image to Blob Object
    image = URL.createObjectURL(image[0])

    let icon = [
      iconPhp,
      iconJava,
      iconPython,
      iconJavascript
    ]

    // Manipulation Duration
    let startDate = new Date(document.getElementById("start-date").value)
    let endDate = new Date(document.getElementById("end-date").value)
    let distance = endDate.getTime() - startDate.getTime() / (30*24*60*60*1000)
        distance = distance.toFixed(0);


    let iconfil = icon.filter(elem => elem[1]).reverse()
    console.log(iconfil)


    let dataProject = {
      name,
      distance,
      description,
      image,
      iconfil
    }

    projects.push(dataProject)
    console.log(projects)

    showData()
  }
}

// Function to Show Preview My Project
function showData() {
  document.getElementById("project").innerHTML = ""
  for(let i=0; i< projects.length; i++) {
    document.getElementById("project").innerHTML += `
    <div class="myProject-item">
      <img src="${projects[i].image}" />
        <a href="myProject-detail.html">
          <h3>${projects[i].name}</h3></a>
        <div>
          <h5> Durasi : ${projects[i].distance} Bulan</h5>
        </div>
          <p class="description">${projects[i].description}</p>
          <div>
            ${projects[i].iconfil`<i class="fa-brands fa-PHP fa-2x"></i>`}
            ${projects[i].iconfil`<i class="fa-brands fa-Python fa-2x"></i>`}
            ${projects[i].iconfil`<i class="fa-brands fa-Java fa-2x"></i>`}
            ${projects[i].iconfil`<i class="fa-brands fa-js fa-2x"></i>`}
          </div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
          <div>
            <p class="create_time"> 30 January </p>
            <p class="durationPost">1 Minutes Ago</p>
          </div>
    </div>
    `
  }
}