db = db.getSiblingDB("research_project_jari");

db.createUser({
    user: "jari",
    pwd: "zskvffY9Mi.BL2mkTGgK",
    roles: [
      {
        role: 'readWrite', 
        db: 'research_project_jari'
      },
    ],
  });

db.createCollection("aiimages");
db.createCollection("votes");

// db.aiimages.insertMany([
//   {
//     "_id": "plaatje-1.png",
//   },
//   {
//     "_id": "plaatje-2.png",
//   },
//   {
//     "_id": "plaatje-3.png",
//   },
//   {
//     "_id": "plaatje-4.png",
//   },
// ]);
