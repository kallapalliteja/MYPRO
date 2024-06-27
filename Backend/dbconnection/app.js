
const express = require("express");
const app = express();

const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
app.use(express.json());

const dbPath = path.join(__dirname, "goodreads.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(4000, () => {
      console.log("Server Running at http://localhost:4000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();





  //get books

  app.get("/books/", async (request, response) => {
    const getBooksQuery = `
      SELECT
        *
      FROM
        book
      ORDER BY
        book_id;`;
    const booksArray = await db.all(getBooksQuery);
    response.send(booksArray);
  });

  // get single book

  app.get("/books/:book_id/", async (request,response)=>
  {
        const {book_id}=request.params;

        const getBookQuery=`
        select
           *
           from 
           book 
           where 
           book_id=${book_id};`;

           const getBook= await db.get(getBookQuery);
            response.send(getBook);
  })

  //delete book 

  app.delete("/books/:book_id/", async(request,response)=>
  {
    const {book_id}=request.params;
    const deleteQuery=`
    delete 
      from
      book 
      where 
      book_id=${book_id};`;

       await db.run(deleteQuery);
       response.send("Deleated Sucessfully");
  })


  //add book api

  app.post("/books/", async (request,response)=>
  {
     const bookDetails = request.body;

  const {
    title,
    authorId,
    rating,
    ratingCount,
    reviewCount,
    description,
    pages,
    dateOfPublication,
    editionLanguage,
    price,
    onlineStores,
  } = bookDetails;

    const addBookQuery=`
    insert
    into
    book (title,author_id,rating,rating_count,review_count,description,pages,date_of_publication,edition_language,price,online_stores)
    values(

      '${title}',
         ${authorId},
         ${rating},
         ${ratingCount},
         ${reviewCount},
        '${description}',
         ${pages},
        '${dateOfPublication}',
        '${editionLanguage}',
         ${price},
        '${onlineStores}'
        );`;

      const dbResponse= await db.run(addBookQuery);
      const bookId=dbResponse.lastID;
      response.send({bookId:bookId})
  
  });

  // update book api

  app.put("/books/:book_id/", async (request,response)=>
  {   
      const {book_id}=request.params;
      const bookDetails=request.body;

      const 
      {
        title,
        authorId,
        rating,
        ratingCount,
        reviewCount,
        description,
        pages,
        dateOfPublication,
        editionLanguage,
        price,
        onlineStores,

      }=bookDetails;
      
      const addBookQuery=`
      update book
      set
      title='${title}',
      author_id=${authorId},
      rating=${rating},
      rating_count=${ratingCount},
      review_count='${reviewCount}',
      description='${description}',
      pages=${pages},
      date_of_publication='${dateOfPublication}',
      edition_language='{editionLanguage}',
      price=${price},
      online_stores='${onlineStores}'
      where book_id=${book_id};`;

      await db.run(addBookQuery);
      response.send("Sucessfully Updated")
    });


    // geting author books

    app.get("/author/:authorId/books/", async (request,response)=>
    {
        const {authorId}=request.params;

        const getAuthorBooks=`
        select 
          * 
        from 
        author 
        where 
        author_id=${authorId};`;

        const runAuthorQuery= await db.all(getAuthorBooks);
        response.send(runAuthorQuery);

    })

    



