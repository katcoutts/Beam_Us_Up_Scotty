use beam_us_up;
db.dropDatabase();

db.diary.insert([
  { 
    title: "Busy day in space",
    date: "01.09.16",
    text: "Fixing stuff. Flying about. Macaroni cheese for lunch."
  },

  { 
    title: "Busy day in space",
    date: "02.09.16",
    text: "Fixing stuff. Flying about. 10k in the gym."
  },

  { 
    title: "Quiet day in space",
    date: "03.09.16",
    text: "Had a nap. Watched some Netflix"
  }

]);

// db.dropDatabase();

