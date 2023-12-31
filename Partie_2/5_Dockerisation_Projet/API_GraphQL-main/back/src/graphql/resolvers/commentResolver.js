const { Comment } = require("../../models/Comment");

module.exports = {
  Query: {
    comments: async (parent, args) => {
      return await Comment.find();
    },
    commentByPostId: async (parent, args) => {
      return await Comment.find({postId: args.postId});
    },
  },
  Mutation: {

    createComment: async (parent, args) => {
      try{
        const { content, author, postId } = args;
        const comment = new Comment({ content, author, postId });
        await comment.save();
        return comment;
      }catch(error){
        console.log(error);
      }  
    },
  },
};

