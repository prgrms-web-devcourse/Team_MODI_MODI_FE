import { useState } from 'react';
import { Container, Button, Box, MobileStepper } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { styled } from '@mui/system';
import CreatePartyTitle from 'components/CreatePartyTitle';

const CreatePartyPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit', e);
  };

  const getStepContent = stepNumber => {
    switch (stepNumber) {
      case 0:
        return (
          <CreatePartyTitle
            sx={{ paddingTop: '94px' }}
            subTitle="어떤 서비스를 함께 이용하고 싶나요?"
          />
        );
      case 1:
        return <CreatePartyTitle subTitle="얼마 동안 함께 이용하고 싶나요?" />;
      case 2:
        return (
          <CreatePartyTitle subTitle="이 파티의 규칙은 어떻게 지정할까요?" />
        );
      case 3:
        return <CreatePartyTitle subTitle="파티에 몇 명을 모집하고 싶나요?" />;
      case 4:
        return (
          <CreatePartyTitle subTitle="파티에서 사용하실 서비스의 계정 정보를 입력해주세요." />
        );
      default:
        return;
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <form onSubmit={handleSubmit}>
        {activeStep !== 0 ? (
          <StyledStepper
            variant="progress"
            steps={5}
            position="static"
            activeStep={activeStep}
          />
        ) : null}

        {getStepContent(activeStep)}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: 30,
            width: '100%',
          }}
        >
          <Button
            size="large"
            variant="outlined"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ width: '48%' }}
          >
            <KeyboardArrowLeft />
            이전
          </Button>
          {activeStep !== 4 ? (
            <Button
              size="large"
              type="button"
              variant="contained"
              onClick={handleNext}
              sx={{ width: '48%' }}
            >
              다음 <KeyboardArrowRight />
            </Button>
          ) : (
            <Button
              size="large"
              variant="contained"
              type="submit"
              sx={{ width: '48%' }}
            >
              완료
            </Button>
          )}
        </Box>
      </form>
    </Container>
  );
};

const StyledStepper = styled(MobileStepper)`
  padding: 20px 0 0;
  span {
    width: 100%;
  }
`;

export default CreatePartyPage;
