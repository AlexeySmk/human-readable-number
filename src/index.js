module.exports = function toReadable(number) {

    function checkNum(num) {

        let toWord = "";

        switch (num) {

            case 0:
                toWord += "zero";
                break;
            case 1:
                toWord += "one";
                break;
            case 2:
                toWord += "two";
                break;
            case 3:
                toWord += "three";
                break;
            case 4:
                toWord += "four";
                break;
            case 5:
                toWord += "five";
                break;
            case 6:
                toWord += "six";
                break;
            case 7:
                toWord += "seven";
                break;
            case 8:
                toWord += "eight";
                break;
            case 9:
                toWord += "nine";
                break;
            case 10:
                toWord += "ten";
                break;
            case 11:
                toWord += "eleven";
                break;
            case 12:
                toWord += "twelve";
                break;
            case 13:
                toWord += "thirteen";
                break;
            case 14:
                toWord += "fourteen";
                break;
            case 15:
                toWord += "fifteen";
                break;
            case 16:
                toWord += "sixteen";
                break;
            case 17:
                toWord += "seventeen";
                break;
            case 18:
                toWord += "eighteen";
                break;
            case 19:
                toWord += "nineteen";
                break;
            case 20:
                toWord += "twenty";
                break;
            case 30:
                toWord += "thirty";
                break;
            case 40:
                toWord += "forty";
                break;
            case 50:
                toWord += "fifty";
                break;
            case 60:
                toWord += "sixty";
                break;
            case 70:
                toWord += "seventy";
                break;
            case 80:
                toWord += "eighty";
                break;
            case 90:
                toWord += "ninety";
                break;
            case 100:
                toWord += "hundred";
                break;
            case 1000:
                toWord += "thousand";
                break;


        }
        return toWord;

    }

    let numToStr = String(number);
    let addZero = Number(String(number).slice(0, 1) + "0");
    let firstLetter = Number(String(number).slice(0, 1));
    // let test = Number(String(number).slice(-2));
    // let test2 = Number(String(number).slice(-3));
    if (number <= 20) {

        return checkNum(number);

    }

    if (number === 20 || number === 30 || number === 40 || number === 50 || number === 60 || number === 70 || number === 80 || number === 90) {

        return checkNum(number);

    }

    if (number === 100) {
        return checkNum(firstLetter) + " " + checkNum(number);
    } else if (number === 200 || number === 300 || number === 400 || number === 500 || number === 600 || number === 700 || number === 800 || number === 900) {
        return checkNum(firstLetter) + " " + checkNum(100);
    } else if (number === 1000) {

        return checkNum(firstLetter) + " " + checkNum(1000);

    }


    if (number > 20 && number < 30) {
        if (numToStr.length < 3) {
            return checkNum(addZero) + " " + checkNum(+numToStr[1]);
        }

    }

    if (number > 30 && number < 40) {

        if (numToStr.length < 3) {
            return checkNum(addZero) + " " + checkNum(+numToStr[1]);
        }
    }

    if (number > 40 && number < 50) {

        if (numToStr.length < 3) {
            return checkNum(addZero) + " " + checkNum(+numToStr[1]);
        }
    }

    if (number > 50 && number < 60) {

        if (numToStr.length < 3) {
            return checkNum(addZero) + " " + checkNum(+numToStr[1]);
        }
    }

    if (number > 60 && number < 70) {

        if (numToStr.length < 3) {
            return checkNum(addZero) + " " + checkNum(+numToStr[1]);
        }
    }

    if (number > 70 && number < 80) {

        if (numToStr.length < 3) {
            return checkNum(addZero) + " " + checkNum(+numToStr[1]);
        }

    }

    if (number > 80 && number < 90) {

        if (numToStr.length < 3) {
            return checkNum(addZero) + " " + checkNum(+numToStr[1]);
        }
    }

    if (number > 90 && number < 100) {

        if (numToStr.length < 3) {
            return checkNum(addZero) + " " + checkNum(+numToStr[1]);
        }

    }


    if (number > 100) {

        if (numToStr.length < 4) {

            if (Number(String(number).slice(-2) <= 20)) {

                return checkNum(firstLetter) + " " + checkNum(100) + " " + checkNum(Number(String(number).slice(-2)));

            } else if (Number(String(number).slice(-2) > 20)) {

                return checkNum(firstLetter) + " " + checkNum(100) + " " + toReadable(Number(String(number).slice(-2)));

            }

        }

    }

    if (number > 1000) {

        if (numToStr.length < 5) {

            if (Number(String(number).slice(-3) <= 20)) {

                return checkNum(firstLetter) + " " + checkNum(1000) + " " + checkNum(Number(String(number).slice(-2)));

            } else if (Number(String(number).slice(-3) > 20)) {

                return checkNum(firstLetter) + " " + checkNum(1000) + " " + toReadable(Number(String(number).slice(-3)));

            }

        }

    }



}