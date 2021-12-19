import { Card, CardContent, IconButton, Box, Skeleton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { styled } from '@mui/system';

const CarouselSkeleton = () => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          p: '0 30px',
          mb: 3,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            pb: 1,
          }}
        >
          <Card
            sx={{
              position: 'relative',
              width: '100%',
              height: 170,
              minHeight: 170,
              minWidth: 280,
              borderRadius: 3,
              flexShrink: 0,
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                m: 2,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <Skeleton variant="circular" width={24} height={24} />
                <Skeleton variant="text" width={140} height={24} />
              </Box>
              <Skeleton variant="text" width={140} height={24} />
              <Skeleton
                variant="rectangular"
                width={230}
                height={45}
                sx={{
                  borderRadius: 11,
                  mt: 1,
                }}
              />
            </CardContent>
          </Card>
        </Box>
      </Box>
      <SlideControlButton
        aria-label="prevSlide"
        size="large"
        color="secondary"
        sx={{ left: 0 }}
      >
        <ArrowBackIosNew />
      </SlideControlButton>
      <SlideControlButton
        aria-label="nextSlide"
        size="large"
        color="secondary"
        sx={{ right: 0 }}
      >
        <ArrowForwardIos />
      </SlideControlButton>
    </Box>
  );
};

const SlideControlButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  svg {
    width: 30px;
    height: 30px;
    fill: rgba(0, 0, 0, 0.25);
  }
`;

export default CarouselSkeleton;
