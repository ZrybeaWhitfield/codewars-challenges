// Kata: 6kyu "Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer" https://www.codewars.com/kata/582887f7d04efdaae3000090/

// tags: FUNDAMENTALS

// my solution:

let exerciseAPI = {
    count: 419,
    next: "https://wger.de/api/v2/exercise/?limit=20&offset=20",
    previous: null,
    results: [
        {
            id: 345,
            uuid: "c788d643-150a-4ac7-97ef-84643c6419bf",
            name: "2 Handed Kettlebell Swing",
            exercise_base: 9,
            description: "Two Handed Russian Style Kettlebell swing",
            creation_date: "2015-08-03",
            category: 10,
            muscles: [],
            muscles_secondary: [],
            equipment: [10],
            language: 2,
            license: 2,
            license_author: "deusinvictus",
            variations: []
        },
        {
            id: 174,
            uuid: "99881bdd-43d7-4c3b-82ed-9c187d0455b7",
            name: "Abduktoren-Maschine",
            exercise_base: 12,
            description: "abductor machin",
            creation_date: "2013-07-19",
            category: 9,
            "muscles": [
                8
            ],
            muscles_secondary: [],
            equipment: [],
            language: 1,
            "license": 1,
            "license_author": "flori",
            "variations": []
        },
        {
            "id": 223,
            "uuid": "e56d0a17-b1b8-427d-991e-97c530c7db6a",
            "name": "Adduktoren Maschine",
            "exercise_base": 13,
            "description": "
Oberschenkel Innenseite!",
            "creation_date": "2014-02-26",
            "category": 9,
            "muscles": [],
            "muscles_secondary": [],
            "equipment": [],
            "language": 1,
            "license": 1,
            "license_author": "Marius",
            "variations": []
        },
        {
            "id": 228,
            "uuid": "880bff63-6798-4ffc-a818-b2a1ccfec0f7",
            "name": "Arnold Press",
            "exercise_base": 20,
            "description": "
Zwei Kurzhanteln mit den Handflächen nach innen vor der Brust halten, Ellbogen unterhalb der Handgelenke.\n
Ellbogen nach außen bringen und Hanteln über den Kopf heben. Drehung kommt aus dem Ellbogen, nicht aus den Armen!\n
Wenn die Arme durchgestreckt sind, die gleiche Bewegung rückwärts ausführen.",
            "creation_date": "2014-03-09",
            "category": 13,
            "muscles": [],
            "muscles_secondary": [],
            "equipment": [
                3
            ],
            "language": 1,
            "license": 3,
            "license_author": "bloody_disgrace",
            "variations": [
                228,
                900,
                911,
                153,
                266,
                241
            ]
        },
        {
            "id": 227,
            "uuid": "53ca25b3-61d9-4f72-bfdb-492b83484ff5",
            "name": "Arnold Shoulder Press",
            "exercise_base": 20,
            "description": "
Very common shoulder exercise.\n
 \n
As shown here: https://www.youtube.com/watch?v=vj2w851ZHRM

",
            "creation_date": "2014-03-09",
            "category": 13,
            "muscles": [],
            "muscles_secondary": [],
            "equipment": [
                3
            ],
            "language": 2,
            "license": 1,
            "license_author": "trzr23",
            "variations": [
                227,
                329,
                229,
                190,
                119,
                123,
                152,
                155
            ]
        },
        {
            "id": 353,
            "uuid": "583281c7-2362-48e7-95d5-8fd6c455e0fb",
            "name": "Asai Squad",
            "exercise_base": 22,
            "description": "
\n
single leg sit and stand\n",
            "creation_date": "2015-10-22",
            "category": 9,
            "muscles": [
                10
            ],
            "muscles_secondary": [
                8
            ],
            "equipment": [],
            "language": 7,
            "license": 2,
            "license_author": "Tetsuhiko Asai",
            "variations": []
        },
        {
            "id": 5,
            "uuid": "5675ae61-6597-4806-ae5c-2dda5a5ac03c",
            "name": "Ausfallschritte im Gehen",
            "exercise_base": 206,
            "description": "
.",
            "creation_date": "2013-05-05",
            "category": 9,
            "muscles": [
                10
            ],
            "muscles_secondary": [
                8
            ],
            "equipment": [
                3
            ],
            "language": 1,
            "license": 1,
            "license_author": "wger.de",
            "variations": [
                55,
                5
            ]
        },
        {
            "id": 55,
            "uuid": "27301836-ed7f-4510-83e7-66c0b8041a44",
            "name": "Ausfallschritte Stehend",
            "exercise_base": 205,
            "description": "
.",
            "creation_date": "2013-05-05",
            "category": 9,
            "muscles": [
                10
            ],
            "muscles_secondary": [
                8
            ],
            "equipment": [
                3
            ],
            "language": 1,
            "license": 1,
            "license_author": "wger.de",
            "variations": [
                55,
                5
            ]
        },
        {
            "id": 135,
            "uuid": "c8d08cbd-d406-4ce0-b1b9-10b236272d30",
            "name": "Ausfallschritt Trizepsdrücken ü. Kopf, ß-Stange",
            "exercise_base": 25,
            "description": "",
            "creation_date": "2013-05-05",
            "category": 8,
            "muscles": [
                5
            ],
            "muscles_secondary": [],
            "equipment": [],
            "language": 1,
            "license": 1,
            "license_author": "wger.de",
            "variations": []
        },
        {
            "id": 289,
            "uuid": "6add5973-86d0-4543-928a-6bb8b3f34efc",
            "name": "Axe Hold",
            "exercise_base": 31,
            "description": "
Grab dumbbells and extend arms to side and hold as long as you can",
            "creation_date": "2014-11-02",
            "category": 8,
            "muscles": [],
            "muscles_secondary": [],
            "equipment": [
                3
            ],
            "language": 2,
            "license": 1,
            "license_author": "GrosseHund",
            "variations": []
        },
        {
            "id": 677,
            "uuid": "8e9d8968-323d-468c-9174-8cf11a105fad",
            "name": "Axe Hold",
            "exercise_base": 31,
            "description": "
Nehmen Sie die Hanteln und strecken Sie die Arme zur Seite. Halten Sie sie so lange wie möglich.",
            "creation_date": "2020-01-16",
            "category": 8,
            "muscles": [],
            "muscles_secondary": [],
            "equipment": [
                3
            ],
            "language": 1,
            "license": 2,
            "license_author": "Wunschcoach",
            "variations": []
        },
        {
            "id": 637,
            "uuid": "0fd6154d-fb53-4b24-acc0-1c5c05b57ebc",
            "name": "Back Squat",
            "exercise_base": 34,
            "description": "
Place a barbell in a rack just below shoulder-height. Dip under the bar to put it behind the neck across the top of the back, and grip the bar with the hands wider than shoulder-width apart. Lift the chest up and squeeze the shoulder blades together to keep the straight back throughout the entire movement. Stand up to bring the bar off the rack and step backwards, then place the feet so that they are a little wider than shoulder-width apart. Sit back into hips and keep the back straight and the chest up, squatting down so the hips are below the knees. From the bottom of the squat, press feet into the ground and push hips forward to return to the top of the standing position.",
            "creation_date": "2019-05-29",
            "category": 9,
            "muscles": [],
            "muscles_secondary": [],
            "equipment": [],
            "language": 2,
            "license": 2,
            "license_author": "axel",
            "variations": []
        },
        {
            "id": 38,
            "uuid": "4def60e7-ed8d-4a9d-bf76-ceb15ecf9779",
            "name": "Bankdrücken Eng",
            "exercise_base": 76,
            "description": "
Lege dich auf die Bank, die Stange direkt über die Augen, die Knie etwas angewinkelt und die Füße fest auf dem Boden. Greife nun die Stange mit einem engen Griff (nicht mehr als 20cm.). Führe nun das Gewicht so weit nach unten, bis die Oberarme paralell zum Boden sind, gehe dann wieder nach obern. Bringe die Stange nicht wie beim (breiten) Bankdrücken auf Brusthöhe runter, sondern weiter unten. Auf der tiefsten Stelle sollten deine Arme einen rechten Winkel machen.",
            "creation_date": "2013-05-05",
            "category": 8,
            "muscles": [
                5
            ],
            "muscles_secondary": [
                2,
                4
            ],
            "equipment": [
                1,
                8
            ],
            "language": 1,
            "license": 1,
            "license_author": "wger.de",
            "variations": [
                38,
                58,
                25
            ]
        },
        {
            "id": 77,
            "uuid": "06450bcb-03a8-4bd7-8349-ef677ee57ea3",
            "name": "Bankdrücken KH",
            "exercise_base": 75,
            "description": "
Der Bewegungsablauf ist ähnlich zur Übung mit einer Langhantel.\n
Nehme die Gewichte in die Hände und lege dich auf die Bank. Halte die Hanteln neben der Brust auf Brustwarzenhöhe und drücke sie nun nach oben, bis die Arme ausgestreckt sind. Lasse die Gewichte nun langsam und kontrolliert runter.\n
 ",
            "creation_date": "2013-05-05",
            "category": 11,
            "muscles": [
                4
            ],
            "muscles_secondary": [
                2,
                5
            ],
            "equipment": [
                8,
                3
            ],
            "language": 1,
            "license": 1,
            "license_author": "wger.de",
            "variations": []
        },
        {
            "id": 15,
            "uuid": "198dcb2e-e35f-4b69-ae8b-e1124d438eae",
            "name": "Bankdrücken LH",
            "exercise_base": 73,
            "description": "
Lege dich auf die Bank, die Stange direkt über die Augen, die Knie etwas angewinkelt und die Füße fest auf dem Boden. Greife die Stange breit und lasse sie langsam und kontrolliert runter, dabei sollte die Stange kurz auf Brustwarzenhöhe den Körper berühren. Dann das Gewicht wieder hochdrücken bis die Arme durchgestreckt sind.\n
Bei hohem Gewicht, empfielt sich natürlich einen Spotter zu haben, der einen hilft falls man die Stange nicht alleine hochdrücken kann.\n
Mit der Breite des Griffs kann außerdem kontrolliert werden, welcher Bereich der Brust stärker belastet wird:\n
\n
breiter Griff: äußere Brustmuskeln\n
enger Griff: innere Brustmuskeln und Trizeps\n",
            "creation_date": "2013-05-05",
            "category": 11,
            "muscles": [
                4
            ],
            "muscles_secondary": [
                2,
                5
            ],
            "equipment": [
                1,
                8
            ],
            "language": 1,
            "license": 1,
            "license_author": "wger.de",
            "variations": [
                15,
                17,
                720,
                725
            ]
        },
        {
            "id": 343,
            "uuid": "1b9dc5bc-790b-4e21-a55d-f8b3115e94c5",
            "name": "Barbell Ab Rollout",
            "exercise_base": 41,
            "description": "
Place a barbell on the floor at your feet.\n
Bending at the waist, grip the barbell with a shoulder with overhand grip.\n
With a slow controlled motion, roll the bar out so that your back is straight.\n
Roll back up raising your hips and butt as you return to the starting position.",
            "creation_date": "2015-07-27",
            "category": 10,
            "muscles": [
                14
            ],
            "muscles_secondary": [],
            "equipment": [
                1
            ],
            "language": 2,
            "license": 2,
            "license_author": "sevae",
            "variations": []
        },
        {
            "id": 407,
            "uuid": "1215dad0-b7e0-42c6-80d4-112f69acb68a",
            "name": "Barbell Hack Squats",
            "exercise_base": 43,
            "description": "
Perform leg squats with barbell behind your legs",
            "creation_date": "2016-07-30",
            "category": 9,
            "muscles": [],
            "muscles_secondary": [],
            "equipment": [
                1
            ],
            "language": 2,
            "license": 2,
            "license_author": "BePieToday",
            "variations": [
                407,
                342,
                300,
                191,
                650,
                389,
                355,
                160,
                185,
                111,
                795,
                387
            ]
        },
        {
            "id": 405,
            "uuid": "ae6a6c23-4616-49b7-a152-49d7461c2b7f",
            "name": "Barbell Lunges",
            "exercise_base": 46,
            "description": "
Put barbell on the back of your shoulders. Stand upright, then take the first step forward. Step should bring you forward so that your supporting legs knee can touch the floor. Then stand back up and repeat with the other leg.\n
Remember to keep good posture.",
            "creation_date": "2016-07-30",
            "category": 9,
            "muscles": [
                10
            ],
            "muscles_secondary": [
                8
            ],
            "equipment": [
                1
            ],
            "language": 2,
            "license": 2,
            "license_author": "Mikko Ruohola",
            "variations": [
                405,
                112,
                113
            ]
        },
        {
            "id": 759,
            "uuid": "95b25f5e-4a01-48f1-a3df-2b7fe8fd624d",
            "name": "Barbell Reverse Wrist Curl",
            "exercise_base": 48,
            "description": "
Sitting on a bench, grab a barbell with your palms facing down and your hands shoulder-width apart. Rest your forearms on your thighs and allow your wrists to hang over your knees.\n
Curl your knuckles towards your face, lifting the barbell. Pause for a moment in the top position, then slowly return the barbell to the starting position.",
            "creation_date": "2020-04-01",
            "category": 8,
            "muscles": [],
            "muscles_secondary": [],
            "equipment": [
                1
            ],
            "language": 10,
            "license": 2,
            "license_author": "burenl",
            "variations": []
        },
        {
            "id": 344,
            "uuid": "2cd5e256-20a7-4bc8-a7a8-d62bf8ce00cf",
            "name": "Barbell Triceps Extension",
            "exercise_base": 50,
            "description": "
Position barbell overhead with narrow overhand grip.\n
Lower forearm behind upper arm with elbows remaining overhead. Extend forearm overhead. Lower and repeat.",
            "creation_date": "2015-07-27",
            "category": 8,
            "muscles": [
                5
            ],
            "muscles_secondary": [
                2,
                4
            ],
            "equipment": [
                1
            ],
            "language": 2,
            "license": 2,
            "license_author": "sevae",
            "variations": [
                344,
                274,
                89,
                90
            ]
        }
    ]
}



