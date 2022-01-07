import query from "../index.js";


async function populateTable() {
  
    const res = await query(
      `INSERT INTO city(title, author) VALUES ($1, $2) RETURNING title`,
      [title, author]
    );
    console.log(res);
  }


populateTable();