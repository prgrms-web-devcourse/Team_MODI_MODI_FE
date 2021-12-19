import { Box, Divider, Typography, Skeleton } from '@mui/material';
import { PageContainer, PageContents, PageHeader } from 'components/Common';

const MyPartyDetailSkeleton = () => {
  return (
    <>
      <>
        <PageContainer>
          <PageHeader>
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
              }}
            >
              <Skeleton variant="circular" width={72} height={72} />
              <Box sx={{ ml: '10px' }}>
                <Typography variant="microB">
                  <Skeleton width={40} />
                </Typography>
                <Typography variant="baseB">
                  <Skeleton width={55} />
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                ml: 'auto',
                alignItems: 'flex-end',
              }}
            >
              <Typography variant="smallB" component="p">
                <Skeleton width={60} />
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: 'auto',
                }}
              >
                <Skeleton variant="circular" width={17} height={17} />
                <Typography variant="smallB">
                  <Skeleton width={70} />
                </Typography>
              </Box>
            </Box>
          </PageHeader>
          <PageContents>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Skeleton variant="text" width={200} height={30} />
            </Box>
            <Box
              sx={{
                mt: 2,
                mb: 5,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                height: 192,
                perspective: '2000px',
              }}
            >
              <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
            </Box>
            <Divider />
            <Typography
              sx={{
                textAlign: 'left',
                mt: 2,
              }}
              variant="baseB"
              color="text.secondary"
              component="div"
            >
              파티인원
            </Typography>
            <Box
              sx={{
                mt: 3,
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '25%',
                }}
              >
                <Skeleton variant="circular" width={30} height={30} />
                <Skeleton variant="text" width={60} />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '25%',
                }}
              >
                <Skeleton variant="circular" width={30} height={30} />
                <Skeleton variant="text" width={60} />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '25%',
                }}
              >
                <Skeleton variant="circular" width={30} height={30} />
                <Skeleton variant="text" width={60} />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '25%',
                }}
              >
                <Skeleton variant="circular" width={30} height={30} />
                <Skeleton variant="text" width={60} />
              </Box>
            </Box>
            <Divider
              sx={{
                mt: 2,
                mb: 1,
              }}
            />
            <Box
              sx={{
                pt: 2,
                pb: 1,
                borderBottom: '2px dashed #eeeeee',
              }}
            >
              <Typography
                variant="baseB"
                component="div"
                color="text.secondary"
                sx={{
                  textAlign: 'left',
                  mb: 2,
                }}
              >
                파티 규칙
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                }}
              >
                <Skeleton width={90} height={40} />
                <Skeleton width={90} height={40} />
                <Skeleton width={90} height={40} />
              </Box>
            </Box>
          </PageContents>
        </PageContainer>
      </>
    </>
  );
};
export default MyPartyDetailSkeleton;
