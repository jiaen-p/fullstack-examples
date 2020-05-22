import { Platform } from './Platform'

let p1 = new Platform("ps4",2017, "sony", 64, 4, true, 120, true, "bluray", "black")
let p2 = new Platform("ps4",2017, "sony", 64, 4, true, 120, true, "bluray", "black")
let p3 = new Platform("xbox one",2017, "microsoft", 64, 4, true, 120, true, "bluray", "black")


console.log(p1.samePlatform(p2))
console.log(p1.samePlatform(p3))

p1.print()
p3.print()


console.log(p1.getColor(), p1.getCompany(), p1.getGeneration(), p1.getHasHD(), p1.getHasInternetConnection(), p1.getHdSize(),
p1.getNBits(), p1.getName(), p1.getReleaseYear(), p1.getStorageDevice())