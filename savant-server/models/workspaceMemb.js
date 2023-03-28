const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workspaceMembSchema = new Schema({
     email:{
        type:String,
        required:true,
     },
     name: {
        type: String,
        required: true
    },
     workspaceEnrolled: [Number],
     workspaceOwned: [Number]

},
   {
       timestamps: true,
       usePushEach: true
   }
)

module.exports = mongoose.model('WorkspaceMemb', workspaceMembSchema);