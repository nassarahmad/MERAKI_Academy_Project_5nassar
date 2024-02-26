import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    commentLike: [],
    shares: [],
  },

  reducers: {
    setcomments: (state, action) => {
      state.comments = action.payload;
    },
    getCommentsByPostId: (state, action) => {
      state.comments = action.payload;
    },
    deletecomments: (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    updateComment: (state, action) => {
      const { id, updatedComment } = action.payload;
      state.comments = state.comments.map((comment) =>
        comment.id === id ? { ...comment, ...updatedComment } : comment
      );
    },
    getCommentById: (state, action) => {
      state.comments = [action.payload];
    },
    setSingleComment: (state, action) => {
      state.comments.push(action.payload);
    }, deleteCommentLikeById: (state, action) => {
      const commentLikeId = action.payload;
      state.commentLikes = state.commentLikes.filter(
        (like) => like.id !== commentLikeId
      );
    },
    createCommentLike: (state, action) => {
      const newLike = action.payload;
      state.commentLikes.push(newLike);
    },
    getLikesByCommentId: (state, action) => {
      const commentId = action.payload;
      state.commentLikes = state.commentLikes.filter(
        (like) => like.commentId === commentId
      );
    },
    getSharesByPostId: (state, action) => {
      const postId = action.payload;
      state.shares = state.shares.filter((share) => share.postId === postId);
    },
    createShareByPostId: (state, action) => {
      const newShare = action.payload;
      state.shares.push(newShare);
    },
    softDeleteShare: (state, action) => {
      const shareId = action.payload;
      state.shares = state.shares.map((share) =>
        share.id === shareId ? { ...share, isDeleted: true } : share
)}
  },
});
export const {
  setcomments,
  getCommentsByPostId,
  deletecomments,
  updateComment,
  getCommentById,
  setSingleComment, deleteCommentLikeById,
  createCommentLike,
  getLikesByCommentId,
  getSharesByPostId,
  createShareByPostId,
  softDeleteShare,
} = commentsSlice.actions;

export default commentsSlice.reducer;
