var checker = 0;

function Color(day){
    const cubes = ["mon-square", "tue-square", "wed-square", "thu-square", "fri-square", "sat-square", "sun-square"]
    const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

    var checker = 0;

    let goup;
    let goupc;
    
    for(let i = 0; i < cubes.length; i++){
        cname = days[i] + "-down";
        if(document.getElementById(cubes[i]).className.match(cname)){
            
            checker = 1;

            goup = cubes[i];
            goupc = days[i] + "-up";
            break;
        }
    }

    if (checker == 0){
        document.getElementById(day+"-square").className = day + "-down";
    }

    else if (checker == 1){
        document.getElementById(day+"-square").className = day + "-down";
        document.getElementById(goup).className = goupc;
    }

}