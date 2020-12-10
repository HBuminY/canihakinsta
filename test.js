let i;
for(i=1; i<100; i++){
    if(Number.isInteger(i/15)){console.log('fizz buzz');}
    else if(Number.isInteger(i/3)){console.log('fizz');}
    else if(Number.isInteger(i/5)){console.log('buzz');}
    
    else{console.log(i);}
}
