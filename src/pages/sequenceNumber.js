export const SequenceNumber = (number) => {

    console.log('function:', number);

    let higherSequence = '';
    let currentSequence = '';

    number = number.toString().split('');

    number.forEach((num, index) => {

        if (index + 1 >= number.length) {
            return;
        }

        if ((num === number[index + 1] - 1) || (num === 9 && number[index + 1] === 0)) {

            if (index === 0 || currentSequence === '') {
                currentSequence += num;
            }

            currentSequence += number[index + 1];

            if (Number(currentSequence) > Number(higherSequence)) {
                higherSequence = currentSequence;
            }
        }
        else {
            currentSequence = ''
        }

    })

    return higherSequence;

}


// console.log(sequenceNumber(6740300985678819));
// console.log(sequenceNumber(9012364509789));
// console.log(sequenceNumber(1230456901));

