import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
    questionTitle: {
        type: String,
        required: true
    },
    questionBody: {
        type: String,
        required: true
    },
    questionTags: {
        type: [String],
        required: true
    },
    noOfAnswers: {
        type: Number,
        default: 0
    },
    upVotes: {
        type: [String],
        default: []
    },
    downVotes: {
        type: [String],
        default: []
    },
    userPosted: {
        type: String,
        required: "Question must have an author"
    },
    userId: {
        type: String,
    },
    askedOn: {
        type: Date,
        default: Date.now
    },
    answers: [{
        answerBody: String,
        userAnswered: String,
        userId: String,
        answeredOn: {
            type: Date,
            default: Date.now
        }
    }]
})

export default mongoose.model("Question", questionSchema)