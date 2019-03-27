puzzle=[
    //across
    {
        clue: "Rock on a ring",
        direction: "across",
        answer: "gem",
        id:1,
        
    },
    {
        clue: "Something emitted by an exploding puffball mushroom",
        direction: "across",
        answer: "spore",
        id:4
    },
    {
        clue: "Sound",
        direction: "across",
        answer: "audio",
        id:6
    },
    {
        clue: "Mess (up)",
        direction: "across",
        answer: "screw",
        id:7
    },
    {
        clue: "Where to aim a telescope",
        direction: "across",
        answer: "Sky",
        id:8
    },

    //down
    {
        clue: "Stop producing water, as a well",
        direction: "down",
        answer: "Godry",
        id:1
    },
    {
        clue: "One of the Great Lakes",
        direction: "down",
        answer: "Erie",
        id:2
    },
    {
        clue: "Feline 'feed me'",
        direction: "down",
        answer: "meow",
        id:3
    },
    {
        clue: "Back Talk",
        direction: "down",
        answer: "Sass",
        id:4
    },
    {
        clue: "One reaching a goal in the winter olympics",
        direction: "down",
        answer: "puck",
        id:5
    },    
]
boardLength = 5
boardWidth = 5

for(var i =0;i<boardLength;i++){
    element = document.createElement("td")
    element
    node = document.createTextNode('&nbsp;')
    element.appendChild(node)
    table = document.getElementById("gameBoard")
    table.appendChild(element)

}