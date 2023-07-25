const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('363cba86eae2484cab02e038eb52b735');

const news = async (req, res) => {
    try {
        const newsResponse = await newsapi.v2.everything({
            q: 'health',
            language: 'en',
            pageSize: 12
          });
      
          const articles = newsResponse.articles.map(article => ({
            author: article.author,
            publishedAt: article.publishedAt,
            title: article.title,
            description: article.description,
            url: article.url,
            background_image: article.urlToImage
          }));

        res.status(200).json({
            code: 200,
            status: "success",
            news: articles
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: "error",
            message: "Internal Server Error",
            data: null,
        });
    }
};

const signLang = async (req, res) => {
    try {
        res.status(200).json({
            code: 200,
            status: "success",
            word: [
                {
                letter: "A",
                background_image: "https://storage.googleapis.com/singo-img/A.jpg"
                },
                {
                letter: "B",
                background_image: "https://storage.googleapis.com/singo-img/B.jpg"
                },
                {
                letter: "C",
                background_image: "https://storage.googleapis.com/singo-img/C.jpg"
                },
                {
                letter: "D",
                background_image: "https://storage.googleapis.com/singo-img/D.jpg"
                },
                {
                letter: "E",
                background_image: "https://storage.googleapis.com/singo-img/E.jpg"
                },
                {
                letter: "F",
                background_image: "https://storage.googleapis.com/singo-img/F.jpg"
                },
                {
                letter: "G",
                background_image: "https://storage.googleapis.com/singo-img/G.jpg"
                },
                {
                letter: "H",
                background_image: "https://storage.googleapis.com/singo-img/H.jpg"
                },
                {
                letter: "I",
                background_image: "https://storage.googleapis.com/singo-img/I.jpg"
                },
                {
                letter: "J",
                background_image: "https://storage.googleapis.com/singo-img/J.jpg"
                },
                {
                letter: "K",
                background_image: "https://storage.googleapis.com/singo-img/K.jpg"
                },
                {
                letter: "L",
                background_image: "https://storage.googleapis.com/singo-img/L.jpg"
                },
                {
                letter: "M",
                background_image: "https://storage.googleapis.com/singo-img/M.jpg"
                },
                {
                letter: "N",
                background_image: "https://storage.googleapis.com/singo-img/N.jpg"
                },
                {
                letter: "O",
                background_image: "https://storage.googleapis.com/singo-img/O.jpg"
                },
                {
                letter: "P",
                background_image: "https://storage.googleapis.com/singo-img/P.jpg"
                },
                {
                letter: "Q",
                background_image: "https://storage.googleapis.com/singo-img/Q.jpg"
                },
                {
                letter: "R",
                background_image: "https://storage.googleapis.com/singo-img/R.jpg"
                },
                {
                letter: "S",
                background_image: "https://storage.googleapis.com/singo-img/S.jpg"
                },
                {
                letter: "T",
                background_image: "https://storage.googleapis.com/singo-img/T.jpg"
                },
                {
                letter: "U",
                background_image: "https://storage.googleapis.com/singo-img/U.jpg"
                },
                {
                letter: "V",
                background_image: "https://storage.googleapis.com/singo-img/V.jpg"
                },
                {
                letter: "W",
                background_image: "https://storage.googleapis.com/singo-img/W.jpg"
                },
                {
                letter: "X",
                background_image: "https://storage.googleapis.com/singo-img/X.jpg"
                },
                {
                letter: "Y",
                background_image: "https://storage.googleapis.com/singo-img/Y.jpg"
                },
                {
                letter: "Z",
                background_image: "https://storage.googleapis.com/singo-img/Z.jpg"
                }
            ]
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: "error",
            message: "Internal Server Error",
            data: null,
        });
    }
};


module.exports = {
    news,
    signLang
};