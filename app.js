let button = document.querySelector('#button')
let  div =  document.querySelector('.quote')
let phrases = ['Don’t give up','Keep pushing','Keep fighting!','Stay strong','Never give up.',"Never say ‘die’.",'Come on! You can do it!',
    'Give it a try.','Go for it.','Why not?','It’s worth a shot.','What are you waiting for?','What do you have to lose?','Just do it.',
    'There you go!','Keep up the good work.','Keep it up.','Good job','I’m so proud of you!']
    let rand
button.addEventListener('click', function(event) {
    
       rand = phrases[Math.floor(Math.random() * phrases.length)]
       div.innerHTML = `<p><blockquote><i>${rand}</i></blockquote></p>`
})


