const PORT = 8000
const  axios = require('axios')
const  cheerio = require('cheerio')
const  express = require('express')
//const app = require("express");


const human = express()




const targetUrl = 'https://www.theguardian.com/uk'
//const url = 'https://www.prothomalo.com/'

axios(targetUrl)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html) //load the entire html inside $
        const articles = []

        $('.fc-item__title', html).each(function (){ //from the loaded response in $ we will search class inside the data
            const  title = $(this).text()
            const url = $(this).find('a').attr('href')

            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))

human.listen(PORT , () => console.log(`server running on PORT ${PORT}`))

