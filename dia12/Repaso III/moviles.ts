import { Mobile } from './Mobile'
import { MobileLibrary } from './MobileLibrary'

let Nokia: Mobile = new Mobile('Nokia', '3210', 'NK', 64, 'blue', false, 2, 100);
let iPhone: Mobile = new Mobile('iPhone', '3G', 'AAPL', 128, 'black', true, 3, 500);
let Samsung: Mobile = new Mobile('Samsung', 'Galaxy 10', 'Smsng', 64, 'withe', true, 1, 300);

let lib1: MobileLibrary = new MobileLibrary('libreiria 1', 'Spain', [Nokia, iPhone, Samsung])

// console.log(lib1.getTotalPrice());
lib1.printAll();