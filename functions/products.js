const dotenv = require("dotenv");
dotenv.config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);

exports.handler = async (event, contex, cb) => {
  try {
    const res = await airtable.list({ maxRecords: 200 });
    const products = res.records.map((product) => {
      const { id, fields } = product;
      const {
        colors,
        reviews,
        stars,
        company,
        price,
        category,
        images,
        name,
        stock,
        shipping,
        featured,
        description,
      } = fields;
      const { url } = images[0];
      return {
        id,
        colors,
        reviews,
        stars,
        company,
        price,
        category,
        image: url,
        name,
        stock,
        shipping,
        featured,
        description,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: "there wa sn error error",
    };
  }
};
