var tests = [
    {

        id: 4,

        name:           "Memes",
        description:    "Do you like memes? <a href='https://reddit.com/r/fellowkids' target='_blank'>/r/FellowKids</a> here we come...",
        preamble:       "You may need to take the test in landscape mode if you are viewing the site on a mobile phone.<br>For each question you will be shown two memes. You should choose the meme you prefer and indicate the degree to which you prefer it.<br><i>Note: some users may find some of the images used in this test offensive; please bear this in mind if you are easily upset or offended.</i>",
        results:        "Your results are displayed below:",
        
        btnClass:       "btn-ddbdd5",
        
        testType:       IMAGES,
        resultsType:    BARS,

        scales: [
            {
                a: {
                    text: "Edgy",
                    path: "https://i.ibb.co/nQSZFBC/edgy.png",
                    color: "#ebebeb",
                    desc: "..."
                },
                b: {
                    text: "Wholesome",
                    path: "https://i.ibb.co/mHK3Mdj/wholesome.png",
                    color: "#d499b9",
                    desc: "..."
                },
                param: "e",
                axisName: "...",
                axisDesc: "..."
            },
            {
                a: {
                    text: "Ironic",
                    path: "https://i.ibb.co/GRsK54q/ironic.png",
                    color: "#c4eeb2",
                    desc: "..."
                },
                b: {
                    text: "Sincere",
                    path: "https://i.ibb.co/tb1v7GN/sincere.png",
                    color: "#f7b9c4",
                    desc: "..."
                },
                param: "i",
                axisName: "...",
                axisDesc: "..."
            },
            {
                a: {
                    text: "Abstract",
                    path: "https://i.ibb.co/RHpKZNX/abstract.png",
                    color: "#a2bcd4",
                    desc: "..."
                },
                b: {
                    text: "Concrete",
                    path: "https://i.ibb.co/Hr8HtbV/concrete.png",
                    color: "#ffe4bf",
                    desc: "..."
                },
                param: "a",
                axisName: "...",
                axisDesc: "..."
            },
            {
                a: {
                    text: "Dank",
                    path: "https://i.ibb.co/n3pWNXC/dank.png",
                    color: "#c5c3c6",
                    desc: "..."
                },
                b: {
                    text: "Normie",
                    path: "https://i.ibb.co/FXMrX6r/normie.png",
                    color: "#ef767a",
                    desc: "..."
                },
                param: "d",
                axisName: "...",
                axiDseesc: "..."
            },
            {
                a: {
                    text: "Political",
                    path: "https://i.ibb.co/ZxBxcnG/political.png",
                    color: "#d6a2e8",
                    desc: "..."
                },
                b: {
                    text: "Relatable",
                    path: "https://i.ibb.co/rsCbVz7/relatable.png",
                    color: "#ffeaa7",
                    desc: "..."
                },
                param: "p",
                axisName: "...",
                axisDesc: "..."
            }
        ],

        instruction:    "Choose which meme you prefer and to what degree you prefer it.",
        questions: [
            {
                imageA: "https://i.ibb.co/gvyM25W/1.jpg",
                imageB: "https://i.ibb.co/Xt3XtT3/1.jpg",
                effects: [10, 0, 0, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/fnR7jGq/1.jpg",
                imageB: "https://i.ibb.co/h1sn3hR/1.jpg",
                effects: [0, 10, 0, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/k05ZnG5/1.png",
                imageB: "https://i.ibb.co/wSdkKM4/1.jpg",
                effects: [0, 0, 10, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/F8BMPd6/1.jpg",
                imageB: "https://i.ibb.co/8ztbDgK/1.jpg",
                effects: [0, 0, 0, 10, 0]
            },
            {
                imageA: "https://i.ibb.co/q9L7kqh/1.jpg",
                imageB: "https://i.ibb.co/2gF7jwm/1.jpg",
                effects: [0, 0, 0, 0, 10]
            },
            {
                imageA: "https://i.ibb.co/F0y6q75/2.png",
                imageB: "https://i.ibb.co/DtJCc1k/2.jpg",
                effects: [10, 0, 0, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/cLVrT79/2.jpg",
                imageB: "https://i.ibb.co/dmHkBTw/2.jpg",
                effects: [0, 10, 0, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/W6CbnGQ/2.png",
                imageB: "https://i.ibb.co/9v6CrDt/2.jpg",
                effects: [0, 0, 10, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/NsqMn3D/2.png",
                imageB: "https://i.ibb.co/4856Zpd/2.jpg",
                effects: [0, 0, 0, 10, 0]
            },
            {
                imageA: "https://i.ibb.co/H2DLYzc/2.jpg",
                imageB: "https://i.ibb.co/09dJ7jb/2.jpg",
                effects: [0, 0, 0, 0, 10]
            },
            {
                imageA: "https://i.ibb.co/GHnHMK1/3.png",
                imageB: "https://i.ibb.co/9qWR4bG/3.jpg",
                effects: [10, 0, 0, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/ZBSyzfv/3.jpg",
                imageB: "https://i.ibb.co/tsLzXgh/3.jpg",
                effects: [0, 10, 0, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/Q9C2Gw6/3.png",
                imageB: "https://i.ibb.co/5Y10bvw/3.jpg",
                effects: [0, 0, 10, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/gvy25t2/3.jpg",
                imageB: "https://i.ibb.co/HVtr21N/3.jpg",
                effects: [0, 0, 0, 10, 0]
            },
            {
                imageA: "https://i.ibb.co/n0KVByt/3.jpg",
                imageB: "https://i.ibb.co/1MBMT0K/3.jpg",
                effects: [0, 0, 0, 0, 10]
            },
            {
                imageA: "https://i.ibb.co/QkGtzGc/4.jpg",
                imageB: "https://i.ibb.co/GF3CmN3/4.jpg",
                effects: [10, 0, 0, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/qRkQCF1/4.jpg",
                imageB: "https://i.ibb.co/4YgRT0x/4.jpg",
                effects: [0, 10, 0, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/jVV2FMQ/4.jpg",
                imageB: "https://i.ibb.co/nrdy8FS/4.jpg",
                effects: [0, 0, 10, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/cwPLN1W/4.png",
                imageB: "https://i.ibb.co/DQ806P5/4.jpg",
                effects: [0, 0, 0, 10, 0]
            },
            {
                imageA: "https://i.ibb.co/qBLgp7C/4.png",
                imageB: "https://i.ibb.co/NspFCnm/4.jpg",
                effects: [0, 0, 0, 0, 10]
            },
            {
                imageA: "https://i.ibb.co/N7V8NWm/5.jpg",
                imageB: "https://i.ibb.co/cF70jZH/5.jpg",
                effects: [10, 0, 0, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/bmqS0kS/5.png",
                imageB: "https://i.ibb.co/0Yvf482/5.jpg",
                effects: [0, 10, 0, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/mrnyHwZ/5.png",
                imageB: "https://i.ibb.co/6gr4jyZ/5.jpg",
                effects: [0, 0, 10, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/TkpPNwC/5.png",
                imageB: "https://i.ibb.co/NxDqPVY/5.jpg",
                effects: [0, 0, 0, 10, 0]
            },
            {
                imageA: "https://i.ibb.co/rtj6kTr/5.jpg",
                imageB: "https://i.ibb.co/4pjrGxZ/5.jpg",
                effects: [0, 0, 0, 0, 10]
            },
            {
                imageA: "https://i.ibb.co/jWz3mb6/6.png",
                imageB: "https://i.ibb.co/3RtgRbs/6.jpg",
                effects: [10, 0, 0, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/CmLgdqS/6.png",
                imageB: "https://i.ibb.co/640pTd1/6.jpg",
                effects: [0, 10, 0, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/3zsXpBp/6.jpg",
                imageB: "https://i.ibb.co/LCRM3F7/6.jpg",
                effects: [0, 0, 10, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/GkR8dPB/6.jpg",
                imageB: "https://i.ibb.co/jwnHdZH/6.jpg",
                effects: [0, 0, 0, 10, 0]
            },
            {
                imageA: "https://i.ibb.co/r0LB2bK/6.jpg",
                imageB: "https://i.ibb.co/qFJVGCC/6.jpg",
                effects: [0, 0, 0, 0, 10]
            },
            {
                imageA: "https://i.ibb.co/NVtrnhC/7.png",
                imageB: "https://i.ibb.co/ph56Knv/7.jpg",
                effects: [10, 0, 0, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/GpnHVvL/7.jpg",
                imageB: "https://i.ibb.co/gwBDRZ7/7.jpg",
                effects: [0, 10, 0, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/ZVFFjrR/7.jpg",
                imageB: "https://i.ibb.co/VJBDwr3/7.jpg",
                effects: [0, 0, 10, 0, 0]
            },
            {
                imageA: "https://i.ibb.co/ctK6LjQ/7.jpg",
                imageB: "https://i.ibb.co/fdVxysQ/7.jpg",
                effects: [0, 0, 0, 10, 0]
            },
            {
                imageA: "https://i.ibb.co/5WNK1bk/7.jpg",
                imageB: "https://i.ibb.co/Sr6Y9G2/7.jpg",
                effects: [0, 0, 0, 0, 10]
            }
        ],

        markers: [
            {
                name: "4chan",
                path: "https://i.ibb.co/pRNhM8f/4chan.png",
                scales: [
                    {
                        scale: 0,
                        bar: 0,
                        min: 0.65
                    },
                    {
                        scale: 3,
                        bar: 0,
                        min: 0.65
                    }
                ]
            },
            {
                name: "9gag",
                path: "https://i.ibb.co/bHkzpgv/9gag.png",
                scales: [
                    {
                        scale: 3,
                        bar: 1,
                        min: 0.65
                    },
                    {
                        scale: 0,
                        bar: 1,
                        min: 0.65
                    }
                ]
            },
            {
                name: "Facebook",
                path: "https://i.ibb.co/CMjLZX0/facebook.png",
                scales: [
                    {
                        scale: 3,
                        bar: 1,
                        min: 0.65
                    },
                    {
                        scale: 4,
                        bar: 1,
                        min: 0.65
                    }
                ]
            },
            {
                name: "/pol/",
                path: "https://i.ibb.co/1MK0VF6/pol.png",
                scales: [
                    {
                        scale: 0,
                        bar: 0,
                        min: 0.65
                    },
                    {
                        scale: 4,
                        bar: 0,
                        min: 0.65
                    }
                ]
            },
            {
                name: "reddit",
                path: "https://i.ibb.co/rdBFFGL/reddit.png",
                scales: [
                    {
                        scale: 1,
                        bar: 0,
                        min: 0.65
                    },
                    {
                        scale: 2,
                        bar: 1,
                        min: 0.65
                    }
                ]
            },
            {
                name: "Tumblr",
                path: "https://i.ibb.co/PQq6Qn1/tumblr.png",
                scales: [
                    {
                        scale: 0,
                        bar: 1,
                        min: 0.65
                    },
                    {
                        scale: 4,
                        bar: 1,
                        min: 0.65
                    }
                ]
            },
            {
                name: "Twitter",
                path: "https://i.ibb.co/4Ww4Zkz/twitter.png",
                scales: [
                    {
                        scale: 1,
                        bar: 1,
                        min: 0.65
                    },
                    {
                        scale: 4,
                        bar: 0,
                        min: 0.65
                    }
                ]
            }
        ]

    },
    {

        id: 3,
        
        name:           "Literature",
        description:    "Do you prefer realistic literature or fantasy? Dark or light-hearted? This test breaks down your literary taste into seven different dichotomies!",
        preamble:       "You will be asked a number of questions. These will be in the form of either a statement or a scenario. For each of these questions you should state whether you agree or disagree (broadly speaking). Please try to answer as honestly as possible.",
        results:        "Your results are displayed below:",
        
        btnClass:       "btn-3f88c5",
        
        testType:       AGREE,
        resultsType:    BARS,

        scales: [
            {
                a: {
                    text: "Minimalism",
                    path: "https://i.ibb.co/Wfq42p1/minimalism.png",
                    color: "#ebebeb",
                    desc: "Subtle prose with an economic use of words."
                },
                b: {
                    text: "Maximalism",
                    path: "https://i.ibb.co/fHzRDg6/maximalism.png",
                    color: "#d499b9",
                    desc: "Elaborate and complex prose."
                },
                param: "f",
                axisName: "Form Axis",
                axisDesc: "The level of simplicity or complexity."
            },
            {
                a: {
                    text: "Fantasy",
                    path: "https://i.ibb.co/tJ5L2Zh/fantasy.png",
                    color: "#69dc9e",
                    desc: "Imaginary worlds beyond material reality."
                },
                b: {
                    text: "Reality",
                    path: "https://i.ibb.co/b6yL6pL/reality.png",
                    color: "#fc8c8e",
                    desc: "The real and empirical world."
                },
                param: "o",
                axisName: "Ontological Axis",
                axisDesc: "The nature of reality."
            },
            {
                a: {
                    text: "Dark",
                    path: "https://i.ibb.co/S0DHLV1/dark.png",
                    color: "#6d8a96",
                    desc: "Grim and pessimistic."
                },
                b: {
                    text: "Celebratory",
                    path: "https://i.ibb.co/TcFzg38/celebratory.png",
                    color: "#fcfcb8",
                    desc: "Triumphant and optimistic."
                },
                param: "t",
                axisName: "Tone Axis",
                axisDesc: "The pervading mood and feeling."
            },
            {
                a: {
                    text: "Urban",
                    path: "https://i.ibb.co/k0Lxp8n/urban.png",
                    color: "#88abc0",
                    desc: "Set in cities and industrial regions."
                },
                b: {
                    text: "Rural",
                    path: "https://i.ibb.co/DbfJSyR/rural.png",
                    color: "#98ce96",
                    desc: "Set in organic regions and the countryside."
                },
                param: "s",
                axisName: "Setting Axis",
                axisDesc: "The setting of the story."
            },
            {
                a: {
                    text: "Moralistic",
                    path: "https://i.ibb.co/g9cj8Tt/moralistic.png",
                    color: "#d4e09b",
                    desc: "Strong message and virtues espoused."
                },
                b: {
                    text: "Satirical",
                    path: "https://i.ibb.co/GTnPf7X/satirical.png",
                    color: "#e79da3",
                    desc: "Lack of certainty, more irony."
                },
                param: "e",
                axisName: "Ethical Axis",
                axisDesc: "The approach to moral questions as well as the certainty of the story's message."
            },
            {
                a: {
                    text: "Abstract",
                    path: "https://i.ibb.co/MN872cK/abstract.png",
                    color: "#9d97d0",
                    desc: "Esoteric and experimental."
                },
                b: {
                    text: "Concrete",
                    path: "https://i.ibb.co/ZfPy3jm/concrete.png",
                    color: "#d9d1d4",
                    desc: "Straightforward and conventional."
                },
                param: "a",
                axisName: "Accessibility Axis",
                axisDesc: "The overall coherence of style and story."
            },
            {
                a: {
                    text: "Philosophical",
                    path: "https://i.ibb.co/PxV6K4q/philosophical.png",
                    color: "#b0a9a9",
                    desc: "Based around questions and pontification."
                },
                b: {
                    text: "Cozy",
                    path: "https://i.ibb.co/m6hvK64/cozy.png",
                    color: "#edb284",
                    desc: "Based mainly around the story."
                },
                param: "p",
                axisName: "Perspective Axis",
                axisDesc: "The perspective supplied by the author with regard to the purpose of the story."
            }
        ],

        instruction:    "How much do you agree/disagree with the following statement?",
        questions: [
            {
                text: "I prefer prose that is direct and straight to the point.",
                effects: [10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "It is better if a story maintains a solid and traditional struture with regard to pacing, characters, etc.",
                effects: [0, 0, 0, 0, 0, -10, 0]
            },
            {
                text: "All great artists are philosophers first and foremost.",
                effects: [0, 0, 0, 0, 0, 0, 10]
            },
            {
                text: "Literature allows us to live out our dreams.",
                effects: [0, 10, 0, 0, 0, 0, 0]
            },
            {
                text: "I prefer stories that take on the world.",
                effects: [10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "Art is most compelling when it's at its darkest.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "I'm most interested in works that invert or play around with traditional literary structures.",
                effects: [0, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "I'm interested in stories that act as a gateway to another world.",
                effects: [0, 10, 0, 0, 0, 0, 0]
            },
            {
                text: "I prefer authors who never use a long word when a short one will do.",
                effects: [10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "Works that feature clear, archetypal representations of good and evil are preferable to more philosophical texts.",
                effects: [0, 0, 0, 0, 0, 0, -10]
            },
            {
                text: "The most exciting questions relate to progress and technology in the modern world.",
                effects: [0, 0, 0, 10, 0, 0, 0]
            },
            {
                text: "I prefer stories that are set in the real world as opposed to an imaginary one.",
                effects: [0, -10, 0, 0, 0, 0, 0]
            },
            {
                text: "Literature with grandiose and dazzling prose is best.",
                effects: [10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "Literature should be optimistic about the future.",
                effects: [0, 0, -10, 0, 0, 0, 0]
            },
            {
                text: "I want the work I read to challenge me ideologically.",
                effects: [0, 0, 0, 0, 0, 0, 10]
            },
            {
                text: "I appreciate it when an author clearly puts forward a moral doctrine in his or her work.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "I'm most interested in stories that focus on the day-to-day lives of people.",
                effects: [0, -10, 0, 0, 0, 0, 0]
            },
            {
                text: "I prefer stories that have a clear and direct style and aren't experimental in structure or prose.",
                effects: [0, 0, 0, 0, 0, -10, 0]
            },
            {
                text: "I prefer it when the story takes centre stage as opposed to the author's style.",
                effects: [10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "Stories are at their best when they are inspirational or hopeful.",
                effects: [0, 0, -10, 0, 0, 0, 0]
            },
            {
                text: "The death of a beautiful woman is one of the most poetic topics in literature.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "Traditional towns provide a better backdrop than modern metropolises when it comes to analysing human nature.",
                effects: [0, 0, 0, -10, 0, 0, 0]
            },
            {
                text: "One of the primary purposes of literature should be to instill a love of life in the reader.",
                effects: [0, 0, -10, 0, 0, 0, 0]
            },
            {
                text: "Authors should focus on telling direct stories before diving into profound questions.",
                effects: [0, 0, 0, 0, 0, 0, -10]
            },
            {
                text: "Literature provides an ideal opportunity to promote healthy moral values.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "A small number of characters and settings are preferable in a story.",
                effects: [10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "I enjoy ironic and sarcastic literature.",
                effects: [0, 0, 0, 0, -10, 0, 0]
            },
            {
                text: "Stories set in the modern technological world are more compelling than those set in the old traditional world.",
                effects: [0, 0, 0, 10, 0, 0, 0]
            },
            {
                text: "I tend to prefer literature which is full of passion and life as opposed to literature that is nihilistic and dark.",
                effects: [0, 0, -10, 0, 0, 0, 0]
            },
            {
                text: "It is vital that a story should espouse strong moral virtues.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "Stories about ghouls and monsters often say a lot more about people than stories merely about humans.",
                effects: [0, 10, 0, 0, 0, 0, 0]
            },
            {
                text: "Despair is at the center of all great art.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "I gravitate towards literature that analyses the modern cosmopolitan world.",
                effects: [0, 0, 0, 10, 0, 0, 0]
            },
            {
                text: "Literature that lacks a moral message isn't very literary at all.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "I prefer authors who have unorthodox writing styles and are willing to experiment.",
                effects: [0, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "Individual lives are always more fascinating to examine than the grander picture.",
                effects: [10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "I'd rather read to explore dangerous questions than to receive comfortable answers.",
                effects: [0, 0, 0, 0, 0, 0, 10]
            },
            {
                text: "I prefer stories that feature a small and intimate cast of archetypal characters.",
                effects: [0, 0, 0, 0, 0, 0, -10]
            },
            {
                text: "I'm interested in authors who use comic prose to accurately critique dogma.",
                effects: [0, 0, 0, 0, -10, 0, 0]
            },
            {
                text: "Literature, in its purest form, is about escaping reality.",
                effects: [0, 10, 0, 0, 0, 0, 0]
            },
            {
                text: "I prefer stories set in the countryside or in small communities.",
                effects: [0, 0, 0, -10, 0, 0, 0]
            },
            {
                text: "I'd rather read stories that are comforting and attractive as opposed to challenging and harsh.",
                effects: [0, 0, 0, 0, 0, 0, -10]
            },
            {
                text: "I enjoy literature that pulls moralism apart.",
                effects: [0, 0, 0, 0, -10, 0, 0]
            },
            {
                text: "I find nature and the ecosystem more inspiring than the day-to-day lives of most people.",
                effects: [0, 0, 0, -10, 0, 0, 0]
            },
            {
                text: "Literature is best when it's as coherent as possible and lacking in pretensions.",
                effects: [0, 0, 0, 0, 0, -10, 0]
            },
            {
                text: "I prefer stories with a wide and cinematic scope.",
                effects: [10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "I'm drawn to literature that represents life in a realistic and authentic way.",
                effects: [0, -10, 0, 0, 0, 0, 0]
            },
            {
                text: "Works of great beauty are timeless and should be celebrated.",
                effects: [0, 0, -10, 0, 0, 0, 0]
            },
            {
                text: "Most great works are set in major cities or global states.",
                effects: [0, 0, 0, 10, 0, 0, 0]
            },
            {
                text: "I'm more intrigued by stories that are esoteric or cryptic.",
                effects: [0, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "I'm most interested in works that explore and advocate a coherent moral system.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "Literature allows one to escape from the meaninglessness of individual life and explore humanity in a greater picture.",
                effects: [10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "I'm drawn towards literature with a darker aesthetic.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "Art should accurately represent life in its truest form.",
                effects: [0, -10, 0, 0, 0, 0, 0]
            },
            {
                text: "I'm most attracted to literature that focuses on 'the simple life' and living in harmony with nature.",
                effects: [0, 0, 0, -10, 0, 0, 0]
            },
            {
                text: "I enjoy reading authors who raise grand metaphysical and epistemological questions.",
                effects: [0, 0, 0, 0, 0, 0, 10]
            },
            {
                text: "The greatest stories follow a clear, concise and rigid style.",
                effects: [0, 0, 0, 0, 0, -10, 0]
            },
            {
                text: "I prefer authors with a refined and lavish style as opposed to a direct one.",
                effects: [10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "I enjoy it when an author dabbles with the avant-garde.",
                effects: [0, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "Works that deal with the psychology of industrial society interest me more than those that deal with traditional and 'natural' societies.",
                effects: [0, 0, 0, 10, 0, 0, 0]
            },
            {
                text: "I'd rather read stories that are devoid of challenging or controversial material.",
                effects: [0, 0, 0, 0, 0, 0, -10]
            },
            {
                text: "Life is suffering and art should reflect this in a clear way.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "I prefer imaginative or dreamlike literature.",
                effects: [0, 10, 0, 0, 0, 0, 0]
            },
            {
                text: "One of the primary purposes of literature should be to lambast puritans and zealots.",
                effects: [0, 0, 0, 0, -10, 0, 0]
            },
            {
                text: "In literature, village life is more compelling than city life.",
                effects: [0, 0, 0, -10, 0, 0, 0]
            },
            {
                text: "There's enough magic and wonder in our own world - no need to imagine new ones.",
                effects: [0, -10, 0, 0, 0, 0, 0]
            },
            {
                text: "It's not worth reading stories unless they raise profound existential questions.",
                effects: [0, 0, 0, 0, 0, 0, -10]
            },
            {
                text: "Art is at its best when it's challenging the traditional order of its genre or field.",
                effects: [0, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "Literature is about growing old enough to read fairytales again.",
                effects: [0, 10, 0, 0, 0, 0, 0]
            },
            {
                text: "For a story to hold my attention it needs to have a solid structure and maintain archetypal consistency.",
                effects: [0, 0, 0, 0, 0, -10, 0]
            }
        ],

        markers: [
            {
                name: "Romanticism",
                path: "https://i.ibb.co/zQ6sR17/romanticism.png",
                scales: [
                    {
                        scale: 2,
                        bar: 1,
                        min: 0.65
                    },
                    {
                        scale: 3,
                        bar: 1,
                        min: 0.65
                    }
                ]
            },
            {
                name: "Realism",
                path: "https://i.ibb.co/JF3Jhr6/realism.png",
                scales: [
                    {
                        scale: 1,
                        bar: 1,
                        min: 0.65
                    },
                    {
                        scale: 4,
                        bar: 0,
                        min: 0.65
                    }
                ]
            },
            {
                name: "Gothic",
                path: "https://i.ibb.co/dPqqKyv/gothic.png",
                scales: [
                    {
                        scale: 2,
                        bar: 0,
                        min: 0.65
                    },
                    {
                        scale: 1,
                        bar: 0,
                        min: 0.65
                    }
                ]
            },
            {
                name: "Modernism",
                path: "https://i.ibb.co/RgZkrbn/modernism.png",
                scales: [
                    {
                        scale: 6,
                        bar: 0,
                        min: 0.65
                    },
                    {
                        scale: 3,
                        bar: 0,
                        min: 0.65
                    }
                ]
            },
            {
                name: "Transcendentalism",
                path: "https://i.ibb.co/kg4VRDp/transcendentalism.png",
                scales: [
                    {
                        scale: 3,
                        bar: 1,
                        min: 0.65
                    },
                    {
                        scale: 6,
                        bar: 0,
                        min: 0.65
                    }
                ]
            },
            {
                name: "Postmodernism",
                path: "https://i.ibb.co/VwQ6xzT/postmodernism.png",
                scales: [
                    {
                        scale: 4,
                        bar: 1,
                        min: 0.65
                    },
                    {
                        scale: 5,
                        bar: 0,
                        min: 0.65
                    }
                ]
            },
            {
                name: "Magical Realism",
                path: "https://i.ibb.co/fY7RFhM/magicrealism.png",
                scales: [
                    {
                        scale: 1,
                        bar: 0,
                        min: 0.65
                    },
                    {
                        scale: 5,
                        bar: 0,
                        min: 0.65
                    }
                ]
            },
            {
                name: "Crime Fiction",
                path: "https://i.ibb.co/28KWYnX/crimefiction.png",
                scales: [
                    {
                        scale: 6,
                        bar: 1,
                        min: 0.65
                    },
                    {
                        scale: 5,
                        bar: 1,
                        min: 0.65
                    }
                ]
            },
            {
                name: "Expressionism",
                path: "https://i.ibb.co/7SxvWC9/expressionism.png",
                scales: [
                    {
                        scale: 4,
                        bar: 1,
                        min: 0.65
                    },
                    {
                        scale: 5,
                        bar: 0,
                        min: 0.65
                    }
                ]
            },
            {
                name: "High Fantasy",
                path: "https://i.ibb.co/fNF260L/highfantasy.png",
                scales: [
                    {
                        scale: 1,
                        bar: 0,
                        min: 0.65
                    },
                    {
                        scale: 3,
                        bar: 1,
                        min: 0.65
                    }
                ]
            }
        ]

    },
    {

        id: 0,
        
        name:           "Philosophy",
        description:    "Find out how you stand along many philosophical dichotomies from egoism and altruism to skepticism and absolutism.",
        preamble:       "You will be asked a number of questions. These will be in the form of either a statement or a scenario. For each of these questions you should state whether you agree or disagree (broadly speaking). Please try to answer as honestly as possible.",
        results:        "Your results are displayed below:",
        
        btnClass:       "btn-a51344",
        
        testType:       AGREE,
        resultsType:    BARS,
        
        scales: [
            {
                a: {
                    text: "Materialismo",
                    path: "https://i.ibb.co/XjtG3g8/materialism.png",
                    color: "#c4eeb2",
                    desc: "Toda a realidade é física e material."
                },
                b: {
                    text: "Espiritualismo",
                    path: "https://i.ibb.co/DYZkgPV/spiritualism.png",
                    color: "#f7b9c4",
                    desc: "Parte da realidade transcende o físico e o material."
                },
                param: "m",
                axisName: "Eixo Metafísico",
                axisDesc: "Como você vê a realidade."
            },
            {
                a: {
                    text: "Individualismo",
                    path: "https://i.ibb.co/VqNpmVk/egoism.png",
                    color: "#b6a8d8",
                    desc: "O indivíduo é mais importante."
                },
                b: {
                    text: "altruísmo",
                    path: "https://i.ibb.co/6t9tygg/altruism.png",
                    color: "#fff5bf",
                    desc: "A comunidade é mais importante."
                },
                param: "e",
                axisName: "Eixo social",
                axisDesc: "Sua atitude em relação à sociedade."
            },
            {
                a: {
                    text: "Idealismo",
                    path: "https://i.ibb.co/rmTfrvq/idealism.png",
                    color: "#ffe081",
                    desc: "
                    Os princípios imutaveis são os mais importantes."
                },
                b: {
                    text: "Pragmatismo",
                    path: "https://i.ibb.co/3TSTpG5/pragmatism.png",
                    color: "#7474c7",
                    desc: "Os resultados são mais importantes."
                },
                param: "i",
                axisName: "Eixo de tomada de decisão",
                axisDesc: "Como você aborda a tomada de decisões e suas ações."
            },
            {
                a: {
                    text: "Hedonismo",
                    path: "https://i.ibb.co/YW8nMkB/hedonism.png",
                    color: "#f99ba4",
                    desc: "O prazer é intrinsecamente bom e deve ser desejado."
                },
                b: {
                    text: "Ascetismo",
                    path: "https://i.ibb.co/TmTS99G/asceticism.png",
                    color: "#9be18c",
                    desc: "A abstinência do prazer para descobrir o significado é mais importante."
                },
                param: "h",
                axisName: "Eixo da sensualidade",
                axisDesc: "Como você aborda suas indulgências."
            },
            {
                a: {
                    text: "Niilismo",
                    path: "https://i.ibb.co/PFH7jw9/nihilism.png",
                    color: "#86989c",
                    desc: "Nem significado nem moralidade são objetivos."
                },
                b: {
                    text: "Moralismo",
                    path: "https://i.ibb.co/YDWs0Mt/moralism.png",
                    color: "#fcead7",
                    desc: "Moralidade e significado são objetivos até certo ponto."
                },
                param: "n",
                axisName: "Eixo do Significado",
                axisDesc: "Se você acredita em significado objetivo."
            },
            {
                a: {
                    text: "Racionalismo",
                    path: "https://i.ibb.co/txNkzJg/rationalism.png",
                    color: "#ffd1b3",
                    desc: "Intelecto e lógica"
                },
                b: {
                    text: "Romantismo",
                    path: "https://i.ibb.co/KDKZGyQ/romanticism.png",
                    color: "#8ac5bb",
                    desc: "Paixões e coração"
                },
                param: "r",
                axisName: "Eixo Valores",
                axisDesc: "O que você mais valoriza"
            },
            {
                a: {
                    text: "Ceticismo",
                    path: "https://i.ibb.co/26FttkZ/skepticism.png",
                    color: "#a2bcd4",
                    desc: "Nunca podemos realmente saber nada com certeza"
                },
                b: {
                    text: "Absolutismo",
                    path: "https://i.ibb.co/QFVfmyr/absolutism.png",
                    color: "#ffe4bf",
                    desc: "Existem verdades objetivas que também podem ser entendidas."
                },
                param: "s",
                axisName: "Eixo Epistemológico",
                axisDesc: "Sua atitude em relação ao conhecimento."
            }
        ],

        instruction:    "Quanto você concorda / discorda da seguinte declaração?",
        questions: [
            {
                text: "Prefiro encontrar o amor verdadeiro do que ser rico.",
                effects: [-10, -5, 0, 0, 0, 0, 0]
            },
            {
                text: "Eu preferiria receber um carro caro do que salvar a vida de uma criança faminta.",
                effects: [0, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "Prefiro receber dinheiro do que presentes.",
                effects: [0, 0, -10, 0, 0, 5, 0]
            },
            {
                text: "Prefiro estar em um relacionamento sexual sem intimidade do que em um relacionamento íntimo sem sexo.",
                effects: [5, 0, 0, 10, 0, 0, 0]
            },
            {
                text: "Vida não tem significado algum.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "Um mundo sem cor é muito mais sombrio do que um mundo sem ordem.",
                effects: [0, 0, 0, 0, 0, -10, 0]
            },
            {
                text: "A sociedade sempre precisará de uma autoridade forte.",
                effects: [0, 0, 0, 0, 0, 0, -10]
            },
            {
                text: "Acredito em alguma forma de vida após a morte espiritual.",
                effects: [-10, 0, 0, 0, -5, 0, 0]
            },
            {
                text: "Se eu tivesse que escolher: eu me salvaria em vez de um ente querido.",
                effects: [0, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "Os fins geralmente justificam os meios.",
                effects: [0, 5, -10, 0, 0, 0, 0]
            },
            {
                text: "Prefiro viver uma vida de prazer pessoal a me estabelecer e ter filhos.",
                effects: [5, 5, 0, 10, 0, 0, 0]
            },
            {
                text: "A vida é sofrimento e fundamentalmente sem sentido.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "Ao tomar uma decisão, o raciocínio subjacente é sempre mais importante que as consequências.",
                effects: [0, 0, 5, 0, 0, 10, 0]
            },
            {
                text: "Afirmações extraordinárias requerem evidências extraordinárias.",
                effects: [0, 0, 0, 0, 0, 5, 10]
            },
            {
                text: "Há mais no mundo do que mero material.",
                effects: [-10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "A maioria das pessoas é inerentemente egoísta.",
                effects: [0, 10, 0, 0, 0, 0, 0]
            },
            {
                text: "Devemos lutar por uma sociedade utópica.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "Às vezes, devemos sofrer no presente, para que possamos ter um futuro melhor.",
                effects: [0, 0, -5, -10, 0, 0, 0]
            },
            {
                text: "Nenhuma ação é inerentemente moral ou imoral.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "Razão é mais importante que emoção.",
                effects: [0, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "É tolice acreditar em uma reivindicação, se não houver evidências para apoiá-la.",
                effects: [0, 0, 0, 0, 0, 5, 10]
            },
            {
                text: "Meu bem-estar mental é mais importante para mim do que bens materiais.",
                effects: [-10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "O altruísmo é uma virtude.",
                effects: [0, -10, 0, 0, 0, 0, 0]
            },
            {
                text: "Nossa sociedade é fundamentalmente falho e precisa de reformas radicais.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "Prefiro amizades que me ajudem a crescer como pessoa, em vez de amizades emocionantes.",
                effects: [0, 0, 0, -10, 0, 0, 0]
            },
            {
                text: "Existe uma moral subjacente em tudo o que fazemos.",
                effects: [0, 0, 0, 0, -10, 0, 0]
            },
            {
                text: "Sem música, a vida seria um erro.",
                effects: [0, 0, 0, 0, 0, -10, 0]
            },
            {
                text: "Existe um ser onisciente, onipotente e absoluto.",
                effects: [-5, 0, 0, 0, -5, 0, -10]
            },
            {
                text: "A consciência é imaterial.",
                effects: [-10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "Minha própria prosperidade é mais importante para mim do que a felicidade das pessoas ao meu redor.",
                effects: [0, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "Pessoas que desejam sucesso constante mudam de conduta com o tempo.",
                effects: [0, 0, -10, 0, 0, 0, 0]
            },
            {
                text: "É virtuoso viver uma vida simples sem abundância de confortos físicos.",
                effects: [-5, 0, 0, -10, -5, 0, 0]
            },
            {
                text: "Todos somos insignificantes aos olhos do universo.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "Uma sociedade sem casamento seria melhor do que uma sociedade sem divórcio.",
                effects: [0, 0, 5, 5, 5, -10, 0]
            },
            {
                text: "Nossa sociedade nos define.",
                effects: [0, 0, 0, 0, 0, 0, -10]
            },
            {
                text: "Espírito e matéria são duas entidades separadas.",
                effects: [-10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "Normalmente, coloco minha família, minha comunidade ou meu povo acima dos meus objetivos pessoais.",
                effects: [0, -10, 0, -5, 0, 0, 0]
            },
            {
                text: "A revolução às vezes é um benefício para a sociedade.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "As pessoas têm o direito de tentar alcançar o máximo de prazer possível.",
                effects: [0, 5, 0, 10, 0, 0, 0]
            },
            {
                text: "A vida é desespero.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "Educar a mente sem educar o coração não é educação.",
                effects: [0, 0, 0, 0, 0, -10, 0]
            },
            {
                text: "Os seres humanos possuem livre arbítrio.",
                effects: [0, 0, 0, 0, -5, -5, -10]
            },
            {
                text: "É bom lutar pela fama, riqueza e poder.",
                effects: [10, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "Prefiro morar sozinho no luxo do que na pobreza com amigos e familiares.",
                effects: [5, 10, 0, 0, 0, 0, 0]
            },
            {
                text: "A progressão social deve ser realizada lentamente e em pequenas etapas incrementais.",
                effects: [0, 0, -10, 0, 0, 0, 0]
            },
            {
                text: "O prazer é o bem maior.",
                effects: [0, 0, 0, 10, 0, 0, 0]
            },
            {
                text: "Eu não me importo com a moralidade.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "É tolice deixar que as emoções influenciem suas decisões. ",
                effects: [0, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "Nada pode ser provado ser verdade.",
                effects: [0, 0, -5, 0, 0, 0, 10]
            },
            {
                text: "Uma vida de fama e fortuna é mais desejável para mim do que uma vida feliz e significativa.",
                effects: [10, 5, 0, 5, 0, 0, 0]
            },
            {
                text: "Seja gentil, pois todos que você conhece estão travando uma batalha difícil.",
                effects: [0, -10, 0, 0, 0, 0, 0]
            },
            {
                text: "O mundo das idéias é superior ao mundo físico.",
                effects: [0, 0, 10, 0, 0, -5, 0]
            },
            {
                text: "É melhor viver uma vida frugal.",
                effects: [0, 0, -5, -10, 0, 0, 0]
            },
            {
                text: "Declarações morais são declarações de verdade ou fato mais do que declarações de emoção ou desejo.",
                effects: [0, 0, 0, 0, -10, 0, 0]
            },
            {
                text: "A pesquisa científica é mais importante que a arte e a música.",
                effects: [0, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "Prefiro viver em uma sociedade rica, com pouca ou nenhuma moral, do que viver em uma sociedade pobre, com moral e identidade.",
                effects: [10, 5, 0, 5, 10, 0, 0]
            },
            {
                text: "Devemos focar no bem-estar da nossa comunidade.",
                effects: [0, -10, 0, 0, 0, 0, 0]
            },
            {
                text: "Nossas idéias derivam da realidade.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "Nossa principal busca deve ser nossas próprias paixões e prazeres.",
                effects: [0, 5, 0, 10, 5, -10, 0]
            },
            {
                text: "Há uma distinção entre bom e ruim que vai além da mera natureza humana.",
                effects: [0, 0, 0, 0, -10, 0, 0]
            },
            {
                text: "O principal objetivo da humanidade é a busca do conhecimento",
                effects: [0, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "Os seres humanos possuem uma alma.",
                effects: [-10, 0, 0, 0, 0, 0, -10]
            },
            {
                text: "Os indivíduos devem sempre agir em seu próprio interesse.",
                effects: [0, 10, 0, 0, 0, 0, 0]
            },
            {
                text: "Cada pessoa tem uma função na sociedade.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "Existe uma maneira de viver que é moralmente ideal.",
                effects: [0, 0, 0, -5, -10, 0, 0]
            },
            {
                text: "Não é prudente ser afetado por fortes paixões e medos.",
                effects: [0, 0, -5, -5, 0, 10, 0]
            },
            {
                text: "O universo obedece a leis naturais e fundamentais.",
                effects: [10, 0, 5, 0, 0, 0, -10]
            },
            {
                text: "As pessoas não podem ser verdadeiramente altruístas.",
                effects: [0, 10, 0, 0, 0, 0, 0]
            },
            {
                text: "Ideais elevados, como justiça e liberdade, são de grande importância para mim.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "A autoridade deve sempre ser ridicularizada.",
                effects: [0, 0, 10, 0, 0, 0, 10]
            },
            {
                text: "Sem fé em um Deus, não podemos nos contentar.",
                effects: [-5, 0, 0, 0, -10, 0, -10]
            },
            {
                text: "A emoção não pode ser desconsiderada ao tomar decisões.",
                effects: [0, 0, 0, 0, 0, -10, 0]
            },
            {
                text: "Nós nunca podemos perceber a verdadeira realidade.",
                effects: [-10, 0, -5, 0, 0, 0, 10]
            },
            {
                text: "Devemos ajudar aqueles que estão lutando em nossa sociedade.",
                effects: [0, -10, 0, 0, 0, 0, 0]
            }
        ],

        markers: [
            {
                name: "Platonismo",
                path: "https://i.ibb.co/nbyn1gf/platonism.png",
                scales: [
                    {
                        scale: 0,
                        bar: 1,
                        min: 0.6
                    },
                    {
                        scale: 2,
                        bar: 0,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Aristotelianismo",
                path: "https://i.ibb.co/tmFbrjB/aristotelianism.png",
                scales: [
                    {
                        scale: 0,
                        bar: 0,
                        min: 0.6
                    },
                    {
                        scale: 2,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Estoicismo",
                path: "https://i.ibb.co/5WzmpWb/stoicism.png",
                scales: [
                    {
                        scale: 2,
                        bar: 1,
                        min: 0.6
                    },
                    {
                        scale: 3,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Epicurismo",
                path: "https://i.ibb.co/hRt7gWW/epicureanism.png",
                scales: [
                    {
                        scale: 1,
                        bar: 1,
                        min: 0.6
                    },
                    {
                        scale: 3,
                        bar: 0,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Objetivismo",
                path: "https://i.ibb.co/q9jRYcn/objectivism.png",
                scales: [
                    {
                        scale: 0,
                        bar: 0,
                        min: 0.6
                    },
                    {
                        scale: 1,
                        bar: 0,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Humanismo",
                path: "https://i.ibb.co/QK7s8Sw/humanism.png",
                scales: [
                    {
                        scale: 1,
                        bar: 1,
                        min: 0.6
                    },
                    {
                        scale: 5,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Hobbesianismo",
                path: "https://i.ibb.co/k90bqZY/hobbesian.png",
                scales: [
                    {
                        scale: 0,
                        bar: 0,
                        min: 0.6
                    },
                    {
                        scale: 5,
                        bar: 0,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Monoteísmo",
                path: "https://i.ibb.co/qYwgtsX/monotheism.png",
                scales: [
                    {
                        scale: 0,
                        bar: 1,
                        min: 0.6
                    },
                    {
                        scale: 4,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Nietzschianismo",
                path: "https://i.ibb.co/r4j9vqf/nietzschean.png",
                scales: [
                    {
                        scale: 4,
                        bar: 0,
                        min: 0.6
                    },
                    {
                        scale: 5,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Rousseaunismo",
                path: "https://i.ibb.co/7Kyn5vm/rousseauian.png",
                scales: [
                    {
                        scale: 1,
                        bar: 0,
                        min: 0.6
                    },
                    {
                        scale: 5,
                        bar: 1,
                        min: 0.6
                    }
                ]
            }
        ]

    },
    {
        id: 1,
        
        name:           "Economics",
        description:    "How do you think the economy should be run? Find out now and see your results displayed along multiple economic axes.",
        preamble:       "You will be asked a number of questions. These will be in the form of either a statement or a scenario. For each of these questions you should state whether you agree or disagree (broadly speaking). Please try to answer as honestly as possible.",
        results:        "Your results are displayed below:",
        
        btnClass:       "btn-5158bb",
        
        testType:       AGREE,
        resultsType:    BARS,

        scales: [
            {
                a: {
                    text: "Protectionism",
                    path: "https://i.ibb.co/2ngKX6G/protectionism.png",
                    color: "#f67681",
                    desc: "Restricted trade."
                },
                b: {
                    text: "Free Trade",
                    path: "https://i.ibb.co/BGc4Mbd/freetrade.png",
                    color: "#7bed9f",
                    desc: "Unregulated trade."
                },
                param: "f",
                axisName: "Trade Axis",
                axisDesc: "How trade should be regulated."
            },
            {
                a: {
                    text: "Inter-Dependence",
                    path: "https://i.ibb.co/6m4TM8j/interdependence.png",
                    color: "#fecdaa",
                    desc: "Global reliance."
                },
                b: {
                    text: "Autarky",
                    path: "https://i.ibb.co/p3RX7Mk/autarky.png",
                    color: "#82ccdd",
                    desc: "Self-sufficiency."
                },
                param: "a",
                axisName: "Resources Axis",
                axisDesc: "Where resources should be derived from."
            },
            {
                a: {
                    text: "Libertarianism",
                    path: "https://i.ibb.co/GWxySVV/libertarianism.png",
                    color: "#d6a2e8",
                    desc: "Less power."
                },
                b: {
                    text: "Statism",
                    path: "https://i.ibb.co/xm5LhrB/statism.png",
                    color: "#ffeaa7",
                    desc: "More power."
                },
                param: "s",
                axisName: "State Axis",
                axisDesc: "How much power the state should have."
            },
            {
                a: {
                    text: "Globalisation",
                    path: "https://i.ibb.co/k1J9xwy/globalisation.png",
                    color: "#fafac6",
                    desc: "Leave it up to the global market."
                },
                b: {
                    text: "Nationalisation",
                    path: "https://i.ibb.co/HpWskNV/nationalisation.png",
                    color: "#b7c3f3",
                    desc: "The government should institute national programmes."
                },
                param: "n",
                axisName: "Social Systems Axis",
                axisDesc: "How social systems should be setup."
            },
            {
                a: {
                    text: "Commercial",
                    path: "https://i.ibb.co/1vy4srt/commercial.png",
                    color: "#f49390",
                    desc: "Money and banking."
                },
                b: {
                    text: "Subsistence",
                    path: "https://i.ibb.co/fMgrp58/subsistence.png",
                    color: "#49beaa",
                    desc: "Agriculture and tradition."
                },
                param: "c",
                axisName: "Industry Axis",
                axisDesc: "Which industries should the economy specialise in."
            },
            {
                a: {
                    text: "Adhocracy",
                    path: "https://i.ibb.co/fYnKhQR/adhocracy.png",
                    color: "#f3c98b",
                    desc: "Completely organic market that changes sporadically."
                },
                b: {
                    text: "Bureaucracy",
                    path: "https://i.ibb.co/0nn8b5P/bureaucracy.png",
                    color: "#b8bedd",
                    desc: "Centralised administrative body that plans certain sectors."
                },
                param: "b",
                axisName: "Market Structure Axis",
                axisDesc: "How the market is arranged."
            },
            {
                a: {
                    text: "Flat Tax",
                    path: "https://i.ibb.co/86zJpyD/flattax.png",
                    color: "#c5c3c6",
                    desc: "Universal tax on all citizens, usually low."
                },
                b: {
                    text: "Progressive Tax",
                    path: "https://i.ibb.co/jHCCWh5/progressivetax.png",
                    color: "#ef767a",
                    desc: "Higher taxes, specifically on higher income citizens."
                },
                param: "p",
                axisName: "Taxation Axis",
                axisDesc: "How people should be taxed."
            }
        ],

        instruction:    "How much do you agree/disagree with the following statement?",
        questions: [
            {
                text: "The freer the market, the freer the people.",
                effects: [-10, 0, 5, 0, 0, 0, 0]
            },
            {
                text: "Self-sufficiency is vital for any economy.",
                effects: [0, -10, 0, 0, -5, 0, 0]
            },
            {
                text: "The government continuing to intervene in the economy will eventually lead to tyranny.",
                effects: [0, 0, 10, 0, 0, 5, 0]
            },
            {
                text: "Providing national basic income is a realistic and desirable goal.",
                effects: [0, 0, 0, -10, 5, 0, 0]
            },
            {
                text: "There should be little to no industrialisation in the economy.",
                effects: [0, 0, 5, 0, -10, 0, 0]
            },
            {
                text: "The state should initiate price controls on various goods.",
                effects: [0, 0, -5, 0, 0, -10, 0]
            },
            {
                text: "A progressive income tax is good for the economy.",
                effects: [0, 0, 0, 0, 0, -5, -10]
            },
            {
                text: "Strong tariffs are necessary in a sovereign state.",
                effects: [10, -5, 0, 0, 0, 0, 0]
            },
            {
                text: "A country should be self-sufficient when it comes to providing basic needs such as food and water",
                effects: [0, -10, 0, 0, -5, 0, 0]
            },
            {
                text: "Economic intervention is needed in order to ensure income equality.",
                effects: [0, 0, -10, 0, 0, -5, 0]
            },
            {
                text: "National work programmes which ensure employment are practical and feasible.",
                effects: [0, 0, 0, -10, -5, 0, 0]
            },
            {
                text: "The economy should be based around agriculture and natural resources.",
                effects: [0, -5, 0, 0, -10, 0, 0]
            },
            {
                text: "Long term, multiyear plans are important initiatives for the state economy.",
                effects: [0, 0, -5, 0, 0, -10, 0]
            },
            {
                text: "Luxury goods should be highly taxed.",
                effects: [0, 0, -5, 0, 0, 0, -10]
            },
            {
                text: "Goods produced within the country should recieve subsidies to help them out-compete foreign goods.",
                effects: [10, -5, 0, 0, 0, 0, 0]
            },
            {
                text: "There should exist self-sufficient local cooperatives within the economy.",
                effects: [0, -10, 0, 0, 0, -5, 0]
            },
            {
                text: "The state should have the ability to harshly punish negative forces in the economy.",
                effects: [0, 0, -10, 0, 0, 0, -5]
            },
            {
                text: "Nationalised education and healthcare systems are of great importance in a strong society.",
                effects: [0, 0, 0, -10, 0, -5, 0]
            },
            {
                text: "Our economic order should be directly linked to ecology.",
                effects: [0, -5, 0, 0, -10, 0, 0]
            },
            {
                text: "It is best if the state's economic policies are flexible and can be changed to suit the current situation.",
                effects: [-5, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "Corporate taxes should be increased.",
                effects: [0, 0, 0, 0, 0, -5, -10]
            },
            {
                text: "The issuing of national patents is good for the economy.",
                effects: [10, 0, 0, -5, 0, 0, 0]
            },
            {
                text: "It is damaging to the economy to be reliant on foreign countries.",
                effects: [0, -10, 0, 0, -5, 0, 0]
            },
            {
                text: "The state has no right to interfere in the private affairs of individuals.",
                effects: [0, 0, 10, 0, 0, 5, 0]
            },
            {
                text: "Railways and other transport systems should be nationalised.",
                effects: [0, 0, -5, -10, 0, 0, 0]
            },
            {
                text: "Nations are better off having an organic economy that is tied to nature.",
                effects: [0, -5, 0, 0, -10, 0, 0]
            },
            {
                text: "State intervention in the economy almost always results in catastrophe.",
                effects: [0, 0, 5, 0, 0, 10, 0]
            },
            {
                text: "Tax cuts are necessary in order to maintain a prosperous economy.",
                effects: [0, 0, 0, 0, 0, 5, 10]
            },
            {
                text: "Trade restrictions and import taxes are good.",
                effects: [10, 0, 0, -5, 0, 0, 0]
            },
            {
                text: "Small-scale, free initiatives should be promoted within the country.",
                effects: [0, -10, 0, 0, -5, 0, 0]
            },
            {
                text: "A planned economy is best.",
                effects: [0, 0, -10, 0, 0, -5, 0]
            },
            {
                text: "It is better to have a nationalised banking system.",
                effects: [0, 0, 0, -10, 0, -5, 0]
            },
            {
                text: "An economy should be founded on competition and consumption.",
                effects: [0, 0, 0, 0, 10, 5, 0]
            },
            {
                text: "The bigger the government the better.",
                effects: [0, 0, -5, 0, 0, -10, 0]
            },
            {
                text: "Aside from funding necessary public programmes (the police force, etc) taxation should be as limited as possible.",
                effects: [0, 0, 5, 0, 0, 0, 10]
            },
            {
                text: "Trade distorting policies don't work.",
                effects: [-10, 0, 5, 0, 0, 0, 0]
            },
            {
                text: "It is better if the state receives significant support from foreign countries and corporations.",
                effects: [0, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "It is better if private businesses are left to their own devices.",
                effects: [0, 0, 10, 0, 0, 0, 5]
            },
            {
                text: "Multinational corporations are more efficient than publically-funded systems.",
                effects: [0, 0, 5, 10, 0, 0, 0]
            },
            {
                text: "Economies need to industrialise and modernise in order to flourish.",
                effects: [-5, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "A functioning economy will always need to have a complex set of rules and guidelines kept in place.",
                effects: [0, 0, 0, 0, 0, -10, -5]
            },
            {
                text: "Higher income households should be expected to pay a higher income tax.",
                effects: [0, 0, 0, 0, 0, -5, -10]
            },
            {
                text: "Unregulated access to foreign markets is a good thing.",
                effects: [-10, 0, 5, 0, 0, 0, 0]
            },
            {
                text: "Economic powers such as the EU should provide support to struggling countries.",
                effects: [0, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "Every intervention in the economy is a potential threat to individual liberty.",
                effects: [0, 0, 10, 0, 0, 5, 0]
            },
            {
                text: "Foreign businesses should be encouraged to reside wherever they like.",
                effects: [0, 0, 0, 10, 0, 5, 0]
            },
            {
                text: "An economy that utilises foraging techniques, such as hunting and gathering, is preferable.",
                effects: [0, 0, -5, 0, -10, 0, 0]
            },
            {
                text: "The economy should be organised organically, devoid of planning and rules.",
                effects: [0, 0, 5, 0, 0, 10, 0]
            },
            {
                text: "We should increase taxes so that we can fund better social systems.",
                effects: [0, 0, 0, 0, 0, -5, -10]
            },
            {
                text: "Trade should be heavily regulated.",
                effects: [10, -5, 0, 0, 0, 0, 0]
            },
            {
                text: "Ideally, states should depend on and support each other.",
                effects: [0, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "Statist dreams of utopia are one of the biggest threats to economic prosperity.",
                effects: [0, 0, 10, 0, 0, 5, 0]
            },
            {
                text: "We're better off with a modern, globalised economy.",
                effects: [0, 0, 0, 10, 5, 0, 0]
            },
            {
                text: "Monetary value or currency is at the core of any functioning economy.",
                effects: [0, 0, 0, 0, 10, 5, 0]
            },
            {
                text: "An economic structure should be fluid, lacking in formalisation, paperwork and rules.",
                effects: [0, 0, 0, 0, -5, 10, 0]
            },
            {
                text: "All citizens should pay taxes at the same rate.",
                effects: [0, 0, 5, 0, 0, 0, 10]
            },
            {
                text: "Overall, protectionism has had a net negative effect on economies.",
                effects: [-10, 0, 0, 5, 0, 0, 0]
            },
            {
                text: "Economies should support each other and promote inter-dependence.",
                effects: [0, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "The economy should obey the state; never the other way around.",
                effects: [0, 0, -10, 0, -5, 0, 0]
            },
            {
                text: "Globalisation is inevitable and for the better.",
                effects: [0, 0, 0, 10, 5, 0, 0]
            },
            {
                text: "We should promote commercial lifestyles of profit and usury.",
                effects: [0, 0, 5, 0, 10, 0, 0]
            },
            {
                text: "Strong public administration is needed in order to uphold the law, maximise efficiency and prevent favoritism.",
                effects: [0, 0, 0, 0, 0, -10, -5]
            },
            {
                text: "Taxpayers shouldn't be expected to fund expensive social systems.",
                effects: [0, 0, 5, 0, 0, 0, 10]
            },
            {
                text: "The government should have major control over the economic ins and outs of the country.",
                effects: [10, -5, 0, 0, 0, 0, 0]
            },
            {
                text: "For an economy to function the state needs to have significant control over it.",
                effects: [0, 0, -10, 0, 0, 0, -5]
            },
            {
                text: "We should strive towards a universal, global economy.",
                effects: [0, 0, 0, 10, 5, 0, 0]
            },
            {
                text: "Bureacracy is needed so that law, order and a functioning economy can be maintained.",
                effects: [0, 0, -5, 0, 0, -10, 0]
            },
            {
                text: "Specialised teams should run different aspects of the economy as opposed to a single bureaucratic body.",
                effects: [0, 0, 5, 0, 0, 10, 0]
            }
        ],

        markers: [
            {
                name: "Keynesian",
                path: "https://i.ibb.co/rt9TzqQ/keynesian.png",
                scales: [
                    {
                        scale: 6,
                        bar: 0,
                        min: 0.7
                    },
                    {
                        scale: 5,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Austrian School",
                path: "https://i.ibb.co/7p9CLBx/austrianschool.png",
                scales: [
                    {
                        scale: 0,
                        bar: 1,
                        min: 0.7
                    },
                    {
                        scale: 2,
                        bar: 0,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Marxism",
                path: "https://i.ibb.co/wgNNFsm/marxism.png",
                scales: [
                    {
                        scale: 2,
                        bar: 1,
                        min: 0.7
                    },
                    {
                        scale: 3,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Mercantilism",
                path: "https://i.ibb.co/XLx6nvV/mercantilism.png",
                scales: [
                    {
                        scale: 0,
                        bar: 0,
                        min: 0.7
                    },
                    {
                        scale: 4,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Chicago School",
                path: "https://i.ibb.co/9ZTRKLx/chicagoschool.png",
                scales: [
                    {
                        scale: 2,
                        bar: 0,
                        min: 0.7
                    },
                    {
                        scale: 4,
                        bar: 0,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Distributism",
                path: "https://i.ibb.co/XxPKsvB/distributism.png",
                scales: [
                    {
                        scale: 4,
                        bar: 1,
                        min: 0.7
                    },
                    {
                        scale: 2,
                        bar: 0,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Fascism",
                path: "https://i.ibb.co/px4x1HQ/fascism.png",
                scales: [
                    {
                        scale: 1,
                        bar: 1,
                        min: 0.7
                    },
                    {
                        scale: 3,
                        bar: 1,
                        min: 0.6
                    }
                ]
            }
        ]

    },
    {

        id: 2,

        name: "Personality Compass",
        description: "Find out where you land on our personality compass. This test will measure four key personality traits along two dichotomic axes.",
        preamble: "You will be asked a number of questions. These will be in the form of a statement. For each of these questions you should state whether you agree or disagree (broadly speaking). Please try to answer as honestly as possible.",
        results: "Your results are displayed below:",

        btnClass: "btn-e2711d",

        testType: AGREE,
        resultsType: COMPASS,

        scales: [
            {
                a: {
                    text: "Reasonable",
                    path: "",
                    color: "#d9d2ed",
                    //color: "#f7a9a8",
                    desc: "Stable and conventional."
                },
                b: {
                    text: "Sentimental",
                    path: "",
                    color: "#fff2cf",
                    //color: "#d8d4f2",
                    desc: "Emotional and creative."
                },
                param: "h",
                axisName: "Emotional Axis",
                axisDesc: "How open you are to passion and how you are influenced by it."
            },
            {
                a: {
                    text: "Assertive",
                    path: "",
                    color: "#cfe2f8",
                    //color: "#b8e1ff",
                    desc: "Disagreeable and conscientious."
                },
                b: {
                    text: "Deferential",
                    path: "",
                    color: "#d9ead8",
                    //color: "#beef9e",
                    desc: "Agreeable and indifferent."
                },
                param: "v",
                axisName: "Exacting Axis",
                axisDesc: "How competitive and diligent you are."
            }
        ],

        instruction: "How much do you agree/disagree with the following statement?",
        questions: [
            {
                text: "I'm quite an imaginative person.",
                effects: [10, 0]
            },
            {
                text: "I get stressed quite easily.",
                effects: [10, 0]
            },
            {
                text: "I get irritated easily.",
                effects: [0, 10]
            },
            {
                text: "I keep my home/office very clean.",
                effects: [0, 10]
            },
            {
                text: "I'm not very artistic or creative.",
                effects: [-10, 0]
            },
            {
                text: "I am usually relaxed.",
                effects: [-10, 0]
            },
            {
                text: "I rarely hold grudges against others.",
                effects: [0, -10]
            },
            {
                text: "I do the smallest amount work needed to get by.",
                effects: [0, -10]
            },
            {
                text: "I have an interest in art, such as music, literature or paintings.",
                effects: [10, 0]
            },
            {
                text: "I have frequent mood swings.",
                effects: [10, 0]
            },
            {
                text: "People sometimes tell me that I'm too judgemental of others.",
                effects: [0, 10]
            },
            {
                text: "I don't let impulses interfere with my behaviour.",
                effects: [0, 10]
            },
            {
                text: "Museums and art galleries bore me.",
                effects: [-10, 0]
            },
            {
                text: "I rarely feel down.",
                effects: [-10, 0]
            },
            {
                text: "I'm quick to forgive others.",
                effects: [0, -10]
            },
            {
                text: "I'm a very impulsive person.",
                effects: [0, -10]
            },
            {
                text: "I like eccentric and unconventional people.",
                effects: [10, 0]
            },
            {
                text: "I often worry about the little things.",
                effects: [10, 0]
            },
            {
                text: "I have a quick temper.",
                effects: [0, 10]
            },
            {
                text: "I follow a schedule and plan ahead.",
                effects: [0, 10]
            },
            {
                text: "I find discussions about philosophy to be quite boring.",
                effects: [-10, 0]
            },
            {
                text: "I'm not too concerned with others' feelings.",
                effects: [-10, 0]
            },
            {
                text: "I'm quite tolerant when it comes to judging others.",
                effects: [0, -10]
            },
            {
                text: "I have a messy room/desk.",
                effects: [0, -10]
            },
            {
                text: "I enjoy looking at atlases or maps of the world.",
                effects: [10, 0]
            },
            {
                text: "I sympathise with other people's feelings.",
                effects: [10, 0]
            },
            {
                text: "I often get into arguments when people tell me I'm wrong.",
                effects: [0, 10]
            },
            {
                text: "I'm a perfectionist.",
                effects: [0, 10]
            },
            {
                text: "I don't have much of an imagination.",
                effects: [-10, 0]
            },
            {
                text: "I don't mind dangerous jobs or activities.",
                effects: [-10, 0]
            },
            {
                text: "I rarely get angry.",
                effects: [0, -10]
            },
            {
                text: "Sometimes I have difficulty working due to being disorganised.",
                effects: [0, -10]
            },
            {
                text: "I enjoy learning about the histories and cultures of other countries.",
                effects: [10, 0]
            },
            {
                text: "I am very fearful when it comes to dangerous situations.",
                effects: [10, 0]
            },
            {
                text: "I'm very stubborn.",
                effects: [0, 10]
            },
            {
                text: "I pay close attention to minor details.",
                effects: [0, 10]
            },
            {
                text: "I wouldn't enjoy reading through an encylopedia.",
                effects: [-10, 0]
            },
            {
                text: "I'm less sentimental than most people.",
                effects: [-10, 0]
            },
            {
                text: "I try to be positive, even when people mess up.",
                effects: [0, -10]
            },
            {
                text: "I forget to put things back in their proper place.",
                effects: [0, -10]
            },
            {
                text: "I have lots of good ideas.",
                effects: [10, 0]
            },
            {
                text: "I often feel down.",
                effects: [10, 0]
            },
            {
                text: "I find it difficult to compromise with others when I'm sure I'm right.",
                effects: [0, 10]
            },
            {
                text: "I'm very driven when it comes to achieving goals.",
                effects: [0, 10]
            },
            {
                text: "I'm not as inquisitive as most people.",
                effects: [-10, 0]
            },
            {
                text: "I rarely worry about things.",
                effects: [-10, 0]
            },
            {
                text: "When others disagree with me I can be flexible in my opinions.",
                effects: [0, -10]
            },
            {
                text: "I often neglect my duties.",
                effects: [0, -10]
            },
        ],

        markers: []

    }
];
