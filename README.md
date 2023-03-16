# Upscale Skill Test
#
##### Basic API for Task Management App using Node.js and Express.js
#
### Installation:
#
```sh
cd upscale-skill-test
npm install
npm start
```
### Run this script on mysql:
#
```sql
CREATE TABLE my_table (
    id CHAR(36) PRIMARY KEY NOT NULL DEFAULT UUID(),
    judul VARCHAR(100) NOT NULL,
    deskripsi VARCHAR(255),
    selesai TINYINT(1) DEFAULT FALSE
);
```
#
### Import 'upscale.postman_collection.json' file to Postman.
#
### APIs on Postman:
##### 1. getAllTugas [GET]
##### 2. getTugasById [GET]
##### 3. postTugas [POST]
##### 4. updateTugasById [PATCH]
##### 5. deleteTugasById [DELETE]