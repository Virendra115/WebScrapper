const request = require('request')
const cheerio = require('cheerio')

const url = 'https://www.amazon.jobs/en-gb/business_categories/student-programs?offset=0&result_limit=10&sort=relevant&category%5B%5D=software-development&distanceType=Mi&radius=24km&latitude=&longitude=&loc_group_id=&loc_query=&base_query=&city=&country=&region=&county=&query_options=';

request(url, (error, resoponse, html) => {
    if (!error && resoponse.statusCode == 200) {
        const $ = cheerio.load(html);
        const v = $('#main-content > div.content.business-category.overview > div > div:nth-child(1) > div > div > h2:nth-child(9)')
        console.log(v.html())
    } else {
        console.log(error)
    }
})
