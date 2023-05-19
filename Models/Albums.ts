import mongoose  from "mongoose"
const schema = mongoose.Schema

let albumSchema = new schema({
  id: {type:  String },
  type: {type: String},
  genre: {type: String},
  title: {type: String},
  name: {type: String},
  artistId: {type:  String},
  imageURL: {type: String},
  releaseDate: {type: Date}
})
export const Albums = mongoose.model('Album', albumSchema)
