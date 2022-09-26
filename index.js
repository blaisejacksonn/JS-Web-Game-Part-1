newImage('green-character.gif', 100, 100)

// adding pine tree
newImage('pine-tree.png', 450, 200)
newImage('tree.png',200, 300 )
newImage('pillar.png', 350,100)
newImage('crate.png', 150, 200)
newImage('well.png', 500, 425)


function newImage(imgSource, leftPosition, bottomPosition){
    let img = document.createElement('img')
    img.src = 'assets/' + imgSource
    img.style.position = 'fixed'
    img.style.left = leftPosition + 'px'
    img.style.bottom = bottomPosition + 'px'
    document.body.append(img)
    return img;   
}
function newItem(imgSource,leftPosition, bottomPosition){
    let object= newImage(imgSource,leftPosition,bottomPosition)
object.addEventListener('click',() => {
    object.remove()
})
}




newItem('sword.png', 500,450)
newItem('sheild.png',165, 185)
newItem('staff.png', 600, 100)

