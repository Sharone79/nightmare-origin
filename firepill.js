
window.addEventListener('load', function () {
    const pillWrapper = document.getElementById('firePillWrapper');
    const pill = document.getElementById('firePillEasterEgg');

    window.addEventListener('keydown', function(event) {
        if (event.key && event.key.toLowerCase() === 'f') {
            if (pillWrapper) {
                pillWrapper.style.display = (pillWrapper.style.display === 'none') ? 'block' : 'none';
            }
        }
    });

    if (pill) {
        pill.addEventListener('click', function () {
            window.open(
                'https://m.comic.naver.com/challenge/detail?titleId=806752&no=21',
                '_blank',
                'width=800,height=1000,scrollbars=yes,resizable=yes'
            );
        });
    }
});
