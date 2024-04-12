import mongoose from "mongoose";
const Schema = mongoose.Schema;

constArtistsSchema = new Schema ({
    name: String
    genre: String
    songs: []
    album: String
    length: Number

});