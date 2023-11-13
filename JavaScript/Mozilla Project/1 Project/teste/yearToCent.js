function solution(year) {
    
    if(year <= 100){
        document.write("1st century\n");
    }
    else if(year % 100 == 0){
        document.write(parseInt(year / 100) + " century");
    }
    else{
       document.write(parseInt(year / 100) + 1 + " century");
    }
    
}