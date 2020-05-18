import {Mobile} from './Mobile'

let Nokia: Mobile = new Mobile('Nokia', '3210', 'NK', 64, 'blue', false, 2, 180);
let iPhone: Mobile = new Mobile('iPhone', '3G', 'AAPL', 128, 'black', true, 3, 590);
let Samsung: Mobile = new Mobile('Samsung', 'Galaxy 10', 'Smsng', 64, 'withe', true, 1, 300);

console.log(Nokia);
console.log(iPhone);
console.log(Samsung);

Nokia.setIs5G(true)
Nokia.setCamNum(4)

console.log(Nokia, iPhone, Samsung);


// apartado 7
let moviles: Mobile[] = [Nokia, iPhone, Samsung]
// apartado 8
Nokia.print();
iPhone.print();
Samsung.print();