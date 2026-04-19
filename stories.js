const storyData = {
    interactive: {
        space: {
            title: "Space Numbers",
            emoji: "🚀",
            startNode: "start",
            nodes: {
                start: { text: "Pip is ready! Fly to the Moon or Milky Way?", options: [{ text: "Moon 🌙", next: "moon" }, { text: "Milky Way ✨", next: "milkyWay" }] },
                moon: { text: "On the Moon! Need fuel or a snack?", options: [{ text: "Fuel ⛽", next: "fuel" }, { text: "Snack 🥨", next: "snack" }] },
                milkyWay: { text: "See comets! Blue or pink?", options: [{ text: "Blue ☄️", next: "blueComet" }, { text: "Pink ☄️", next: "pinkComet" }] },
                fuel: { text: "To Saturn! Four rocks found! End.", options: [{ text: "Again 🔁", next: "start" }] },
                snack: { text: "A space pretzel! Five whales! End.", options: [{ text: "Again 🔁", next: "start" }] },
                blueComet: { text: "Ice cream planet! Two robots! End.", options: [{ text: "Again 🔁", next: "start" }] },
                pinkComet: { text: "Pink nebula! Six dolphins! End.", options: [{ text: "Again 🔁", next: "start" }] }
            }
        },
        butterfly: { title: "Rainbow Butterfly", emoji: "🦋", startNode: "start", nodes: { start: { text: "Fly to Red Rose or Blue Bell?", options: [{ text: "Red 🌹", next: "red" }, { text: "Blue 🔔", next: "blue" }] }, red: { text: "A ladybug with spots! Play or fly?", options: [{ text: "Play 🐞", next: "play" }, { text: "More 🌈", next: "more" }] }, blue: { text: "A blue jay! Dance or hide?", options: [{ text: "Dance 🐦", next: "dance" }, { text: "Hide 🍃", next: "hide" }] }, play: { text: "Friends forever! End.", options: [{ text: "Again 🔁", next: "start" }] }, more: { text: "Found all colors! End.", options: [{ text: "Again 🔁", next: "start" }] }, dance: { text: "Beautiful dance! End.", options: [{ text: "Again 🔁", next: "start" }] }, hide: { text: "Cozy nap. End.", options: [{ text: "Again 🔁", next: "start" }] } } },
        firetruck: { title: "Brave Freddy", emoji: "🚒", startNode: "start", nodes: { start: { text: "Cat stuck! Use ladder or backup?", options: [{ text: "Ladder 🪜", next: "ladder" }, { text: "Backup 📟", next: "backup" }] }, ladder: { text: "Cat is scared or happy?", options: [{ text: "Scared 🙀", next: "scaredCat" }, { text: "Happy 😸", next: "happyCat" }] }, backup: { text: "Hold the net or guide down?", options: [{ text: "Net 🕸️", next: "net" }, { text: "Guide 🧶", next: "guide" }] }, scaredCat: { text: "All safe! End.", options: [{ text: "Again 🔁", next: "start" }] }, happyCat: { text: "High five! End.", options: [{ text: "Again 🔁", next: "start" }] }, net: { text: "Safe land! End.", options: [{ text: "Again 🔁", next: "start" }] }, guide: { text: "Hero! End.", options: [{ text: "Again 🔁", next: "start" }] } } },
        dino: { title: "Dino's Day", emoji: "🦕", startNode: "start", nodes: { start: { text: "Hungry! Tall tree or small bush?", options: [{ text: "Tall 🌳", next: "tall" }, { text: "Small 🫐", next: "small" }] }, tall: { text: "Pterodactyls! Share or race?", options: [{ text: "Share 🥗", next: "share" }, { text: "Race 🌋", next: "race" }] }, small: { text: "Triceratops! River or cave?", options: [{ text: "River 🌊", next: "river" }, { text: "Cave ⛰️", next: "cave" }] }, share: { text: "Full and happy! End.", options: [{ text: "Again 🔁", next: "start" }] }, race: { text: "The fastest! End.", options: [{ text: "Again 🔁", next: "start" }] }, river: { text: "Splish splash! End.", options: [{ text: "Again 🔁", next: "start" }] }, cave: { text: "Starry cave. End.", options: [{ text: "Again 🔁", next: "start" }] } } },
        forest: { title: "Sleepy Mystery", emoji: "🦉", startNode: "start", nodes: { start: { text: "Strange sound! Willows or Lake?", options: [{ text: "Willows 🍃", next: "willows" }, { text: "Lake 💧", next: "lake" }] }, willows: { text: "Treasure! Dig roots or check trunk?", options: [{ text: "Dig 🥔", next: "dig" }, { text: "Trunk 🪵", next: "check" }] }, lake: { text: "Frog with banjo! Sing or ask?", options: [{ text: "Sing 🎤", next: "sing" }, { text: "Ask 🐸", next: "ask" }] }, dig: { text: "Golden acorns! End.", options: [{ text: "Again 🔁", next: "start" }] }, check: { text: "Kittens found! End.", options: [{ text: "Again 🔁", next: "start" }] }, sing: { text: "Grand concert! End.", options: [{ text: "Again 🔁", next: "start" }] }, ask: { text: "A sneezing firefly! End.", options: [{ text: "Again 🔁", next: "start" }] } } },
        robot: { title: "Robbie's Quest", emoji: "🤖", startNode: "start", nodes: { start: { text: "Charging time! Left (Maze) or Right (Factory)?", options: [{ text: "Left ⬅️", next: "left" }, { text: "Right ➡️", next: "right" }] }, left: { text: "Maze! Squares or circles?", options: [{ text: "Squares 🟦", next: "square" }, { text: "Circles 🟡", next: "circle" }] }, right: { text: "Factory! Red or Green button?", options: [{ text: "Red 🔴", next: "redBtn" }, { text: "Green 🟢", next: "greenBtn" }] }, square: { text: "Charged up! End.", options: [{ text: "Again 🔁", next: "start" }] }, circle: { text: "Ball pit fun! End.", options: [{ text: "Again 🔁", next: "start" }] }, redBtn: { text: "Spinning dizzy! End.", options: [{ text: "Again 🔁", next: "start" }] }, greenBtn: { text: "New robot dog! End.", options: [{ text: "Again 🔁", next: "start" }] } } },
        garden: { title: "Emma's Garden", emoji: "🌻", startNode: "start", nodes: { start: { text: "Magic seeds! Sunlight or Shade?", options: [{ text: "Sun ☀️", next: "sun" }, { text: "Shade ☁️", next: "shade" }] }, sun: { text: "Huge flowers! Neighbor or move alone?", options: [{ text: "Neighbor 👫", next: "neighbor" }, { text: "Alone 💪", next: "alone" }] }, shade: { text: "Mushrooms! Fairy or Bunny?", options: [{ text: "Fairy 🧚", next: "fairy" }, { text: "Bunny 🐰", next: "bunny" }] }, neighbor: { text: "Shared beauty! End.", options: [{ text: "Again 🔁", next: "start" }] }, alone: { text: "Flower princess! End.", options: [{ text: "Again 🔁", next: "start" }] }, fairy: { text: "Floating tea party! End.", options: [{ text: "Again 🔁", next: "start" }] }, bunny: { text: "Hopping fun! End.", options: [{ text: "Again 🔁", next: "start" }] } } },
        bee: { title: "Barnaby Bee", emoji: "🐝", startNode: "start", nodes: { start: { text: "Collect nectar! Daisies or Sunflowers?", options: [{ text: "Daisies 🌼", next: "daisies" }, { text: "Hill 🌻", next: "sunflower" }] }, daisies: { text: "Grumpy spider! Share or fly?", options: [{ text: "Share 🍯", next: "share" }, { text: "Fly 💨", next: "fly" }] }, sunflower: { text: "Bird bath! Sip or work?", options: [{ text: "Sip 💧", next: "sip" }, { text: "Work 💪", next: "work" }] }, share: { text: "New hive! End.", options: [{ text: "Again 🔁", next: "start" }] }, fly: { text: "Rare flowers found! End.", options: [{ text: "Again 🔁", next: "start" }] }, sip: { text: "Double honey! End.", options: [{ text: "Again 🔁", next: "start" }] }, work: { text: "Queen Bee crown! End.", options: [{ text: "Again 🔁", next: "start" }] } } },
        polar: { title: "Paul the Polar Bear", emoji: "🐻‍❄️", startNode: "start", nodes: { start: { text: "Making ice cream! Fish or Strawberry?", options: [{ text: "Fish 🐟", next: "fish" }, { text: "Berry 🍓", next: "berry" }] }, fish: { text: "Seal visits! Like it or sprays sprinkles?", options: [{ text: "Like 👍", next: "like" }, { text: "Sprinkles ✨", next: "sprinkles" }] }, berry: { text: "Need more! Caves or Peak?", options: [{ text: "Caves ❄️", next: "caves" }, { text: "Peak 🏔️", next: "peak" }] }, like: { text: "Artic feast! End.", options: [{ text: "Again 🔁", next: "start" }] }, sprinkles: { text: "Magical dessert! End.", options: [{ text: "Again 🔁", next: "start" }] }, caves: { text: "Magic berries found! End.", options: [{ text: "Again 🔁", next: "start" }] }, peak: { text: "Infinite bucket! End.", options: [{ text: "Again 🔁", next: "start" }] } } },
        detective: { title: "Detective Daisy", emoji: "🕵️‍♀️", startNode: "start", nodes: { start: { text: "Cookie missing! Sandbox or Garden?", options: [{ text: "Sandbox 🏖️", next: "sandbox" }, { text: "Garden 🥦", next: "kitchen" }] }, sandbox: { text: "Paw print! Rex or Whiskers?", options: [{ text: "Rex 🐕", next: "rex" }, { text: "Whiskers 🐈", next: "whiskers" }] }, kitchen: { text: "Chocolate trail! Table or Flour bag?", options: [{ text: "Table 🪑", next: "table" }, { text: "Flour 🥡", next: "flour" }] }, rex: { text: "A squirrel thief! End.", options: [{ text: "Again 🔁", next: "start" }] }, whiskers: { text: "Kitten hug! End.", options: [{ text: "Again 🔁", next: "start" }] }, table: { text: "Little brother shared! End.", options: [{ text: "Again 🔁", next: "start" }] }, flour: { text: "Mouse party! End.", options: [{ text: "Again 🔁", next: "start" }] } } },
        meadow: { title: "Molly's Concert", emoji: "🎻", startNode: "start", nodes: { start: { text: "Concert ready! Flute or Drums?", options: [{ text: "Flute 🪈", next: "flute" }, { text: "Drums 🥁", next: "drums" }] }, flute: { text: "Birds sing! Fast or slow?", options: [{ text: "Fast ⏩", next: "fast" }, { text: "Slow ⏪", next: "slow" }] }, drums: { text: "Bears dance! Loud or quiet?", options: [{ text: "Loud 🔊", next: "loud" }, { text: "Quiet 🔉", next: "quiet" }] }, fast: { text: "Dancing fun! End.", options: [{ text: "Again 🔁", next: "start" }] }, slow: { text: "Peaceful sleep. End.", options: [{ text: "Again 🔁", next: "start" }] }, loud: { text: "Whole valley party! End.", options: [{ text: "Again 🔁", next: "start" }] }, quiet: { text: "Secret insect show. End.", options: [{ text: "Again 🔁", next: "start" }] } } }
    },
    books: {
        colors: {
            title: "Safari Colors",
            emoji: "🎨",
            pages: [
                { img: "red_apple_kid_book_1774105895260.png", text: "I see a Red Apple! 🍎" },
                { img: "blue_bird_kid_book_1774105930731.png", text: "Look! A Blue Bird! 🐦" },
                { img: "yellow_sun_kid_book_1774105988310.png", text: "The Sun is Yellow! ☀️" }
            ]
        },
        sleepyFarm: {
            title: "Sleepy Farm",
            emoji: "🚜",
            pages: [
                { emoji: "🐄", text: "The cow is sleeping... Shh! 🤫" },
                { emoji: "🐷", text: "The pig is sleeping in the hay! 💤" },
                { emoji: "🐥", text: "The duck is sleeping on the pond! 🦆" }
            ]
        },
        oceanFriends: {
            title: "Ocean Friends",
            emoji: "🌊",
            pages: [
                { emoji: "🦈", text: "The shark is smiling! Hello! 👋" },
                { emoji: "🐙", text: "The octopus has many arms! 🐙" },
                { emoji: "🐳", text: "The whale says splash! 💦" }
            ]
        }
    }
};
