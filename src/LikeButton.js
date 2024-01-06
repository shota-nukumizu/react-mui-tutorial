import React, { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const toggleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div>
      <IconButton onClick={toggleLike} color={liked ? 'primary' : 'default'}>
        <FavoriteIcon />
      </IconButton>
      <Typography component="span">{likesCount}</Typography>
    </div>
  );
};

export default LikeButton;
