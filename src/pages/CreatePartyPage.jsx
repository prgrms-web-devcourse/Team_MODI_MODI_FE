import { useEffect, useState } from 'react';
import { Container, Button, Box, MobileStepper } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { styled } from '@mui/system';
import CreatePartyTitle from 'components/CreatePartyTitle';
import OttList from 'components/OttList';

const ottServices = [
  {
    ottId: 1,
    ottName: '넷플릭스',
    grade: '프리미엄',
    monthlyDeposit: 10000,
    maxMemberCapacity: 4,
  },
  {
    ottId: 2,
    ottName: '왓챠',
    grade: '프리미엄',
    monthlyDeposit: 10000,
    maxMemberCapacity: 4,
  },
  {
    ottId: 3,
    ottName: '웨이브',
    grade: '프리미엄',
    monthlyDeposit: 10000,
    maxMemberCapacity: 4,
  },
  {
    ottId: 4,
    ottName: '티빙',
    grade: '프리미엄',
    monthlyDeposit: 10000,
    maxMemberCapacity: 4,
  },
  {
    ottId: 5,
    ottName: '디즈니+',
    grade: '프리미엄',
    monthlyDeposit: 10000,
    maxMemberCapacity: 4,
  },
  {
    ottId: 6,
    ottName: '라프텔',
    grade: '프리미엄',
    monthlyDeposit: 10000,
    maxMemberCapacity: 4,
  },
  {
    ottId: 7,
    ottName: '쿠팡+',
    grade: '프리미엄',
    monthlyDeposit: 10000,
    maxMemberCapacity: 4,
  },
  {
    ottId: 8,
    ottName: '아마존 프라임',
    grade: '프리미엄',
    monthlyDeposit: 10000,
    maxMemberCapacity: 4,
  },
];

// ott click -> nextDisable = false

const CreatePartyPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [nextDisable, setNextDisable] = useState(true);
  const [newParty, setNewParty] = useState({
    ottId: undefined,
    ottName: '',
    grade: '',
    monthlyDeposit: undefined,
    maxMemberCapacity: undefined,
    startDate: '',
    endDate: '',
    mustFilled: false,
    rules: [
      {
        ruleId: undefined,
        ruleName: '',
      },
      {
        ruleId: undefined,
        ruleName: '',
      },
    ],
    sharedId: '',
    sharedPassword: '',
  });

  useEffect(() => {
    console.log(activeStep, newParty);
    nextStep();
  }, [activeStep, newParty]);

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setNextDisable(true);
  };

  const nextStep = () => {
    nextDisable && setNextDisable(false);
  };

  const handleSelectedOtt = id => {
    nextStep();
    setNewParty(current => ({
      ...current,
      ottId: id,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit', e);
  };

  const getStepContent = stepNumber => {
    switch (stepNumber) {
      case 0:
        return (
          <>
            <CreatePartyTitle
              sx={{ paddingTop: '94px' }}
              subTitle="어떤 서비스를 함께 이용하고 싶나요?"
            />
            <OttList
              ottServices={ottServices}
              onSelectOtt={handleSelectedOtt}
              currentOttId={newParty.ottId}
            />
          </>
        );
      case 1:
        return (
          <>
            <CreatePartyTitle subTitle="얼마 동안 함께 이용하고 싶나요?" />
          </>
        );
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
        <BottomButtonWrapper>
          <StepperButton
            type="button"
            size="large"
            variant="outlined"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
            이전
          </StepperButton>
          {activeStep !== 4 ? (
            <StepperButton
              type="button"
              size="large"
              variant="contained"
              disabled={nextDisable}
              onClick={handleNext}
            >
              다음 <KeyboardArrowRight />
            </StepperButton>
          ) : (
            <StepperButton
              type="submit"
              size="large"
              variant="contained"
              disabled={nextDisable}
            >
              완료
            </StepperButton>
          )}
        </BottomButtonWrapper>
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

const StepperButton = styled(Button)`
  width: 48%;
`;

const BottomButtonWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 2;
  width: 100%;
`;

export default CreatePartyPage;
