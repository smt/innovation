// Copyright 2009 Asmadi Games. All rights reserved.

THE_CARDS = [
    {
        "set": "base",
        "level": 1,
        "color": "yellow",
        "name": "Agriculture",
        "slots": [
            null,
            "leaf",
            "leaf",
            "leaf"
        ],
        "effects": [
            {
                "icon": "leaf",
                "text": "You may return a card from your hand. If you do, draw and score a card of value one higher than the card you returned.",
                "demand": false,
                "optional": true
            }
        ]
    },
    {
        "set": "base",
        "level": 1,
        "color": "red",
        "name": "Archery",
        "slots": [
            "castle",
            "lightbulb",
            null,
            "castle"
        ],
        "effects": [
            {
                "icon": "castle",
                "text": "I demand you draw a 1, then transfer the highest card in your hand to my hand!"
            }
        ]
    },
    {
        "set": "base",
        "level": 1,
        "color": "purple",
        "name": "City States",
        "slots": [
            null,
            "crown",
            "crown",
            "castle"
        ],
        "effects": [
            {
                "icon": "crown",
                "text": "I demand you transfer a top card with a [Castle] from your board to my board if you have at least four [Castle] icons on your board! If you do, draw a 1!"
            }
        ]
    },
    {
        "set": "base",
        "level": 1,
        "color": "green",
        "name": "Clothing",
        "slots": [
            null,
            "crown",
            "leaf",
            "leaf"
        ],
        "effects": [
            {
                "icon": "leaf",
                "text": "Meld a card from your hand of different color from any card on your board."
            },
            {
                "icon": "leaf",
                "text": "Draw and score a 1 for each color present on your board not present on any other player’s board."
            }
        ]
    },
    {
        "set": "base",
        "level": 1,
        "color": "purple",
        "name": "Code of Laws",
        "slots": [
            null,
            "crown",
            "crown",
            "leaf"
        ],
        "effects": [
            {
                "icon": "crown",
                "text": "You may tuck a card from your hand of the same color as any card on your board. If you do, you may splay that color of your cards left."
            }
        ]
    },
    {
        "set": "base",
        "level": 1,
        "color": "yellow",
        "name": "Domestication",
        "slots": [
            "castle",
            "crown",
            null,
            "castle"
        ],
        "effects": [
            {
                "icon": "castle",
                "text": "Meld the lowest card in your hand. Draw a 1."
            }
        ]
    },
    {
        "set": "base",
        "level": 1,
        "color": "yellow",
        "name": "Masonry",
        "slots": [
            "castle",
            null,
            "castle",
            "castle"
        ],
        "effects": [
            {
                "icon": "castle",
                "text": "You may meld any number of cards from your hand, each with a [Castle]. If you melded four or more cards, claim the Monument achievement."
            }
        ]
    },
    {
        "set": "base",
        "level": 1,
        "color": "red",
        "name": "Metalworking",
        "slots": [
            "castle",
            "castle",
            null,
            "castle"
        ],
        "effects": [
            {
                "icon": "castle",
                "text": "Draw and reveal a 1. If it has a [Castle], score it and repeat this dogma effect. Otherwise, keep it."
            }
        ]
    },
    {
        "set": "base",
        "level": 1,
        "color": "purple",
        "name": "Mysticism",
        "slots": [
            null,
            "castle",
            "castle",
            "castle"
        ],
        "effects": [
            {
                "icon": "castle",
                "text": "Draw a 1. If it is the same color as any card on your board, meld it and draw a 1."
            }
        ]
    },
    {
        "set": "base",
        "level": 1,
        "color": "red",
        "name": "Oars",
        "slots": [
            "castle",
            "crown",
            null,
            "castle"
        ],
        "effects": [
            {
                "icon": "castle",
                "text": "I demand you transfer a card with a [Crown] from your hand to my score pile! If you do, draw a 1."
            },
            {
                "icon": "castle",
                "text": "If no cards were transferred due to this demand, draw a 1."
            }
        ]
    },
    {
        "set": "base",
        "level": 1,
        "color": "blue",
        "name": "Pottery",
        "slots": [
            null,
            "leaf",
            "leaf",
            "leaf"
        ],
        "effects": [
            {
                "icon": "leaf",
                "text": "You may return up to three cards from your hand. If you returned any cards, draw and score a card of value equal to the number of cards you returned."
            },
            {
                "icon": "leaf",
                "text": "Draw a 1."
            }
        ]
    },
    {
        "set": "base",
        "level": 1,
        "color": "green",
        "name": "Sailing",
        "slots": [
            "crown",
            "crown",
            null,
            "leaf"
        ],
        "effects": [
            {
                "icon": "crown",
                "text": "Draw and meld a 1."
            }
        ]
    },
    {
        "set": "base",
        "level": 1,
        "color": "green",
        "name": "The Wheel",
        "slots": [
            null,
            "castle",
            "castle",
            "castle"
        ],
        "effects": [
            {
                "icon": "castle",
                "text": "Draw two 1."
            }
        ]
    },
    {
        "set": "base",
        "level": 1,
        "color": "blue",
        "name": "Tools",
        "slots": [
            null,
            "lightbulb",
            "lightbulb",
            "castle"
        ],
        "effects": [
            {
                "icon": "lightbulb",
                "text": "You may return three cards from your hand. If you do, draw and meld a 3."
            },
            {
                "icon": "lightbulb",
                "text": "You may return a 3 from your hand. If you do, draw three 1."
            }
        ]
    },
    {
        "set": "base",
        "level": 1,
        "color": "blue",
        "name": "Writing",
        "slots": [
            null,
            "lightbulb",
            "lightbulb",
            "crown"
        ],
        "effects": [
            {
                "icon": "lightbulb",
                "text": "Draw a 2."
            }
        ]
    },
    {
        "set": "base",
        "level": 2,
        "color": "blue",
        "name": "Calendar",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 2,
        "color": "yellow",
        "name": "Canal Building",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 2,
        "color": "green",
        "name": "Currency",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 2,
        "color": "red",
        "name": "Construction",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 2,
        "color": "yellow",
        "name": "Fermenting",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 2,
        "color": "green",
        "name": "Mapmaking",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 2,
        "color": "blue",
        "name": "Mathematics",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 2,
        "color": "purple",
        "name": "Monotheism",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 2,
        "color": "purple",
        "name": "Philosophy",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 2,
        "color": "red",
        "name": "Road Building",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 3,
        "color": "blue",
        "name": "Alchemy",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 3,
        "color": "purple",
        "name": "Education",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 3,
        "color": "green",
        "name": "Compass",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 3,
        "color": "red",
        "name": "Engineering",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 3,
        "color": "purple",
        "name": "Feudalism",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 3,
        "color": "yellow",
        "name": "Machinery",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 3,
        "color": "yellow",
        "name": "Medicine",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 3,
        "color": "red",
        "name": "Optics",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 3,
        "color": "green",
        "name": "Paper",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 3,
        "color": "blue",
        "name": "Translation",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 4,
        "color": "yellow",
        "name": "Anatomy",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 4,
        "color": "red",
        "name": "Colonialism",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 4,
        "color": "purple",
        "name": "Enterprise",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 4,
        "color": "blue",
        "name": "Experimentation",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 4,
        "color": "red",
        "name": "Gunpowder",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 4,
        "color": "green",
        "name": "Invention",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 4,
        "color": "green",
        "name": "Navigation",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 4,
        "color": "yellow",
        "name": "Perspective",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 4,
        "color": "blue",
        "name": "Printing Press",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 4,
        "color": "purple",
        "name": "Reformation",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 5,
        "color": "purple",
        "name": "Astronomy",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 5,
        "color": "green",
        "name": "Banking",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 5,
        "color": "blue",
        "name": "Chemistry",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 5,
        "color": "red",
        "name": "Coal",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 5,
        "color": "green",
        "name": "Measurement",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 5,
        "color": "blue",
        "name": "Physics",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 5,
        "color": "purple",
        "name": "Societies",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 5,
        "color": "yellow",
        "name": "Statistics",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 5,
        "color": "yellow",
        "name": "Steam Engine",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 5,
        "color": "red",
        "name": "The Pirate Code",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 6,
        "color": "blue",
        "name": "Atomic Theory",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 6,
        "color": "yellow",
        "name": "Canning",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 6,
        "color": "green",
        "name": "Classification",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 6,
        "color": "purple",
        "name": "Democracy",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 6,
        "color": "purple",
        "name": "Emancipation",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 6,
        "color": "blue",
        "name": "Encyclopedia",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 6,
        "color": "red",
        "name": "Industrialization",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 6,
        "color": "red",
        "name": "Machine Tools",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 6,
        "color": "green",
        "name": "Metric System",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 6,
        "color": "yellow",
        "name": "Vaccination",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 7,
        "color": "green",
        "name": "Bicycle",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 7,
        "color": "red",
        "name": "Combustion",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 7,
        "color": "green",
        "name": "Electricity",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 7,
        "color": "blue",
        "name": "Evolution",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 7,
        "color": "red",
        "name": "Explosives",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 7,
        "color": "purple",
        "name": "Lightning",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 7,
        "color": "blue",
        "name": "Publications",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 7,
        "color": "purple",
        "name": "Railroad",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 7,
        "color": "yellow",
        "name": "Refrigeration",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 7,
        "color": "yellow",
        "name": "Sanitation",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 8,
        "color": "yellow",
        "name": "Antibiotics",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 8,
        "color": "green",
        "name": "Corporations",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 8,
        "color": "purple",
        "name": "Empiricism",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 8,
        "color": "red",
        "name": "Flight",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 8,
        "color": "green",
        "name": "Mass Media",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 8,
        "color": "red",
        "name": "Mobility",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 8,
        "color": "blue",
        "name": "Quantum Theory",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 8,
        "color": "blue",
        "name": "Rocketry",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 8,
        "color": "yellow",
        "name": "Skyscrapers",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 8,
        "color": "purple",
        "name": "Socialism",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 9,
        "color": "green",
        "name": "Collaboration",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 9,
        "color": "red",
        "name": "Composites",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 9,
        "color": "blue",
        "name": "Computers",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 9,
        "color": "yellow",
        "name": "Ecology",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 9,
        "color": "red",
        "name": "Fission",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 9,
        "color": "blue",
        "name": "Genetics",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 9,
        "color": "green",
        "name": "Satellites",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 9,
        "color": "purple",
        "name": "Services",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 9,
        "color": "purple",
        "name": "Specialization",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 9,
        "color": "yellow",
        "name": "Suburbia",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 10,
        "color": "purple",
        "name": "A.I.",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 10,
        "color": "blue",
        "name": "Bioengineering",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 10,
        "color": "green",
        "name": "Databases",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 10,
        "color": "yellow",
        "name": "Globalization",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 10,
        "color": "red",
        "name": "Miniaturization",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 10,
        "color": "red",
        "name": "Robotics",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 10,
        "color": "green",
        "name": "Self Service",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 10,
        "color": "blue",
        "name": "Software",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 10,
        "color": "yellow",
        "name": "Stem Cells",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    },
    {
        "set": "base",
        "level": 10,
        "color": "purple",
        "name": "The Internet",
        "slots": [
            "",
            "",
            "",
            ""
        ],
        "effects": [
            {
                "icon": "",
                "text": ""
            }
        ]
    }
];
