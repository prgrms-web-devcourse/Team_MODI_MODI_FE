import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { Button, Box, MobileStepper, Container } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  StepOttSelect,
  StepPeriodSelect,
  StepRuleSelect,
  StepMemberSelect,
  StepShardInfoForm,
} from 'components/PartyCreate';
import useAsync from 'hooks/useAsync';
import { createNewParty, getOtt, getRules } from 'utils/api';
import { useOttInfoState } from 'contexts/OttInfoProvider';
import { calculateEndDate, calculateNextDate } from 'utils/calculateDate';
import { partyCreateFormater } from 'utils/formatting';
import theme from 'styles/theme.js';
import useMediaQuery from '@mui/material/useMediaQuery';
import Alert from 'components/Common/Alert';

const CreatePartyPage = () => {
  const { ottServices } = useOttInfoState();
  const [rules] = useAsync(getRules);
  const [activeStep, setActiveStep] = useState(0);
  const [stepComplete, setStepComplete] = useState(true);
  const [complete, setComplete] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [checkSelectStartDate, setCheckSelectStartDate] = useState(true);
  const [newParty, setNewParty] = useState({
    ottId: undefined,
    ottName: '',
    grade: '',
    partyMemberCapacity: 1,
    startDate: calculateNextDate(),
    endDate: calculateEndDate(calculateNextDate(), 1),
    period: 1,
    mustFilled: null,
    ruleList: [],
    sharedId: '',
    sharedPassword: '',
    sharedPasswordCheck: '',
  });
  const location = useLocation();
  const navigate = useNavigate();
  const mdDownMatches = useMediaQuery(theme.breakpoints.down('md'));

  const [currentOtt, loadOttInfo] = useAsync(
    getOtt,
    [newParty.ottId],
    [],
    true,
  );
  const [partyCreateAPIState, fetchPartyCreateAPI] = useAsync(
    createNewParty,
    [],
    [],
    true,
  );

  const nextStep = useCallback(() => {
    stepComplete && setStepComplete(false);
  }, [stepComplete]);

  const handleSelectedOtt = useCallback(
    selectOttId => {
      nextStep();
      loadOttInfo(selectOttId);
    },
    [loadOttInfo, nextStep],
  );

  const {
    isLoading: partyCreateLoading,
    value: partyCreateValue,
    error: partyCreateError,
  } = partyCreateAPIState;

  useEffect(() => {
    partyCreateLoading && setComplete(false);
  }, [partyCreateLoading]);

  useEffect(() => {
    if (rules.value) {
      const ruleList = rules.value.rules.map(rule => ({
        ...rule,
        isSelected: false,
      }));
      setNewParty(current => ({
        ...current,
        ruleList,
      }));
    }
  }, [rules.value]);

  useEffect(() => {
    if (location.search && ottServices.length) {
      const currentOtt = location.search.split('=')[1];
      handleSelectedOtt(currentOtt);
    }
  }, [ottServices, handleSelectedOtt, location.search]);

  useEffect(() => {
    currentOtt.value &&
      setNewParty(current => ({
        ...current,
        ottId: currentOtt.value.ottId,
        ottName: currentOtt.value.ottName,
        grade: currentOtt.value.grade,
      }));
  }, [currentOtt.value]);

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    nextStep();
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    if (activeStep === 0 || newParty.mustFilled !== null) {
      return;
    }
    setStepComplete(true);
  };

  const handleStartDate = (startDate, checkStartDate) => {
    if (checkStartDate) {
      const endDate = calculateEndDate(startDate, newParty.period);
      setNewParty(current => ({
        ...current,
        startDate,
        endDate,
      }));
    } else {
      setCheckSelectStartDate(false);
    }
  };

  const handlePeriod = period => {
    const endDate = calculateEndDate(newParty.startDate, period);
    setNewParty(current => ({
      ...current,
      period,
      endDate,
    }));
  };

  const handleSelectRules = newRuleList => {
    if (newRuleList.some(({ isSelected }) => isSelected)) {
      nextStep();
    } else {
      setStepComplete(true);
    }
    setNewParty(current => ({
      ...current,
      ruleList: newRuleList,
    }));
  };

  const handleCounter = partyMemberCapacity => {
    setNewParty(current => ({
      ...current,
      partyMemberCapacity,
    }));
  };

  const handleConfirm = mustFilled => {
    nextStep();
    setNewParty(current => ({
      ...current,
      mustFilled,
    }));
  };

  const handleChangeSharedInfo = ({ name, value }) => {
    setNewParty(current => ({
      ...current,
      [name]: value,
    }));
  };

  const handleCloseAlert = useCallback(() => {
    if (partyCreateValue) {
      const { partyId } = partyCreateValue;
      navigate(`/myParty/${partyId}`);
    }
    if (partyCreateError) {
      navigate('/');
    }
  }, [navigate, partyCreateValue, partyCreateError]);

  useEffect(() => {
    const { sharedId, sharedPassword, sharedPasswordCheck } = newParty;
    if (
      sharedId &&
      sharedPassword &&
      sharedPasswordCheck &&
      sharedPassword === sharedPasswordCheck
    ) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [newParty]);

  const handleSubmit = async e => {
    e.preventDefault();
    const submitData = partyCreateFormater(newParty);
    fetchPartyCreateAPI(submitData);
  };

  useEffect(() => {
    if (partyCreateValue) {
      setAlertType('createSuccess');
      setAlertMessage('파티원을 기다려보세요!');
      setIsOpenAlert(true);
    }
  }, [partyCreateValue]);

  useEffect(() => {
    if (partyCreateError) {
      setAlertType('fail');
      setAlertMessage('파티 생성에 실패하였습니다.');
      setIsOpenAlert(true);
    }
  }, [partyCreateError]);

  const steps = [
    {
      step: (
        <StepOttSelect
          ottServices={ottServices}
          onSelectOtt={handleSelectedOtt}
          ottId={newParty.ottId}
        />
      ),
    },
    {
      step: (
        <StepPeriodSelect
          startDate={newParty.startDate}
          onSelectStartDate={handleStartDate}
          period={newParty.period}
          onSelectPeriod={handlePeriod}
          checkSelectStartDate={checkSelectStartDate}
        />
      ),
    },
    {
      step: (
        <StepRuleSelect
          rules={newParty.ruleList}
          onSelectRule={handleSelectRules}
        />
      ),
    },
    {
      step: (
        <StepMemberSelect
          memberCount={newParty.partyMemberCapacity}
          onCounterClick={handleCounter}
          mustFilled={newParty.mustFilled}
          onConfirm={handleConfirm}
        />
      ),
    },
    {
      step: (
        <StepShardInfoForm
          sharedId={newParty.sharedId}
          sharedPassword={newParty.sharedPassword}
          sharedPasswordCheck={newParty.sharedPasswordCheck}
          onChangeInfo={handleChangeSharedInfo}
        />
      ),
    },
  ];

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'block',
          background: '#fff',
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            position: 'relative',
            minHeight: '100vh',
            pt: mdDownMatches ? '56px' : '72px',
            pb: 10,
          }}
        >
          <StyledStepper
            variant="progress"
            steps={5}
            position="static"
            activeStep={activeStep}
          />

          {steps[activeStep].step}

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
                disabled={stepComplete}
                onClick={handleNext}
              >
                다음 <KeyboardArrowRight />
              </StepperButton>
            ) : (
              <StepperButton
                type="submit"
                size="large"
                variant="contained"
                disabled={!complete}
              >
                완료
              </StepperButton>
            )}
          </BottomButtonWrapper>
        </Container>
      </form>
      <Alert
        isOpen={isOpenAlert}
        type={alertType}
        messege={alertMessage}
        onClose={handleCloseAlert}
      />
    </>
  );
};

const StyledStepper = styled(MobileStepper)`
  padding: 20px 0 0;
  background-color: transparent;
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
  bottom: 20px;
  padding: 2;
  width: 100%;
  padding: 0 30px;
`;

export default CreatePartyPage;
