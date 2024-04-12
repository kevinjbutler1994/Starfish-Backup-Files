import mongoose from "./connection.js";

const Schema = mongoose.Schema

const bestSchema = new Schema (
    {
        "year": num
        "sports": Object {
            "superBowl": String,
            "worldSeries": String,
            "stanleyCup": String,
            "NBAchampionship": String
        },
        "music": Object {
            "bestSong": {
                "title": String,
                "artist": String
            }
        },
        "movies": Object {
            "bestMovie": String,
            "bestActress": String,
            "bestActor": String
        }
    },
)

export default mongoose.model ('best', bestSchema)