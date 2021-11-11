

window.addEventListener('keydown', function (e) {
   
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;

    audio.currentTime = 0;
    audio.play();
    
    key.classList.add('playing');
        
});

    function removeTransition(e){
        if(e.propertyName !== 'transform') return; //skip it if it's not a transform.

        this.classList.remove('playing');
    }
    //this will make the highlighted border and size go back

    const keys = document.querySelectorAll('.key');
    console.log(keys);
    
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));