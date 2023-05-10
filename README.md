# DaterBase

This is the front end of the DaterBase application.

## Bugs

* If the database is reseeded whilst a user is logged in, the localStorage contains their old token, which no longer links to a user in the new database. This can be fixed in the short term by using localStorage.removeItem("token") in Chrome developer tools.

