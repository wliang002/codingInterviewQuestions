// Complete the checkMagazine function below.
// repeating elements yes
function checkMagazine (magazine, note) {
  let magMap = new Object()
  magazine.forEach(element => {
    if (magMap[element]) {
      magMap[element] = magMap[element] + 1
    } else {
      magMap[element] = 1
    }
  })

  for (let i = 0; i < note.length; i++) {
    if (!magMap[note[i]] || magMap[note[i]] < 1) {
      console.log('No')
      return
    } else {
        magMap[note[i]] = magMap[note[i]] - 1   
    }
  }
  console.log('Yes')
}

var mag = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts','ive','got','got']
var note = ['ive', 'got', 'some', 'coconuts']

var mag1 = ['give', 'me', 'one', 'grand', 'today', 'night']
var note1 = ['give', 'one', 'grand', 'today']
console.log(checkMagazine(mag, note))
console.log(checkMagazine(mag1, note1))
