const prompt = require('prompt-sync')({sigint: true});

 

const x = prompt('Enter number: ');

if(x % 2 ==0 && x>=0){

    a = Math.sqrt(x)

}

else if ( x<0) {

    a ="Tidak bisa input bilangan negatif"

}

else {
    a ="Tidak bisa input bilangan ganjil"
}

console.log(a)




