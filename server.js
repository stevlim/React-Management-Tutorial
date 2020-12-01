const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/customers", (req, res) => {
    res.send([
        {
            "id" : 1,
            "image" : "http://placeimg.com/64/64/any",
            "name" : "홍길동2",
            "birthday" : "960122",
            "gender" : "여자",
            "job" : "대학생"
            },
            {
              "id" : 2,
              "image" : "http://placeimg.com/64/64/any?p=1",
              "name" : "홍길나",
              "birthday" : "920122",
              "gender" : "남자",
              "job" : "회장"
              },
              {
                "id" : 3,
                "image" : "http://placeimg.com/64/64/any?p=2",
                "name" : "홍길서",
                "birthday" : "060122",
                "gender" : "여자",
                "job" : "의사"
                } 
    ]);
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));