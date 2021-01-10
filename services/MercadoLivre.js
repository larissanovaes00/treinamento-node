const fetch = require("node-fetch")
const cheerio = require("cheerio")

const MercadoLivre = {
    name: 'Mercado livre',
    baseUrl: 'https://lista.mercadolivre.com.br',
    async getProductsByTerm(term) {
        try {
            const response = await fetch(`${this.baseUrl}/${term}`)
            const body = await response.text()
            const $ = cheerio.load(body)
            const listProducts = []
            $('ol.ui-search-layout li').each((_, element) => {
                const priceHtml = $(element).find('div.ui-search-price_second-line').text()
                const product = {
                    title: $(element).find("div.ui-search-tiem_group-title h2").text(),
                    price: priceHtml.slice(0, priceHtml.lastIndexOf("R$")),
                    provider: this.name
                }
                listProducts.push(product)
            })

            return listProducts;
        }

        catch (err) {
            return{
                error: true,
                status: err.status,
                details: err.message
            }
        }
    }
}


module.exports = MercadoLivre