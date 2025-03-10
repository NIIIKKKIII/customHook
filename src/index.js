import express from 'express';
import cors from 'cors';

const app = express();
app.use(express());
app.use(cors());

app.get('/todo',  (req, res)=>{
   res.json({
    "todos": [
      {
        "id": 1,
        "task": "Buy groceries",
        "completed": false,
        "dueDate": "2025-03-12"
      },
      {
        "id": 2,
        "task": "Complete project report",
        "completed": false,
        "dueDate": "2025-03-15"
      },
      {
        "id": 3,
        "task": "Call the dentist for an appointment",
        "completed": true,
        "dueDate": "2025-03-10"
      },
      {
        "id": 4,
        "task": "Finish reading the book 'The Alchemist'",
        "completed": false,
        "dueDate": "2025-03-20"
      },
      {
        "id": 5,
        "task": "Clean the garage",
        "completed": false,
        "dueDate": "2025-03-14"
      },
      {
        "id": 6,
        "task": "Attend team meeting at 3 PM",
        "completed": false,
        "dueDate": "2025-03-11"
      },
      {
        "id": 7,
        "task": "Buy a new laptop charger",
        "completed": false,
        "dueDate": "2025-03-13"
      },
      {
        "id": 8,
        "task": "Pay electricity bill",
        "completed": true,
        "dueDate": "2025-03-10"
      },
      {
        "id": 9,
        "task": "Organize digital photos",
        "completed": false,
        "dueDate": "2025-03-18"
      },
      {
        "id": 10,
        "task": "Take the dog for a walk",
        "completed": false,
        "dueDate": "2025-03-10"
      }
    ]
  }
  )
});



app.listen(3000, console.log("ON"))