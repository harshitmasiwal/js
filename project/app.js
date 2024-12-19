var ans = 0 ;
var sym = '+' ;


async function  clicked(value){

    value = Number.parseInt(value); // Ensure the value is converted to a number
    switch (sym) {
        case '+':
            ans += value;
            break;
        case '-':
            ans -= value;
            break;
        case '*':
            ans *= value;
            break;
        case '/':
            if (value !== 0) {
                ans /= value;
            } else {
                console.error("Cannot divide by zero");
            }
            break;
        default:
            console.error("Invalid symbol");
            return;
    }
    console.log(ans);

}   

