module.exports = function toReadable (number) {
    if (number === 0) return 'zero'
    let first;
    let second = 0;
    let third = 0;
    let twenties = 0;
    first = number % 10;
    switch (first) {
        case 0: first = ''
            break;
        case 1: first = 'one'
            break;
        case 2: first = 'two'
            break;
        case 3: first = 'three'
            break;
        case 4: first = 'four'
            break;
        case 5: first = 'five'
            break;
        case 6: first = 'six'
            break;
        case 7: first = 'seven'
            break;
        case 8: first = 'eight'
            break;
        case 9: first = 'nine'
            break;          
        default:
            break;
    }

    if (number >= 10) {
        if (number % 100 >= 10 && number % 100 <= 19) {
            twenties = number % 100
            // first = ''
            switch (twenties) {
                case 10: twenties = 'ten'
                    break;
                case 11: twenties = 'eleven'
                    break;
                case 12: twenties = 'twelve'
                    break;
                case 13: twenties = 'thirteen'
                    break;
                case 14: twenties = 'fourteen'
                    break;
                case 15: twenties = 'fifteen'
                    break;
                case 16: twenties = 'sixteen'
                    break;
                case 17: twenties = 'seventeen'
                    break;
                case 18: twenties = 'eighteen'
                    break;
                case 19: twenties = 'nineteen'
                    break;
                default:
                    break;
            }
        } else {
            second = ((number % 100) - (number % 10))/10;
            switch (second) {
                case 2: second = 'twenty' 
                    break;
                case 3: second = 'thirty' 
                    break;
                case 4: second = 'forty' 
                    break;
                case 5: second = 'fifty' 
                    break;
                case 6: second = 'sixty' 
                    break;
                case 7: second = 'seventy' 
                    break;
                case 8: second = 'eighty' 
                    break;
                case 9: second = 'ninety' 
                    break;
            
                default:
                    break;
            }
        }
        if (number >= 100) {
            third = ((number - (number % 100))/100);
            switch (third) {
                case 1: third = 'one hundred'
                    break;
                case 2: third = 'two hundred'
                    break;
                case 3: third = 'three hundred'
                    break;
                case 4: third = 'four hundred'
                    break;
                case 5: third = 'five hundred'
                    break;
                case 6: third = 'six hundred'
                    break;
                case 7: third = 'seven hundred'
                    break;
                case 8: third = 'eight hundred'
                    break;
                case 9: third = 'nine hundred'
                    break;          
                default:
                    break;

            }  
        } 

        } else {return first}  
    

        if (third) {
            if (twenties) {
                return `${third} ${twenties}`
            } else {
                if (second) {
                    return `${third} ${second} ${first}`.trim()
                } else {
                    return `${third} ${first}`.trim()
                }
                }
        } else {
            if (twenties) {
                return `${twenties}`
                } else {
                    if (second) {
                        return `${second} ${first}`.trim()
                    } else {
                        return `${first}`.trim()
                    }
                }
        }
}
