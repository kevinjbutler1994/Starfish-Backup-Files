import mongoose from "mongoose";
import author from "../models/author";
import connection from "./connection";

Author.create({
    firstName: "F. Scott",
    lastName: "Fitzgerald",
    nationality: "United States",
    birthYear: 1896,
    books: [
        title: "The Great Gatsby",
        type: "Fiction"
    ]
})