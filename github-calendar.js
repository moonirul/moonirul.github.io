let githubData = null;


async function initGithubCalendar() {

    try {

        const response = await fetch("./data/contributions.json");

        const json = await response.json();


        githubData =
            json.data.user.contributionsCollection.contributionCalendar;


        createYearButtons();


        const currentYear = new Date().getFullYear();

        loadGithubCalendar(currentYear);


    } catch(error) {

        console.log("Github data error:", error);

    }

}





function createYearButtons(){

    const box =
    document.getElementById("github-years");


    box.innerHTML="";


    let years = [];


    githubData.weeks.forEach(week=>{

        week.contributionDays.forEach(day=>{


            let year =
            new Date(day.date).getFullYear();


            if(!years.includes(year)){
                years.push(year);
            }


        });

    });



    years.sort((a,b)=>b-a);



    years.forEach(year=>{


        let btn =
        document.createElement("button");


        btn.innerText = year;


        btn.className =
        "px-4 py-2 rounded-lg bg-slate-100 hover:bg-green-600 hover:text-white";


        btn.onclick=function(){

            loadGithubCalendar(year);

        };


        box.appendChild(btn);



    });



}







function loadGithubCalendar(year){


    const calendar =
    document.getElementById(
        "github-calendar"
    );


    calendar.innerHTML="";



    let total = 0;

    let activeDays = 0;



    githubData.weeks.forEach(week=>{


        let column =
        document.createElement("div");


        column.className =
        "flex flex-col gap-1";



        let showColumn=false;



        week.contributionDays.forEach(day=>{


            let dayYear =
            new Date(day.date)
            .getFullYear();



            if(dayYear === year){


                showColumn=true;


                total += day.contributionCount;


                if(day.contributionCount>0){
                    activeDays++;
                }



                let square =
                document.createElement("div");


                square.className =
                "w-3 h-3 rounded-sm";



                square.style.backgroundColor =
                day.color;



                square.title =
                `${day.date}: ${day.contributionCount} contributions`;



                column.appendChild(square);


            }



        });



        if(showColumn){

            calendar.appendChild(column);

        }



    });




    document.getElementById(
        "github-total"
    ).innerText = total;



    document.getElementById(
        "github-year"
    ).innerText = year;



    document.getElementById(
        "active-days"
    ).innerText = activeDays;



}






initGithubCalendar();