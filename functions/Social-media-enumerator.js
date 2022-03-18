let friends = function (x) {
    let thousands = x / 1000  
    let millions = x / 1000000 
    let billions = x / 1000000000 
    
    if(x.toString().length >= 4 &&  x.toString().length <= 6 && x % 1000 == 0){
        return `You have ${thousands}k friends`
    }
    else if (isNaN(x) || x < 0) {
        return ('An error occured')
    }
    else if (x.toString().length >= 13) {
        return ('An error occured')
    }
    else if (x.toString().length >= 4 && x.toString().length <= 6 && x % 1000 !== 0){
        result = thousands
       return ( `You have ${ result.toFixed(1)}k friends`)

    }
    
    else if (x.toString().length >= 7 && x.toString().length <= 9 && x % 1000000 == 0){
        return 'You have ' +millions + 'm friends'
    }
    else if (x.toString().length >= 7 && x.toString().length <= 9 && x % 1000000 !== 0) {
        result = millions
        return ( `You have ${result.toFixed(1)}m friends`)
    }
    

    
    else if (x.toString().length >= 10 && x.toString().length <= 12 && x % 1000000000 == 0) {
        return ('You have ' + billions +'b friends')
    }
    else if (x.toString().length >= 10 && x.toString().length <= 12 && x % 1000000000 !== 0) {
        result = billions
        return ( 'You have ' + result.toFixed(1) + 'b friends')
    }
    else {
        return`You have ${x} friends`
    }

}
let friendCount = friends(800000)

console.log(friendCount)
