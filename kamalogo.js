const vidElem = document.querySelector('#jw-player');
const vidJw = jwplayer('jw-player');
const movieElem = document.querySelector('#movie');
const movieJw = jwplayer('movie');
const logoImage = `https://blogger.googleusercontent.com/img/a/AVvXsEgf6x-o1pE5q7vqNKc_v2UERrQbY9Cl5g9AHGxYbFg8y-EolIU8BntTZJYXhBbPPxWhPza9P6aD-T1MYsa0aggi5M8oLZ2sj-zuvTGORgOwsYtdLLyudSpwfnhyGXZ8a2cidsjQ6sb2zCrd4t_Ai54safXFnUOLGdqO3w-Ur1q5yB2HmyjrA0BNqhipRw=s280`;
const createCustomLogo = () => {
    let logo = {
        file: logoImage,
        hide: false,
        margin: "20",
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