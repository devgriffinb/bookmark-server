const { v4: uuid } = require('uuid');

const bookmarks = [
    { id: uuid(),
        title: 'Google',
        url: 'http://www.google.com',
        description: 'Go-to Search Engine',
        rating: 5 },
    { id: uuid(),
        title: 'Crunchyroll',
        url: 'http://www.crunchyroll.com/',
        description: 'Best site for good anime, yeah call me a weeb',
        rating: 5 },
    { id: uuid(),
        title: 'Youtube',
        url: 'https://www.youtube.com',
        description: 'This baby is always open while working',
        rating: 5 },
]

module.exports = { bookmarks }