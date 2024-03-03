function checkName(input) {
    if(typeof(input) !== "string") {
        return 'invalid';
    }

    const name = input.toLowerCase();
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

const inputName = 'tony';
const nameVerify = checkName(inputName);
console.log(nameVerify);