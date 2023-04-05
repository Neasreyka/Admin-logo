const vidElem = document.querySelector('#jw-player');
const vidJw = jwplayer('jw-player');
const movieElem = document.querySelector('#movie');
const movieJw = jwplayer('movie');
const logoImage = `https://i.imgur.com/xNHS5iy.png`;
const createCustomLogo = () => {
    let logo = {
        file: logoImage,
        hide: false,
        margin: "10",
        position: "top-right",
        link: homePageUrl
    }
    return logo;
}
const loadJwPlayer = () => {
    try {
        if (vidElem) {
            vidJw.setup({
                file: file.src,
                logo: createCustomLogo(),
                image: getBlogPostImage()
            })
        } else if (movieElem) {
            movieJw.setup({
                logo: createCustomLogo(),
                captions: {
                    fontSize: 15,
                    backgroundOpacity: 0,
                    edgeStyle: "raised"
                },
                playlist: [{
                    image: getBlogPostImage(),
                    file: movie.src,
                    captions: [{
                            label: movie.subtitles[0].lang,
                            file: movie.subtitles[0].src,
                            default: true
                        },
                        {
                            label: movie.subtitles[1].lang,
                            file: movie.subtitles[1].src
                        },
                        {
                            label: movie.subtitles[2].lang,
                            file: movie.subtitles[2].src
                        },
                        {
                            label: movie.subtitles[3].lang,
                            file: movie.subtitles[3].src
                        }
                    ]
                }]
            })
        }
    } catch (e) {
        console.log(`Error! ការកំណត់របស់អ្នកមិនត្រឹមត្រូវទេ។`)
    }
};
window.addEventListener('DOMContentLoaded', loadJwPlayer);
