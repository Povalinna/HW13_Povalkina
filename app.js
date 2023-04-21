const  characters ='cERuhpsasukkkllmouo667899ьбю09b';
        var length;
        var key = ` `;
        function generateKey(length,characters){
        while (length > 0) 
        {var j = parseInt(Math.random()*characters.length-1);
            key += characters[j];
        length--}
        console.log(`Результат функції становить ${key}`);
         }
        generateKey(5,characters);// приклад роботи функції
        generateKey(10,characters);//приклад роботи функції