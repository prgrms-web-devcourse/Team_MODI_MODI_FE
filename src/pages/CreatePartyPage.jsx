import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from '@mui/system';
import { Button, Box, MobileStepper, Container } from '@mui/material';
import { LoadingButton } from '@mui/lab';
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
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mdDownMatches = useMediaQuery(theme.breakpoints.down('md'));

  const [activeStep, setActiveStep] = useState(0);
  const [stepComplete, setStepComplete] = useState(false);
  const [complete, setComplete] = useState(false);

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

  const { ottServices } = useOttInfoState();
  const [rules] = useAsync(getRules);
  const [selectedOtt, fetchSelectedOttAPI] = useAsync(
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
  const {
    isLoading: partyCreateLoading,
    value: partyCreateValue,
    error: partyCreateError,
  } = partyCreateAPIState;

  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [checkSelectStartDate, setCheckSelectStartDate] = useState(true);

  // rule api ????????? key,value ??????
  useEffect(() => {
    if (rules.value) {
      const ruleList = rules.value.rules.map(rule => ({
        ...rule,
        isSelected: false,
      }));
      setNewParty(currentParty => ({
        ...currentParty,
        ruleList,
      }));
    }
  }, [rules.value]);

  // ott?????? ??? ott api ??????
  const handleSelectedOtt = useCallback(
    selectOttId => {
      fetchSelectedOttAPI(selectOttId);
    },
    [fetchSelectedOttAPI],
  );

  // ??????????????? ????????? ????????????.
  useEffect(() => {
    const entryOtt = searchParams.get('ottId');
    entryOtt && handleSelectedOtt(entryOtt);
  }, [handleSelectedOtt, searchParams]);

  useEffect(() => {
    selectedOtt.value &&
      setNewParty(currentParty => ({
        ...currentParty,
        ottId: selectedOtt.value.ottId,
        ottName: selectedOtt.value.ottName,
        grade: selectedOtt.value.grade,
      }));
  }, [selectedOtt.value]);

  // ?????? ?????? ???????????????
  const handleBack = useCallback(() => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }, []);

  // ?????? ?????? ???????????????
  const handleNext = useCallback(() => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setStepComplete(false);
  }, []);

  // ?????? ?????? ?????? ????????? ?????? ??????, ?????? ?????? active ??????
  useEffect(() => {
    switch (activeStep) {
      case 0:
        if (newParty.ottId && newParty.ottName) {
          setStepComplete(true);
        }
        break;

      case 1:
        if (newParty.startDate && newParty.period) {
          setStepComplete(true);
        }
        break;

      case 2:
        if (newParty.ruleList.some(({ isSelected }) => isSelected)) {
          setStepComplete(true);
        } else {
          setStepComplete(false);
        }
        break;

      case 3:
        if (newParty.mustFilled !== null) {
          setStepComplete(true);
        }
        break;

      case 4: {
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
        break;
      }

      default:
        return;
    }
  }, [newParty, activeStep]);

  // ???????????? ???????????????
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

  // ???????????? ????????? ??????
  const handlePeriod = period => {
    const endDate = calculateEndDate(newParty.startDate, period);
    setNewParty(currentParty => ({
      ...currentParty,
      period,
      endDate,
    }));
  };

  // rull ?????? ????????? ??????
  const handleSelectRules = newRuleList => {
    setNewParty(currentParty => ({
      ...currentParty,
      ruleList: newRuleList,
    }));
  };

  // ???????????? ?????? ????????? ??????
  const handleCounter = partyMemberCapacity => {
    setNewParty(currentParty => ({
      ...currentParty,
      partyMemberCapacity,
    }));
  };

  // mustFilled ?????? ????????? ??????
  const handleConfirm = mustFilled => {
    setNewParty(currentParty => ({
      ...currentParty,
      mustFilled,
    }));
  };

  // ?????? ?????? ?????? ?????? ????????? ??????
  const handleChangeSharedInfo = ({ name, value }) => {
    setNewParty(currentParty => ({
      ...currentParty,
      [name]: value,
    }));
  };

  // ???????????? ?????? ????????? ??????
  const handleSubmit = async e => {
    e.preventDefault();
    const submitData = partyCreateFormater(newParty);
    fetchPartyCreateAPI(submitData);
  };

  // ?????? ?????? ?????? ?????? alert
  useEffect(() => {
    if (partyCreateValue) {
      setAlertType('createSuccess');
      setAlertMessage('???????????? ??????????????????!');
      setIsOpenAlert(true);
    }
  }, [partyCreateValue]);
  useEffect(() => {
    if (partyCreateError) {
      setAlertType('fail');
      setAlertMessage('?????? ????????? ?????????????????????.');
      setIsOpenAlert(true);
    }
  }, [partyCreateError]);

  // ???????????? ??????/?????? ?????? ??????
  const handleCloseAlert = useCallback(() => {
    if (partyCreateValue) {
      const { partyId } = partyCreateValue;
      navigate(`/myParty/${partyId}`);
    }
    if (partyCreateError) {
      navigate('/');
    }
  }, [navigate, partyCreateValue, partyCreateError]);

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
      <StyledForm onSubmit={handleSubmit}>
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
              ??????
            </StepperButton>
            {activeStep !== 4 ? (
              <StepperButton
                type="button"
                size="large"
                variant="contained"
                disabled={!stepComplete}
                onClick={handleNext}
              >
                ?????? <KeyboardArrowRight />
              </StepperButton>
            ) : (
              <LoadingButton
                type="submit"
                size="large"
                variant="contained"
                loading={partyCreateLoading}
                disabled={!complete}
                sx={{ width: '48%' }}
              >
                ??????
              </LoadingButton>
            )}
          </BottomButtonWrapper>
        </Container>
      </StyledForm>
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

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  background: theme.palette.background.pageContent,
}));

export default CreatePartyPage;
