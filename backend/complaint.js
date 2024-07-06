
const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  complaintId: String,
  details: Object,
  timestamp: Date,
  status: String
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
