function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ').sort();
  var magWords = {};
  magazineArr.map(word => {
    if (!magWords[word]) magWords[word] = 1;
    else magWords[word]++;
  })
  console.log(magWords)
  noteArr.map(word => {
    console.log(`${word}: ${magWords[word]}`);
    if (magWords[word] > 0) {
      magWords[word] = magWords[word] - 1;
      enoughWords = true;
    }
    else return enoughWords = false;
  });
  console.log('enough words is: ', enoughWords);
}

harmlessRansomNote('puerto secret secret', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the  places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');