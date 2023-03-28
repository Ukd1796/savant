const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workspaceCodeSchema = new Schema({
    code: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('WorkspaceCode', workspaceCodeSchema);