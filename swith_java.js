//              SWITH STATMENT

const month = prompt("Plz! Enter Month Name?");


switch (month) {
    case "march":
        alert(`${month} is good month!!!`)
        break;

    case "may":
        alert(`${month} is is boring month!!!`)
        break;

    case "janvary":
        alert(`${month} is vrey good or also boring month!!!`)
        break;

        //     default:
        //         alert('You Enter Rong Month?')
        //         break;

    default:
        alert(`${month} is Not Month? Plz Enter Month Name.`)
        break;
}