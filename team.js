const persons = [
    {
        name: "Valentina",
        surname: "Li",
        age: 22,
        city: "Roma",
        hobby: "Gym",
        favoriteFood: "Sushi",
        favoriteVideoGame: "League of Legends",
        favoriteFilm: "",
        favoriteBook: "Prima di te nessuno mai",
        petName: "Yuki",
    },
    {
        name: "Azeez",
        surname: "Komolafe",
        age: 24,
        city: "Nigeria",
        hobby: "coding",
        favoriteFood: "indomin",
        favoriteVideoGame: "call of Duty",
        favoriteFilm: "Mr.Robot",
        favoriteBook: "marry the dragon",
        petName: "Boris",
    },
    {
        name: "Melissa",
        surname: "Mastrovincenzo",
        age: 30,
        city: "Castiglione Messer Marino",
        hobby: "Dormire",
        favoriteFood: "Pizza",
        favoriteVideoGame: "GTA",
        favoriteFilm: "Harry Potter",
        favoriteBook: "",
        petName: "",
    },
    {
        name: "Andrea",
        surname: "Sergi",
        age: 28,
        city: "Gioia Tauro",
        hobby: "Gym",
        favoriteFood: "Pizza",
        favoriteVideoGame: "LOL",
        favoriteFilm: "Chiedimi se sono felice",
        favoriteBook: "Intermittenze della morte",
        petName: "Nora",
    },
    {
        name: "Arianna",
        surname: "Giaccari",
        age: 22,
        city: "Galatina",
        hobby: "Singing",
        favoriteFood: "Sushi",
        favoriteVideoGame: "GTA",
        favoriteFilm: "Spider-man",
        favoriteBook: "L'amico ritrovato",
        petName: "Benny",
    },
    {
        name: "Paolo",
        surname: "Lupo",
        age: 27,
        city: "Palermo",
        hobby: "Taekwondo",
        favoriteFood: "Pasta asciutta",
        favoriteVideoGame: "Cyberpunk2077",
        favoriteFilm: "Hana-bi",
        favoriteBook: "Demian",
        petName: "Yupi",
    }
];

//Print the team in alphabetical order (surname name)

function alphabeticalOrder(a, b) {
    if (a.surname < b.surname) {
        return -1;
    }
    if (a.surname > b.surname) {
        return 1;
    }
    return 0;
}

let arrayOrdered = persons.sort(alphabeticalOrder);

console.log(arrayOrdered);

