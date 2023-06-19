
function calculatedGrade(points){
    if(points >= 0 && points <= 100){
        if (points > 79){
            return "A"
        }else if (points >= 60 && points <= 79){
        return "B"
       }else if (points >= 50 && points <= 59){
        return "C"
       }else if (points >= 40 && points <= 49){
        return "D"
       }else {return "E"}
    }else{
        return "invalid marks"
    }
    let points = parseInt(60)//input your marks here
    let grid = calculateGrade(points)
    console.log(points)}