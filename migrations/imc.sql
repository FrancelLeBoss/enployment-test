-- Up

CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT,
    taille NUMBER,
    poids INTEGER,
    age TEXT, 
    imc NUMBER
)

-- Down

drop table Person