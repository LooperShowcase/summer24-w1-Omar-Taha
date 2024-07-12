
const Imagesdiv = document.getElementById("images");
console.log(Imagesdiv);
let id = (Math.random() *6 +1) *10000
id = Math.floor(id)
const fakeImg = "https://thispersondoesnotexist.com/"
const realimg = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`

const rnd= Math.random()>0.5
const arr = [rnd,!rnd]
const resultdiv = document.getElementById('result')
const again = document.createElement("button")
again.innerText = 'Play Again'
again.onclick = function(){
    location.reload()
}

for(const x of arr)
{
    const i1 = document.createElement("img");
    i1.src = (x ? realimg : fakeImg);
    Imagesdiv.append(i1)     
    

    i1.onclick = function() {
      resultdiv.innerText = x ? 'correct 😊' : 'not correct 😢'
      Imagesdiv.style.pointerEvents = 'none'
      resultdiv.append(again)
    }

}