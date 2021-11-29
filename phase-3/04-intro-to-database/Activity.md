# Activity
[Download SQL browser](https://sqlitebrowser.org/dl/)


# Deliverables
Practice SQL commands
>Note: if you get stuck review 
SQL Insert, Select, Update and Delete and 
Introduction to Table Relations in SQL and Associating Tables with Foreign Keys and SQL Joins


1. Create a db folder with the file `development.sqlite3`. Open DB Browser for SQLite. Click `Open Database` and through the finder navigate to `development.sqlite3` and open it.

  <img src="./assets/image_1.png" alt="db folder" style="margin-right: 10px;" />
  <img src="./assets/image_2.png" alt="open db" style="margin-right: 10px;" />
  <img src="./assets/image_3.png" alt="development.sqlite" style="margin-right: 10px;" />

2. Create a ticket table by clicking on the Execute SQL tab, adding the SQL blow and clicking the play button(circled in yellow). Afterwords talk with your group about the SQL, what is this doing, what is that Primary key? What are the items on the left (id, title, director, description) what are the items on the right (VARCHAR(30), INTEGER). What is that Foreign key on the bottom of tickets?

```
CREATE TABLE movies(
    id INTEGER,
    title VARCHAR(30),
    director VARCHAR(50),
    description VARCHAR(10),
    PRIMARY KEY(id)
);

CREATE TABLE tickets(
    id INTEGER,
    price INTEGER,
    name VARCHAR(30),
    movie_id INTEGER,
    PRIMARY KEY(id)
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);


```
  <img src="./assets/image_4.png" alt="development.sqlite" style="margin-right: 10px;" />

3. Clear the create table from the SQL terminal. Execute a SQL command that inserts data to our table. Create 3 rows in each table.

 <details>
      <summary>
        solution 
      </summary>
      <hr/>
        INSERT INTO movies (title, director, description) VALUES ('Happy pets', 'rose','A movie about sad pets, a satirical comedy');
        INSERT INTO movies (title, director, description) VALUES ('ruby is cool', 'ix','ix talks about ruby');
        INSERT INTO movies (title, director, description) VALUES ('Icewind dale', 'wizards of the cost','Icewind dale is cold, really cold, like really really cold, the movie.');
        INSERT INTO tickets (price, name, movie_id) VALUES (5, 'ix',1);
        INSERT INTO tickets (price, name, movie_id) VALUES (5, 'rose',3);
        INSERT INTO tickets (price, name, movie_id) VALUES (5, 'ix',3);
      <hr/>
 </details>

 4. Clear the the SQL terminal. Execute a SQL command that selects all of the data from tickets. Clear the SQL terminal and execute a second command that selects all of the data from movies.

  <details>
      <summary>
        solution 
      </summary>
      <hr/>
        SELECT * FROM movies;
        SELECT * FROM tickets;
      <hr/>
 </details>

 5. Clear the the SQL terminal. Execute a SQL command that displays the name from tickets and movies associated with those tickets.

   <details>
      <summary>
        solution 
      </summary>
      <hr/>
        SELECT name, title
        FROM tickets
        INNER JOIN movies
        ON tickets.movie_id = movies.id;
      <hr/>
 </details>