import { Box, Divider, Typography, Skeleton } from '@mui/material';

const MyPartySkeleton = () => {
  return (
    <Box
      sx={{
        mb: 2,
        cursor: 'pointer',
        width: 315,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          marginBottom: 2,
        }}
      >
        <Skeleton variant="circular" width={72} height={72} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: 1,
            ml: 2,
          }}
        >
          <Typography
            style={{
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
            variant="smallB"
          >
            <Skeleton width={30} />
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
            }}
            variant="small"
          >
            <Skeleton width={100} />
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'column nowrap',
              alignItems: 'flex-end',
              whiteSpace: 'nowrap',
            }}
          >
            <Typography variant="smallB">
              <Skeleton width={60} />
            </Typography>
            <Typography variant="smallB">
              <Skeleton width={75} />
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default MyPartySkeleton;
