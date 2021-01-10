const fetch = require("node-fetch");
const cheerio = require("cheerio");

const Americanas = {
  name: "Americanas",
  baseUrl: "https://www.telecineplay.com.br/search?term=",

  async getProductsByTermAmericanas(term) {
    try {
      const response = await fetch(`${this.baseUrl}${term}`);
      const body = await response.text();
      const $ = cheerio.load(body);
      const listProducts = [];
      $("div.StyledLayout__StyledPage-u6iyyw-2.hqaVnp").each((_, element) => {
        console.log("aquiiii", element);

        const priceHtml = $(element)
          .find(
            "src__Text-sc-154pg0p-0 src__PromotionalPrice-sc-1k0ejj6-7 iIPzUu"
          )
          .text();
        const product = {
          title: $(element)
            .find("src__Text-sc-154pg0p-0 src__Name-sc-1k0ejj6-3 dSRUrl")
            .text(),
          price: priceHtml.slice(0, priceHtml.lastIndexOf("R$")),
          provider: this.name,
        };
        listProducts.push(product);
      });

      return listProducts;
    } catch (err) {
      return {
        error: true,
        status: err.status,
        details: err.message,
      };
    }
  },
};

module.exports = Americanas;
