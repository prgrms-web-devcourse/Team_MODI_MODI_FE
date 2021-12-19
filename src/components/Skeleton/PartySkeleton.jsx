import { Paper, Typography, Box, Skeleton } from '@mui/material';
import { MonetizationOn } from '@mui/icons-material';

const PartySkeleton = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderRadius: '16px',
        cursor: 'pointer',
        p: 2,
        mb: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ mr: 'auto' }}>
          <Typography variant="large">
            <Skeleton width={120} />
          </Typography>
          <Typography variant="micro">
            <Skeleton width={135} />
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 1.3,
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'flex-end',
          }}
        >
          <Typography variant="micro">
            <Skeleton width={40} />
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'flex-end',
            }}
          >
            <MonetizationOn
              color="primary"
              sx={{
                fontSize: 16,
                verticalAlign: 'sub',
              }}
            />
            <Typography variant="micro">
              <Skeleton width={55} />
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            width: 140,
            height: 42,
            mt: 1.5,
            mr: 'auto',
          }}
        >
          <Skeleton variant="circular" width={30} height={30} />
          <Skeleton variant="circular" width={30} height={30} />
          <Skeleton variant="circular" width={30} height={30} />
          <Skeleton variant="circular" width={30} height={30} />
        </Box>
        <Typography
          sx={{
            mt: 'auto',
            ml: 0,
            fontSize: '12px',
            fontWeight: 500,
            textAlign: 'right',
          }}
        >
          <Skeleton width={180} />
        </Typography>
      </Box>
    </Paper>
  );
};

export default PartySkeleton;
