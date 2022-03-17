document.querySelector('.icon-dice').addEventListener('click', () => {
    console.log('Clicked');
    fetch('https://api.adviceslip.com/advice')
        .then(resp => resp.json())
        .then(jsonData => {
            document.querySelector('.advice-id').innerText = `advice ${jsonData['slip']['id']}`
            document.querySelector('.advice').innerText = `"${jsonData['slip']['advice']}"`
        }); 
})