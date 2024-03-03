function checkName(name) {
    const lastChar = name.slice(-1);

    const array = 'aeiouyw';
    if(array === 'aeiouyw') {
        for(const arr of array) {
            if(lastChar === arr) {
                return 'good name';
            }
        }

        if(array === 'aeiouyw') {
            for(const arr of array) {
                if(lastChar !== arr) {
                    return 'bad name';
                }
            }
        }
    }
}



const inputName = 'melindaA';
const nameVerify = checkName(inputName.toLocaleLowerCase());
console.log(nameVerify);