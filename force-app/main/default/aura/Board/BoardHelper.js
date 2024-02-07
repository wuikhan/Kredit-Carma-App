({
  getWords: function (count) {
    if (count > 100) return;
    // built an array
    let wordArray = [
      "ski",
      "switch",
      "boorish",
      "jelly",
      "rice",
      "zippy",
      "precious",
      "political",
      "throne",
      "tedious",
      "better",
      "sneeze",
      "erratic",
      "hair",
      "improve",
      "special",
      "ice",
      "witty",
      "bite-sized",
      "greedy",
      "ancient",
      "church",
      "fence",
      "powerful",
      "melodic",
      "omniscient",
      "thin",
      "vast",
      "utopian",
      "touch",
      "shade",
      "wrong",
      "mourn",
      "telling",
      "grape",
      "hot",
      "holistic",
      "mug",
      "old",
      "root",
      "science",
      "school",
      "equal",
      "steel",
      "kaput",
      "actually",
      "berserk",
      "satisfy",
      "roll",
      "knotty",
      "jealous",
      "walk",
      "label",
      "acid",
      "tasteful",
      "sin",
      "van",
      "reminiscent",
      "attend",
      "lazy",
      "roomy",
      "bury",
      "charge",
      "vague",
      "sheep",
      "sincere",
      "furniture",
      "harm",
      "soft",
      "incandescent",
      "try",
      "inject",
      "cream",
      "colossal",
      "teeth",
      "mighty",
      "help",
      "decision",
      "temper",
      "goofy",
      "rush",
      "fumbling",
      "brave",
      "sulky",
      "rob",
      "steady",
      "far-flung",
      "aunt",
      "cry",
      "encourage",
      "ocean",
      "bear",
      "whispering",
      "supreme",
      "busy",
      "cover",
      "scrape",
      "grate",
      "private",
      "seashore"
    ];
    // randomize the word array
    wordArray = this.randomizeArray(wordArray);
    // open = false property
 const  wordObjArray =    wordArray.map(element => {
      return {word : element, open : false}
    })
    // return the requested words
    return wordObjArray.slice(0, count);
  },
  randomizeArray: function (arr) {
    const randomArr = arr;
    // randomize the array
    for (let i = randomArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = randomArr[i];
      randomArr[i] = randomArr[j];
      randomArr[j] = temp;
    }
    return randomArr;
  },
  getWinWord: function (arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex].word;
  },
  disableBoard: function (component) {
    component.set("v.boardDisabled", true);
  },
  enableBoard: function (component) {
    component.set("v.boardDisabled", false);
  },
  resetBoard: function(component) {
    this.enableBoard(component);
    //reset the counter
    component.set("v.clickCount", 0);
    //reet the result
    component.set("v.result","");
  },

  fireResultEvent : function (resultValue) {
    const appEvent = $A.get("e.c:ResultApplicationEvent");
    appEvent.setParams({result : resultValue});
    appEvent.fire();
  }
});