CREATE TABLE budget (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title text NOT NULL UNIQUE,
    c_value real NOT NULL,
    category text NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);