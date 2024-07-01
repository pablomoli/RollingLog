//
//
const { Client } = require("@notionhq/client");
const { NOTION_KEY, LIBRARY_KEY } = process.env;

const notion = new Client({
	auth: NOTION_KEY,
});

exports.handler = async function (event, context) {
	try {
		const response = await notion.databases.query({
			database_id: LIBRARY_KEY,
			filter: {
				or: [
					{
						property: "Status",
						select: {
							equals: "2022",
						},
					},
					{
						property: "Status",
						select: {
							equals: "2023",
						},
					},
					{
						property: "Status",
						select: {
							equals: "2024",
						},
					},
				],
			},
			sort: {
				property: "endDate",
				direction: "descending",
			},
		});
		return {
			statusCode: 200,
			body: JSON.stringify(response),
		};
	} catch (e) {
		console.error(e);
		return {
			statusCode: 500,
			body: e.toString(),
		};
	}
};