var hikingBermuda = {
    author: "Cecile Davidson",
    price: 17.95,
    title: "Hiking Bermuda",
    sections: {
        0: {
            sectionName: "Preface",
            chapters: [{
                name: "Trail Locator",
                page: 12
            }]
        },
        1: {
            sectionName: "Introduction",
            chapters: [{
                name: "Map Legend",
                page: 24
            },
            {
                name: "Rating System",
                page: 22
            }
            ]
        },
        2: {
            sectionName: "West End",
            chapters: [{
                name: "Botanical Gardens",
                page: 63
            },
            {
                name: "Rockaway, Whale Bay Park",
                page: 45
            },
            {
                name: "Somerset Bridge, Hog Bay Park",
                page: 39
            }
            ]
        }
    },
    trails: [{
        name: "Somerset to Hamilton Railway Trail",
        page: 75,
        section: "West End",
        distanceInMiles: 11.7,
        rating: "Hardy"
    },
    {
        name: "City of Hamilton",
        page: 69,
        section: "West End",
        distanceInMiles: 2.4,
        rating: "Easy"
    },
    {
        name: "St. George's Point",
        page: 131,
        section: "East End",
        distanceInMiles: 3.6,
        rating: "Moderate"
    },
    {
        name: "South Shore Beaches",
        page: 53,
        section: "West End",
        distanceInMiles: 5.0,
        rating: "Moderate"
    },
    ]
}

// console log the price of the book with $ sign in front of it
// console log the number of chapters in the Preface section
// console log the number of chapters in the Introduction section
// console log the number of chapters in the West End section
// console log the name of the 4th trail
// console log only trails that are at least than 4.0 miles
// console log only trails on the West End
// console log only moderate trailss
// console log only easy trails
// Add a publisher property with "VegaNet Publications" as its value and console log it
// Change the page of the 1st chapter in the Preface section to 11 instead of 12 and console log it

/* Add another section property with 3 as its key and the value an object with the following properties:
        //     sectionName: "East End", 
        //     chapters: [{name: "Abbot's Cliff", page: 91}, {name: "St. David's Point", page: 105}, {name: "Spittal Pond", page:101}, {name: "Old Town of St. George" , page: 123}]
        // */


// console log the number of chapters in the newly added East End section

/* Add another trail with the following properties:
        //     name: "Abbot's Cliff", page: 91, section: "East End", distanceInMiles: 1.1, rating: "Moderate"
        // */

// console log the distance in miles of the newly added trail