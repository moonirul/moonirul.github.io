let githubData = null;


async function loadGithubData() {

    const res = await fetch(
        "./data/contributions.json"
    );


    githubData = await res.json();


    loadGithubCalendar(
        new Date().getFullYear()
    );

}



function loadGithubCalendar(year) {


    const calendar =
        githubData.data.user
            .contributionsCollection
            .contributionCalendar;



    const container =
        document.getElementById(
            "github-calendar"
        );


    container.innerHTML = "";



    let total = 0;



    calendar.weeks.forEach(week => {


        let weekColumn =
            document.createElement("div");


        weekColumn.className =
            "flex flex-col gap-1";



        let hasYear = false;



        week.contributionDays.forEach(day => {


            let dayYear =
                new Date(day.date)
                    .getFullYear();



            if (dayYear === year) {


                hasYear = true;


                total += day.contributionCount;



                let box =
                    document.createElement("div");


                box.className =
                    "w-3 h-3 rounded-sm cursor-pointer";



                box.style.backgroundColor =
                    day.color;



                box.title =
                    `${day.date}: ${day.contributionCount} contributions`;



                weekColumn.appendChild(box);


            }


        });



        if (hasYear) {

            container.appendChild(
                weekColumn
            );

        }


    });




    document.getElementById(
        "github-total"
    ).innerText = total;



    document.getElementById(
        "view-year"
    ).innerText = year;


}



loadGithubData();