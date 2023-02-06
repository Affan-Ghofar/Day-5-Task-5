// global array
let myProject = []

// function add my Project from input html
function addmyProject(event) {
    event.preventDefault();

    // Delaclaration Variable DOM Selection
    let Name = document.getElementById("project-name").value;    
    let description = document.getElementById("description").value;
    let image = document.getElementById("upload-image").files;
    
    // manipulation Checked technologies checkbox use Ternary Operator
    let php = document.getElementById("php").checked ? document.getElementById("php").value : false;
    let python = document.getElementById("python").checked ? document.getElementById("python").value : false;
    let java = document.getElementById("java").checked ? document.getElementById("java").value : false;
    let javascript = document.getElementById("javascript").checked ? document.getElementById("javascript").value : false;
    
    // declaration variable DOM and manipulation duration
    let startDate = new Date(document.getElementById('start-date').value);
    let endDate = new Date(document.getElementById("end-date").value);
    let duration = (endDate - startDate) / (30 * 24 * 60 * 60 * 1000);
        duration = duration.toFixed();


    // Conditional input
    if (Name == "") {
        alert("Please Input Name");
    } else if (startDate == "") {
        alert("Please Input Start Date");
    } else if (endDate == "") {
        alert("Please Input End Date");
    } else if (description == "") {
        alert("Please Input Description");
    } else if (php == false && python == false && java == false && javascript == false) {
        alert("Please Checklist Technologies");
    } else if (image.length == 0) {
        alert("Please Input Image");
    } else {
        // Convert image to blob object
        image = URL.createObjectURL(image[0]);
        

        let myProjectData = {
            Name,
            startDate,
            endDate,
            duration,
            description,
            php,
            python,
            java,
            javascript,
            image,
            postedAt: new Date()
        };

        // console.log(myProjectData);
        myProject.push(myProjectData);
        showData();

    }

}

//Arrow function to show list Myprojects
const showData = () => {
    document.getElementById('project').innerHTML = ""

    myProject.map((project) => {
        return document.getElementById('project').innerHTML +=
            `<div class="myProject-item">
            <img src="${project.image}"/>
            <a href="myProject-detail.html">
            <h3>${project.Name}</h3>
            </a>
            <div>
            <h5>Durasi : ${isNaN(project.duration) ? `-` : `${project.duration} Bulan`}</h5>
            </div>
            <p>${project.description}</p>
            <div>
                ${project.php ? `<i class="fa-brands fa-php fa-2x"></i>` : ``}
                ${project.python ? `<i class="fa-brands fa-python fa-2x"></i>` : ``}
                ${project.java ? `<i class="fa-brands fa-java fa-2x"></i>` : ``}
                ${project.javascript ? `<i class="fa-brands fa-js fa-2x"></i>` : ``}
            </div>
            <div>
            <button>Edit</button>
            <button>Delete</button>
            </div>
            <div>
            <p class="create_time">${createTime(project.postedAt)}</p>
            <p class="durationPost">${getDuration(project.postedAt)}</p>
            </div>
        </div>`
    })
}

// function manipulation date time
function createTime(time) {
    //deklarasi variabel
    let years = time.getFullYear()
    let monthIndex = time.getMonth()
    let date = time.getDate()
    let hour = time.getHours()
    let minutes = time.getMinutes()
    
    //Get the name of the month
    const month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

    //Return variable
    return `${date} ${month[monthIndex]} ${years} ${hour}:${minutes} WIB`
}


// Arrow function manipulation duration time
const getDuration = (timePost) => {
    let timePosting = timePost
    let timeNow = new Date()
    let distance = timeNow - timePosting

    // 1 detik = 1000 milidetik

    let monthDistance = Math.floor(distance / (30*24*60*60*1000))
    if(monthDistance > 0) {
        return monthDistance + ' Month Ago'
    } else {
        let weekDistance = Math.floor(distance / (7*24*60*60*1000))
        if(weekDistance > 0 ) {
            return weekDistance + ' Week Ago'
        } else {
            let dayDistance = Math.floor(distance / (24*60*60*1000))
            if(dayDistance > 0 ) {
                return dayDistance + ' Day Ago'
            } else {
                let hourDistance = Math.floor(distance / (60*60*1000))
                if(hourDistance > 0 ) {
                    return hourDistance + ' Hour Ago'
                }  else {
                    let minutesDistance = Math.floor(distance / (60*1000))
                    if(minutesDistance > 0 ) {
                        return minutesDistance + ' Minutes Ago'
                    }  else {
                        let secondDistance = Math.floor(distance / (1000))
                        return secondDistance + ' Second Ago'  
                    
                    }
                }
            }
        }
    } 
}

// Running Function showData in 1000 Milisecond/1 Second
setInterval(showData, 1000);